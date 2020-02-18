<template>
  <div class="bubbles-wrapper">
    <div
      id="diagram"
      ref="bubbles"
      class="diagramStyling"
    />
    <div class="buttons flex">
      <button
        class="plus"
        @click="plus"
      >
        <i
          class="fas fa-plus"
        />
      </button>
      <button
        class="minus"
        @click="minus"
      >
        <i
          class="fas fa-minus"
        />
      </button>
      <b-field class="pl6 flex-auto limit-field" label="Limit by level">
        <b-slider
          v-model="level"
          :min="1"
          :max="maxLevel"
          lazy
        />
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import { GraphObject, GraphLinksModel, Diagram, Node, Spot, Shape, TextBlock, Binding, Link, Panel, Brush } from 'gojs'
import { createComponent, onMounted, watch, ref } from '@vue/composition-api'
import { chain, has, curry, get } from 'lodash'
import { RadialLayout } from './RadialLayout'
import { parents } from '@/utils/adjacency'

const { make } = GraphObject

interface INode {
  key: string
  level: number | undefined
  width: number | undefined
  height: number | undefined
  parent: string | undefined
  linkText: string | undefined
}

interface IModel {
  nodeDataArray: Array<INode>
  linkDataArray: Array<any>
  maxLevel: number
}

export default createComponent({
  name: 'Bubbles',
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  setup (props) {
    const multiplier = 15
    const level = ref(0)
    const maxLevel = ref(99999)
    const bubbles = ref(null)
    let myDiagram: Diagram | null = null

    /**
     * Count leve by each element.
     *
     * @param el Node element.
     * @param _index Node index.
     * @param arr: All nodes.
     */
    function countLevel (el: INode, _index: number, arr: Array<any>): INode {
      return {
        ...el,
        level: parents(arr, el.key).length
      }
    }

    /**
     * Count circle size by his level.
     *
     * @param level The node level.
     */
    function countSize ({ level }: INode) {
      return 100 - (((level as number) - 1) * multiplier)
    }

    /**
     * Count width and height for node element.
     *
     * @param el Node element.
     */
    function countWidthHeight (el: INode) {
      return {
        ...el,
        width: countSize(el),
        height: countSize(el)
      }
    }

    /**
     * Carry of has function.
     * What is carry you can read about that here https://javascript.info/currying-partials
     */
    const hasProperty = curry(has)

    /**
     * Prepare link.
     *
     * @param el Node element.
     */
    function preapreLink (el: INode) {
      return {
        from: el.parent,
        to: el.key,
        text: el.linkText
      }
    }

    /**
     * Prepare max.
     *
     * @param almostModel Object with some of model values like, nodeDataArray, linkDataArray etc.
     */
    function prepareMax (almostModel: any): IModel {
      return {
        ...almostModel,
        maxLevel: chain(almostModel.nodeDataArray)
          .map(countLevel)
          .map(el => get(el, 'level', 0))
          .max()
          .value()
      }
    }

    /**
     * Prepare links.
     *
     * @param nodeDataArray The list of Nodes.
     */
    function preparelinks (nodeDataArray: Array<any>): IModel {
      return {
        maxLevel: 0,
        nodeDataArray,
        linkDataArray: nodeDataArray
          .filter(hasProperty(curry.placeholder, 'parent'))
          .map(preapreLink)
      }
    }

    /**
     * Update model in Diagram.
     *
     * @param model Graph links model / Model for the diagram.
     */
    function updateModel (model: GraphLinksModel) {
      if (myDiagram !== null && model instanceof GraphLinksModel) {
        myDiagram.model = model
        myDiagram.isReadOnly = true
      }
      return myDiagram
    }

    /**
     * Update max level.
     *
     * @param model Model object width maxLevel value.
     */
    function updateMax (model: IModel): IModel {
      maxLevel.value = model.maxLevel
      level.value = model.maxLevel
      return model
    }

    /**
     * Plus button handler.
     */
    function plus () {
      if (myDiagram !== null) {
        myDiagram.commandHandler.increaseZoom()
      }
    }

    /**
     * Minus button handler.
     */
    function minus () {
      if (myDiagram !== null) {
        myDiagram.commandHandler.decreaseZoom()
      }
    }

    /**
     * Convert JSON to GraphLinksModel.
     *
     * @param model Model object with data.
     */
    function toGraphLinksModel (model: IModel): GraphLinksModel {
      return GraphLinksModel.fromJson(model) as GraphLinksModel
    }

    function nodeClicked (_e: any, root: any) {
      const diagram = root.diagram
      if (diagram === null) {
        return
      }
      // all other nodes should be visible and use the default category
      diagram.nodes.each(
        (n: any) => {
          n.visible = true
          if (n !== root) {
            n.category = ''
          }
        }
      )
      // make this Node the root
      root.category = 'Root'
      diagram.layout.root = root
      diagram.layoutDiagram(true)
    }

    watch(
      () => props.value,
      (newVal) => {
        chain(newVal)
          .map(countLevel)
          .map(countWidthHeight)
          .thru(preparelinks)
          .thru(prepareMax)
          .thru(updateMax)
          .thru(toGraphLinksModel)
          .thru(updateModel)
          .value()
      }
    )

    watch(
      level,
      (newVal) => {
        if (myDiagram !== null) {
          (myDiagram.layout as RadialLayout).maxLayers = newVal - 1
          myDiagram.layoutDiagram(true)
          nodeClicked(null, (myDiagram.layout as RadialLayout).root)
        }
      }
    )

    onMounted(
      () => {
        myDiagram = make(
          Diagram,
          (bubbles.value as unknown as HTMLDivElement), // Funcking Type Script :-(
          {
            padding: 10,
            layout: make(
              RadialLayout,
              {
                layerThickness: 150
              }
            )
          }
        )

        myDiagram.nodeTemplate = make(
          Node,
          'Auto',
          {
            locationSpot: Spot.Center,
            click: nodeClicked
          },
          make(
            Shape,
            'Circle',
            {
              width: 100,
              height: 100,
              fill: 'white',
              strokeWidth: 5,
              stroke: '#DDDDDD',
              portId: '',
              fromLinkable: false,
              toLinkable: false,
              cursor: 'pointer'
            },
            new Binding('width', 'width'),
            new Binding('height', 'height')
          ),
          make(
            TextBlock,
            {
              margin: 8,
              font: 'bold 16px sans-serif'
            },
            new Binding('text')
          )
        )

        myDiagram.linkTemplate = make(
          Link, // the whole link panel
          make(
            Shape, // the link shape
            { stroke: 'black' }
          ),
          make(
            Panel,
            'Auto',
            make(
              Shape, // the label background, which becomes transparent around the edges
              {
                fill: make(Brush, 'Radial', { 0: 'rgb(240, 240, 240)', 0.3: 'rgb(240, 240, 240)', 1: 'rgba(240, 240, 240, 0)' }),
                stroke: null
              }
            ),
            make(
              TextBlock, // the label text
              {
                textAlign: 'center',
                font: '10pt helvetica, arial, sans-serif',
                stroke: '#555555',
                margin: 4
              },
              new Binding('text', 'text')
            )
          )
        )

        chain(props.value)
          .map(countLevel)
          .map(countWidthHeight)
          .thru(preparelinks)
          .thru(prepareMax)
          .thru(updateMax)
          .thru(toGraphLinksModel)
          .thru(updateModel)
          .value()
      }
    )

    return {
      plus,
      minus,
      level,
      maxLevel,
      bubbles
    }
  }
})
</script>
<style scoped lang="scss">
@import "~bulma/sass/utilities/_all";
.bubbles-wrapper{
  position: relative;

  .diagramStyling{
    width: 100%;
    min-height: 500px;
    background-color: $white;
  }

  .buttons{
    position: absolute;
    width: 100%;

    button{
      cursor: pointer;
      border: 0;
      width: 44px;
      height: 44px;
    }
  }
}
</style>
