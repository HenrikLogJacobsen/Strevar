import { useContext } from "react"
import { FollowCtx } from "../context/FollowCtx"

export const useFollowing = () => {
    const ctx = useContext(FollowCtx)

    if (!ctx) {
        throw Error("useFollowing is outside FollowCtxProvider")
    }

    return ctx
}