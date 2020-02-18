/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
declare module 'vue-smooth-dnd' {
  import Vue from 'vue'

  import IContainerProps from '@/utils/drag-drop/interfaces/IContainerProps'
  import INodeDescription from '@/utils/drag-drop/interfaces/INodeDescription'

  class Container extends Vue {
    props: IContainerProps
  }

  class Draggable extends Vue {
    props: {
      tag?: string | INodeDescription;
    }
  }
}

declare module 'sanitize-html'
declare module 'wysiwyg'
declare module 'vue-wysiwyg'
