export default interface ICard {
  label: string,
  instructions: string,
  questions: Array<{[k: string]: any}>,
  helpText: string,
  helpImage: string
}
