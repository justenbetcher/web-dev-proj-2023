import { ref } from "vue";


const Exercises = ref({
    run: null as RunWalk | null,
    walk: null as RunWalk | null,
    swim: null as Swim | null,
    calistenics: null as CalistenicsWeight | null,
    weightTraining: null as CalistenicsWeight | null,
    hiit: null as HIIT | null
});
export interface RunWalk {
    unit: string;
    distance: number;
    time: number;
}

export interface Swim {
    poolSize: number;
    laps: number;
    time: number;
    stroke: string;
}

interface CalistenicsWeight {
    exercise: [];
    time: number;
}

interface HIIT {
    exercise: [];
    totalTime: number;
    restTime: number;
    workTime: number;
}

//an interface so i can pass what exercise the user posts to posts.ts and add it to the feed.
export interface Exercise {
    run: RunWalk;
    walk: RunWalk;
    swim: Swim;
    calistenics: CalistenicsWeight;
    weightLifting: CalistenicsWeight;
    hiit: HIIT;
}



export function useExercises() {
    return Exercises;
}

export function setRunWalk(unitPassed: string, distancePassed: number, timePassed: number){
    Exercises.value.run = {
        unit: unitPassed,
        distance: distancePassed,
        time: timePassed,
    }
    Exercises.value.walk = {
        unit: unitPassed,
        distance: distancePassed,
        time: timePassed,
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

