import Navbar from "@/components/navbar";
import OpportunityForm from "@/components/opportunity-form";
// import Link from "next/link";

export default async function Submit() {
  

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <div className="text-center px-6 my-20">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Create your opportunity</h1>
          
        </div>
        <OpportunityForm />
         
      </main>
    </>
  );
}
