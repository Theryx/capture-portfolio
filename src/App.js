import GlobalStyle from "./components/GlobalStyle";
import { BrowswerRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//GlobalStyle
function App() {
  return (
    <BrowswerRouter>
      <div className="App">
        <GlobalStyle />
        <Navbar />
        <AboutUs />
        <OurWork />
        <ContactUs />
      </div>
    </BrowswerRoute>
  );
}

export default App;
