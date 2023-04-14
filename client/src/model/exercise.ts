import { ref } from "vue";


const Workout = ref({
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
    return Workout;
}

export function resetExercise(workout: string){
    Workout.value.exercise = {
        workoutType: workout,
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
    if (Workout.value.exercise == null) {
        return;
    }
    Workout.value.exercise.circuitArray = movments.split('; ');
}

