import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useProtectedPage from "../../hooks/useProtectedPage";
import CandidatesList from "./CandidatesList";
import { Title, InfosDiv } from "./styledDetail";
import TripInfoCard from "./TripInfoCard";

const TripDetailsPage = () => {
    useProtectedPage()
    const params = useParams()
    const [trip, setTrip] = useState()

    const getTripDetails = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopaulo/trip/${params.viagemId}`, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        }).then((response) => {
            setTrip(response.data.trip)
        })
            .catch((error) => {
                console.log(error.response)
            })
    }

    useEffect(() => {
        getTripDetails()
    }, [])

    const decideCandidate = (approve, candidateId) => {
        const body = {
            approve: approve
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopaulo/trips/${params.viagemId}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        }).then(() => {
            getTripDetails()
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    return <div>
        <Title>Detalhes da viagem</Title>


        {trip ? <InfosDiv>
            <TripInfoCard trip={trip} />
            <CandidatesList 
            candidates={trip.candidates} 
            decideCandidate={decideCandidate}/>
        </InfosDiv> : <p>carregando...</p>}

    </div>
}

export default TripDetailsPage