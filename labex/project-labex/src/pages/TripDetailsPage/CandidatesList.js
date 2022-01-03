import React from "react";
import { Card, CardContent, Typography, List } from "@material-ui/core";
import CandidateItem from "./CandidateItem";


const CandidatesList = (props) => {
  return <Card>
    <CardContent>
      <Typography variant="h5" gutterBottom> Candidatos : </Typography>

      <List>

      {props.candidates.map((candidates)=> {
        return <CandidateItem candidate={candidates} decideCandidate={props.decideCandidate}/>
      })}

      </List>


    </CardContent>
  </Card>
}

export default CandidatesList