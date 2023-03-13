import About from "./Components/About";
import { Home } from "./Components/Home";
import Navbar from "./Components/Navbar";
import Gallery from "./Components/Gallery";
import "tailwindcss/tailwind.css";
import '../src/gallery.css'


function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <About />
     <Gallery />
    

    </div>
  );
}

export default App;
