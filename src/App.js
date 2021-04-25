import { BrowserRouter } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import MainRouter from "./MainRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <MainRouter />
      <AppFooter />
    </BrowserRouter>
  );
};

export default App;
