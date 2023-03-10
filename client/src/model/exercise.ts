import { ref } from "vue";


const Exercises = ref({
    run: null as RunWalk | null,
    walk: null as RunWalk | null,
    swim: null as Swim | null,
    calistenics: null as CalistenicsWeight | null,
    weightTraining: null as CalistenicsWeight | null,
    hiit: null as HIIT | null
})
export interface RunWalk {
    unit: number;
    distance: number;
    time: number;
    elevation?: number;
}

export interface Swim {
    poolSize: number;
    laps: number;
    time: number;
    stroke: string;
}

export interface CalistenicsWeight {
    exercise: [];
    time: number;
}

export interface HIIT {
    exercise: [];
    totalTime: number;
    restTime: number;
    workTime: number;
}



export function useExercises() {
    return Exercises;
}

export function setRun(unitPassed: number, distancePassed: number, timePassed: number, elevationPassed: number){
    Exercises.value.run = {
        unit: unitPassed,
        distance: distancePassed,
        time: timePassed,
        elevation: elevationPassed
    }
}

export function setWalk(unitPassed: number, distancePassed: number, timePassed: number, elevationPassed: number){
    Exercises.value.walk = {
        unit: unitPassed,
        distance: distancePassed,
        time: timePassed,
        elevation: elevationPassed
    }
}

export function setSwim(poolSizePassed: number,lapsPassed: number, timePassed: number, strokePassed: string) {
    Exercises.value.swim = {
        poolSize: poolSizePassed,
        laps: lapsPassed,
        time: timePassed,
        stroke: strokePassed,
    }
}

