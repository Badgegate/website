import OpportunityCard from "@/components/opportunity-card";
import { opportunities } from "@/lib/data/opportunities";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <div className="text-center px-6 my-20">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">
            Explore opportunities
          </h1>
          <p className="text-foreground">
            Seeking top talent or a qualified audience? <br />
            <Link
              href="mailto:hello@badgegate.org"
              className="text-primary font-medium hover:underline"
            >
              Contact us{" "}
            </Link>
            {` `}
            to join our curated listing.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center px-6">
          {opportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              {...opportunity}
              markdownContent=""
            />
          ))}
        </div>
      </main>
    </>
  );
}
