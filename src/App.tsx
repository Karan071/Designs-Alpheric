import Navbar from "./layout/Navbar";
import Dream from "./pages/Dream";
import Hero from "./pages/Hero";
import Project from "./pages/Project";
import CardSection from "./pages/CardSection";
import Services from "./pages/Services";
import NewHeights from "./pages/NewHeights";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dream/>
      <Project/>
      <CardSection/>
      <Services/>
      <NewHeights/>
      <Footer/>
    </>
  )
}

export default App
