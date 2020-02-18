
export interface IApplication {
    guid: String,
    index: Number,
    locked: Boolean,
    label: String,
    helpText: String
}

export interface IInstitution {
    guid: String,
    name: String,
    type: String,
    applications: Array<IApplication>,
    faqs: Array<ICategory>
}

interface ICategory {
    categoryName: String,
    categorySlug: String,
    categoryIndex: Number,
    questions: Array<IFAQQuestion>
}

interface IFAQQuestion {
    index: Number,
    question: String,
    answer: String
}
