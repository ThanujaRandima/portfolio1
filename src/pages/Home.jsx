import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar.jsx";
import { Herosection } from "../components/Herosection";
 

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-google">
        <StarBackground />
        <Navbar />
        <Herosection />
    </div>
  );
};

export default Home;
