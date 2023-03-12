import { ref } from "vue";


const Workout = ref({
    exercise: null as Exercise | null
});


export interface Exercise {
    name: string;
    unit?: string;
    poolSize?: number;
    distance?: number;
    laps?: number;
    time?: number;
    stroke?: string;
}

export function useExercises() {
    return Workout;
}

export function resetExercise(){
    Workout.value.exercise = {
        name: '',
        unit: '',
        distance: 0,
        time: 0,
        poolSize: 0,
        laps: 0,
        stroke: '',

    }
}


