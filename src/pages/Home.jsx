import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <StarBackground />
        <Navbar />
    </div>
  );
};

export default Home;
