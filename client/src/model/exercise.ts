import { ref } from "vue";


const workout = ref({
    exercise: null as Exercise | null
});


export interface Exercise {
    workoutType: string;
    unit?: string;
    poolSize?: number;
    distance?: number;
    laps?: number;
    time?: number;
    stroke?: string;
    circuitArray?: string[];
    comment?: string;
}

export function useExercises() {
    return workout;
}

export function resetExercise(type: string){
    workout.value.exercise = {
        workoutType: type,
        unit: '',
        distance: 0,
        time: 0,
        poolSize: 0,
        laps: 0,
        stroke: '',
        comment: '',
        circuitArray: [],
    }
}

export function enterCircuit(movments: string) {
    if (workout.value.exercise == null) {
        return;
    }
    workout.value.exercise.circuitArray = movments.split('; ');
}

