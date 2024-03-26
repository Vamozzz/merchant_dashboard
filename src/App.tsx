import { BrowserRouter } from "react-router-dom";
import MainContent from "./containers/mainContent/mainContent";
import LoginPage from "./pages/auth/login";
// import Router from "./routes/router";
import Layout from "./layout/layout";
import Home from "./pages/home/home";
import Router from "./routes/router";

function App() {
  return (
    <div className="">
      {/* <MainContent /> */}
      {/* <LoginPage /> */}
      <Router />
    </div>
  );
}

export default App;
