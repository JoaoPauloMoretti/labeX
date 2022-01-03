import { Typography } from "@material-ui/core";
import React from "react";

 const TripInfoItem = (props) => {
     return <Typography variant="body1">
         <strong>{props.name}</strong> : {props.info}

     </Typography>
 }

 export default TripInfoItem