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
import { PrivateRoute } from "./fakeAuth";

function App() {
  return (
    <HashRouter>

      <Navigation />

      <Switch>
        <PrivateRoute path={toReport()}>
          <ReportPage />
        </PrivateRoute>
        <PrivateRoute path={toModelDetails()}>
          <ModelPage />
        </PrivateRoute>
        <PrivateRoute path={toModels()}>
          <ModelsPage />
        </PrivateRoute>
        <PrivateRoute path={toCalculateFrauds()}>
          <FraudPage />
        </PrivateRoute>
        <Route path={toLogin()}>
          <LoginPage />
        </Route>
        <Route path={toLogout()}>
          <LogoutPage />
        </Route>
        <PrivateRoute path="/">
          <ModelsPage />
        </PrivateRoute>
      </Switch>
    </HashRouter>
  );
}

export default App;
