import { BrowserRouter, Switch, Route } from "react-router-dom";
import ApplicationPage from "./pages/ApplicationPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import TripListPage from "./pages/TripsListPage";
import styled from "styled-components";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

function App() {
  return (
    <BrowserRouter>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AppContainer>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>


        <Route exact path={"/inscriçao"}>
          <ApplicationPage />
        </Route>

        <Route exact path={"/viagem"}>
          <TripListPage />
        </Route>

        <Route exact path={"/criar/viagem"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/viagem/detalhes/:viagemId"}>
          <TripDetailsPage />
        </Route>


      </Switch>
      </AppContainer>
     </MuiPickersUtilsProvider>
    </BrowserRouter>
  );
}

export default App;
