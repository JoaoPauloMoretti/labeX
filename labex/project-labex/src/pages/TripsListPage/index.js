import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import useTripsList from "../../hooks/useTripsList";
import { DivButton, Title } from "./styledList";

const TripListPage = () => {
    useProtectedPage()
    const trips = useTripsList()

    return <div>
        <Title>Lista de Viagens</Title>
        <DivButton>
            <Link to={"/criar/viagem"}>
                <Button variant="contained" color="primary">Criar Viagem</Button>
            </Link>
        </DivButton>

        <List component="nav">
            {trips.map((trip) => {
                return <Link to={`/viagem/detalhes/${trip.id}`}>
                    <ListItem button>
                        <ListItemText primary={trip.name} />
                    </ListItem>
                </Link>
            })}
        </List>
    </div>
}

export default TripListPage