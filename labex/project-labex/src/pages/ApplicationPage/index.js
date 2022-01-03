import React from "react";
import { Title, ApplicationForm } from "./styledApplication"
import { Button, TextField, Select, InputLabel, FormControl, MenuItem } from "@material-ui/core";
import axios from "axios";
import useForm from "../../hooks/useForm";
import useTripsList from "../../hooks/useTripsList";

const ApplicationPage = () => {

  const trips = useTripsList()
  const {form, onChange, clear } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
    trip: null
  })

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopaulo/trips/${form.trip.id}/apply`, body)
    .then((response)=> {
      console.log("deu bom")
      clear()
    })
    .catch((error)=> {
      console.log(error.response)
    })
  }

  return <div>
    <Title> Aplicar para viagem </Title>

    <ApplicationForm onSubmit={onSubmit}>
      <TextField
        name="name"
        label="Nome"
        variant="outlined"
        value={form.name}
        onChange={onChange}
        required
      ></TextField>

      <TextField
        name="age"
        label="Idade"
        variant="outlined"
        type="number"
        value={form.age}
        onChange={onChange}
        required
      ></TextField>

      <TextField
        name="applicationText"
        label="Texto de aplicação"
        variant="outlined"
        helperText="Explique por que voce é um bom candidato"
        value={form.applicationText}
        onChange={onChange}
        required>        
      </TextField>

      <TextField
        name="profession"
        label="Profissão"
        variant="outlined"
        value={form.profession}
        onChange={onChange}
        required>
      </TextField>

      <FormControl>
        <InputLabel id="select-países">País</InputLabel>
        <Select
          name="country"
          labelId="select-países"
          label="País"
          value={form.country}
          onChange={onChange}
          required
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'brasil'}>Brasil</MenuItem>
          <MenuItem value={'argentina'}>Argentina</MenuItem>
          <MenuItem value={'chile'}>Chile</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="select-viagens">Viagens</InputLabel>
        <Select
          name="trip"
          labelId="select-viagens"
          label="Viagens"
          value={form.trip}
          onChange={onChange}
          required
        >

          {trips.map((trip) => {
            return <MenuItem value={trip}>{trip.name}</MenuItem>
          })}

        </Select>
      </FormControl>
      <Button variant="contained" type="submit" color="secondary">Entrar</Button>
    </ApplicationForm>
  </div>
}

export default ApplicationPage