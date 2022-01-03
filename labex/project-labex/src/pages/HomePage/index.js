import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { DivButton, Title } from "./stylesHome";

 const HomePage = () => {

    const token = localStorage.getItem("token")
     return <div>
         <Title>LabeX</Title>
         
         <DivButton>
             {token ? <Link to={"/viagem"}> 
            <Button variant="outlined" color="primary">Área de administrador</Button>           
             </Link> : 
             <Link to={"/login"}> 
            <Button variant="outlined" color="primary">Área de administrador</Button>           
             </Link>}

             <Link to={"/inscriçao"}>
            <Button variant="contained" color="secondary">Quero me candidatar</Button>
             </Link>
         </DivButton>
     </div>
 }

 export default HomePage