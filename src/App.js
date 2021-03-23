import GlobalStyle from "./components/GlobalStyle";
import { BrowswerRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//GlobalStyle
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
