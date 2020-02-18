import ICard from './ICard'

export default interface IEntity {
    guid: String,
    label: String,
    type: String,
    products: Array<any>,
    cards: Array<ICard>,
    entities: Array<IEntity>
}
