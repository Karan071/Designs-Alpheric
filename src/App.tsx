import Navbar from "./layout/Navbar";
import Dream from "./pages/Dream";
import Hero from "./pages/Hero";
import Project from "./pages/Project";
import CardSection from "./pages/CardSection";
import Services from "./pages/Services";
import NewHeights from "./pages/NewHeights";
import Footer from "./layout/Footer";
import Reels from "./component/Reel";
import Fab from "./component/Fab";

function App() {
  return (
    <>
      <Fab />
      <Reels />
      {/* Main sections */}
      <Navbar />
      <Hero />
      <Dream />
      <Project />
      <CardSection />
      <Services />
      <NewHeights />
      <Footer />
    </>
  )
}

export default App
