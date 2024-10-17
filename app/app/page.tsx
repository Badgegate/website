
import Navbar from "../../components/navbar";
import OpportunityCard from "../../components/opportunity-card";

export default function Home() {
  return (
    <>
        <Navbar />
        <main className="flex-grow">
            <div className="flex flex-col gap-4 items-center mt-12 px-6">
                <OpportunityCard />
            </div>  
        </main>
        
    </>
  );
}
