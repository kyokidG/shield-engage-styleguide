export interface IQuestion {
    guid: String,
    index: Number,
    type: String,
    options: Array<String>,
    required: Boolean,
    validation: Object,
    label: String,
    helpText: String,
    value: any,
    note: String,
    approved: Boolean
}
export interface ICard {
    guid: String,
    index: Number,
    locked: Boolean,
    label: String,
    helpText: String,
    questions: Array<IQuestion>
}
export interface IEntity {
    guid: String,
    label: String,
    type: String,
    products: Array<any>,
    cards: Array<ICard>,
    entities: Array<IEntity>
}
