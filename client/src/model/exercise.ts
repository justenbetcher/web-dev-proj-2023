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
    circuitArray?: string[];
    comment?: string;
}

export function useExercises() {
    return Workout;
}

export function resetExercise(workoutType: string){
    Workout.value.exercise = {
        name: workoutType,
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
    Workout.value.exercise.circuitArray = movments.split('\n');
}

