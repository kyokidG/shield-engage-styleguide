import IApplication from './IApplication'

export default interface IInstitution {
    guid: String,
    name: String,
    type: String,
    applications: Array<IApplication>
}
