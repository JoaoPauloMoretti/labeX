import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import TripInfoItem from "./TripInfoItem";

 const TripInfoCard = (props) => {

    const {name, planet, date, description, durationInDays} = props.trip

     return <Card>
        <CardContent>
            <Typography variant="h5" gutterBottom> Informações da Viagem :</Typography>

            <TripInfoItem name={"Nome"} info={name}/>
            <TripInfoItem name={"Planeta"} info={planet}/>  
            <TripInfoItem name={"Data"} info={date}/>  
            <TripInfoItem name={"Descrição"} info={description}/>  
            <TripInfoItem name={"Duração em dias"} info={durationInDays}/>              

        </CardContent>
        </Card>


     
 }

 export default TripInfoCard