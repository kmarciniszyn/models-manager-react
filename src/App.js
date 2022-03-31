import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import LoginPage from "./features/authentication/LoginPage";
import LogoutPage from "./features/authentication/LogoutPage";
import ModelsPage from "./features/models/ModelsPage";
import ReportPage from "./features/models/ReportPage";
import FraudPage from "./features/models/FraudPage";
import ModelPage from "./features/models/ModelPage";
import {
  toCalculateFrauds,
  toLogin,
  toLogout,
  toModelDetails,
  toModels,
  toReport
} from "./routes";

function App() {
  return (
    <HashRouter>

      <Navigation />

      <Switch>
        <Route path={toReport()}>
          <ReportPage />
        </Route>
        <Route path={toModelDetails()}>
          <ModelPage />
        </Route>
        <Route path={toModels()}>
          <ModelsPage />
        </Route>
        <Route path={toCalculateFrauds()}>
          <FraudPage />
        </Route>
        <Route path={toLogin()}>
          <LoginPage />
        </Route>
        <Route path={toLogout()}>
          <LogoutPage />
        </Route>
        <Route path="/">
          <ModelsPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
