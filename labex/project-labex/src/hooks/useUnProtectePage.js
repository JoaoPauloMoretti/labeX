import { useHistory } from "react-router"
import { useLayoutEffect } from "react"

const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
           history.push("/")
        }
    },)
}

export default useUnprotectedPage