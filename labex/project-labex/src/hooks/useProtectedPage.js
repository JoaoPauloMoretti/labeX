import { useHistory } from "react-router"
import { useLayoutEffect } from "react"

const useProtectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            history.push("/login")
        }
    },)
}

export default useProtectedPage