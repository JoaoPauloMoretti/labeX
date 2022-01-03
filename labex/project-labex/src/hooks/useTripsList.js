import { useEffect, useState } from "react";
import axios from "axios";

const useTripsList = () => {

    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaopaulo/trips")
          .then((response) => setTrips(response.data.trips))
          .catch((error) => console.log(error))
      }, [])

    return trips
}

export default useTripsList