import { ref } from "vue";


const Workout = ref({
    exercise: null as Exercise | null
});


export interface Exercise {
    name: string;
    unit: string;
    poolSize: number;
    distance: number;
    laps: number;
    time: number;
    stroke: string;
}





export function useExercises() {
    return Workout;
}

export function setRunWalk(unitPassed: string, distancePassed: number, timePassed: number){
    Workout.value.exercise = {
        name: 'Run/Walk',
        unit: unitPassed,
        distance: distancePassed,
        time: timePassed,
        poolSize: 0,
        laps: 0,
        stroke: '',
    }
}

export function setSwim(poolSizePassed: number,lapsPassed: number, timePassed: number, strokePassed: string) {
    Workout.value.exercise = {
        name: 'Swim',
        poolSize: poolSizePassed,
        laps: lapsPassed,
        time: timePassed,
        stroke: strokePassed,
        distance: 0,
        unit: '',
    }
}

