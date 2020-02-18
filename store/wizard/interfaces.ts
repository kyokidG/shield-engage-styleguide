export interface IWizard {
    stages: Array<any>,
    currentTasks: Array<any>,
    currentCards: Array<string>,
    activeStage?: any,
    activeTask?: any,
    activeCard?: any,
    config: any,
    stagesDone: Array<any>,
    tasksDone: Array<any>,
    cardsDone: Array<any>,
}

export interface Step {
    name: string,
    index: number
}
