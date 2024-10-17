import AnimatedLogo from "@/components/animated-logo";
import CTATop from "@/components/cta-top";
import LeadText from "@/components/lead-text";
import Card from "@/components/card";
import CTABottom from "@/components/cta-bottom";


export default function Home() {
  return (
    
        <main className="flex-grow">
          
          <CTATop />
          <AnimatedLogo />
          <LeadText />
          <Card 
            title="Common standard for badges and certificates" 
            description="Porro laboriosam repudiandae. Dolore alias expedita consequatur sed sapiente. Omnis modi amet eos quia unde. Distinctio est voluptas natus sed dignissimos."
          />
          <Card 
            flip
            title="Unlock opportunities with your verified credetials" 
            description="Est vel beatae dolores odit ipsam sed ut tenetur sit. Itaque enim sed sit delectus. Excepturi ea dolorem quia a cum saepe soluta maxime culpa. Possimus nihil voluptas quo qui."
          />
          <Card 
            title="Create synergies among initiatives in the network" 
            description="Rerum quia tempore temporibus. Et sed beatae quaerat quia. Atque quis dolor illo suscipit ipsum sed. Voluptatem possimus ipsum est."
          />
          <CTABottom />
        </main>
        
  );
}
