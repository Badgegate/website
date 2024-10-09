import AnimatedLogo from "../../components/animated-logo";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <>
        <Navbar />
        <main className="flex-grow">
          
          <AnimatedLogo />
          
        </main>
        
    </>
  );
}
