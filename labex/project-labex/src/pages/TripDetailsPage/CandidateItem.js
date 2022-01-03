import React from "react";
import {ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown'


const CandidateItem = (props) => {

    const approveCandidate = () => {
        console.log("aprovado")
        props.decideCandidate(true, props.candidate.id)
    }

    const rejectCandidate = () => {
        console.log("rejeitado")
        props.decideCandidate(false, props.candidate.id)
    }

    return <div>
        <ListItem>

            <ListItemText
                primary={props.candidate.name}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Aprovar" color="primary" onClick={approveCandidate}>
                    <ThumbUpIcon />
                </IconButton>
                <IconButton edge="end" aria-label="Rejeitar" color="secondary" onClick={rejectCandidate}>
                    <ThumbDownIcon />
                </IconButton>
            </ListItemSecondaryAction>

        </ListItem>

    </div>
}

export default CandidateItem