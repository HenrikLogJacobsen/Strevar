import { useContext } from "react"
import { WorkoutCtx } from "../context/WorkoutContext"

export const useWorkoutCtx = () => {
    const ctx = useContext(WorkoutCtx)

    if (!ctx) {
        throw Error("useWorkoutCtx is outside WorkoutCtxProvider")
    }

    return ctx
}