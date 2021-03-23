import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
//GlobalStyle
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AboutUs />
    </div>
  );
}

export default App;
