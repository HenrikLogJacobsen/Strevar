import { useContext } from "react"
import { ExistingGroupCtx } from "../context/ExistingGroupCtx"

export const useExistingGroupCtx = () => {
    const ctx = useContext(ExistingGroupCtx)

    if (!ctx) {
        throw Error("useExistingGroupCtx is outside GroupCtxProvider")
    }

    return ctx
}