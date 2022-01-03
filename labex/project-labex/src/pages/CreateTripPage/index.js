import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Title, TripForm } from "./styledCreateTrip";
import { KeyboardDatePicker } from "@material-ui/pickers"
import useForm from "../../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";

const CreateTripPage = () => {
    useProtectedPage()
    const {form, onChange, clear} = useForm({name: "", planet: "", description: "", durationInDays: ""})
    const history = useHistory()
    const [date, setDate] = useState(new Date())

    const onSubmit = (event) => {
        event.preventDefault()
       
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        
        const body = {
            name: form.name,
            planet: form.planet,
            date: formattedDate,
            description: form.description,
            durationInDays: form.durationInDays
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopaulo/trips`, body, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        }).then(()=> {
            history.push("/viagem")
            clear()
        })
        .catch((error)=> {
            console.log(error.response)
        })
    }

    return <div>
        <Title> Criar Viagem </Title>

        <TripForm onSubmit={onSubmit}>
            <TextField
            name="name" 
            label="Nome" 
            variant="standard"
            value={form.name}
            onChange={onChange}
            ></TextField>

            <TextField
            name="planet" 
            label="Planeta" 
            variant="standard"
            value={form.planet}
            onChange={onChange}
            ></TextField>

            <KeyboardDatePicker
            name="date" 
            label="Data" 
            format="dd/MM/yyyy" 
            variant="inline"
            value={date}
            onChange={date => setDate(date)}
            />

            <TextField
            name="description" 
            label="Descrição" 
            variant="standard"
            value={form.description}
            onChange={onChange}
            ></TextField>

            <TextField
            name="durationInDays" 
            label="Duração em dias" 
            variant="standard" 
            type="number"
            value={form.durationInDays}
            onChange={onChange}
            ></TextField>

            <Button variant="contained" type="submit" color="secondary"> Criar </Button>
        </TripForm>
    </div>
}

export default CreateTripPage