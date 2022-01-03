import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnProtectePage";
import { LoginForm, Title } from "./styledLogin";

const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    const { form, onChange, clear } = useForm({ email: "", password: "" })

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(form)

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopaulo/login`, form)
            .then((response) => {
                window.localStorage.setItem("token", response.data.token)
                history.push("/viagem")
                clear()
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    return <div>
        <Title>Login </Title>

        <LoginForm onSubmit={onSubmit}>
            <TextField
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                value={form.email}
                onChange={onChange}
                required
            ></TextField>

            <TextField
                name="password"
                label="Senha"
                variant="outlined"
                type="password"
                value={form.password}
                onChange={onChange}
                required
            ></TextField>
            <Button variant="contained" type="submit" color="secondary">Entrar</Button>
        </LoginForm>
    </div>
}

export default LoginPage