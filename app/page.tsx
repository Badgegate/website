import AnimatedLogo from "@/components/animated-logo";
import CTATop from "@/components/cta-top";
import LeadText from "@/components/lead-text";
import Card from "@/components/card";
import CTABottom from "@/components/cta-bottom";
import Img1 from '@/components/svg/img1';
import Img2 from '@/components/svg/img2';
import Img3 from '@/components/svg/img3';
export default function Home() {
  return (
    <main className="flex-grow">
      <CTATop />
      <AnimatedLogo />
      <LeadText />
      <Card
        title="Unlock Real Opportunities"
        description="Turn your educational achievements into verified credentials that organizations trust and value, bridging the gap between learning and opportunity."
        image={<Img1 className="w-full h-full" />}
      />
      <Card
        flip
        title="Solving the Coordination Challenge"
        description="Qualified talent and valuable opportunities often miss each other. Our credential-based matching system ensures the right connections happen at the right time."
        image={<Img2 className="w-full h-full" />}
      />
      <Card
        title="Navigate Your Path"
        description="Discover clear progression paths through the ICP ecosystem with opportunities that perfectly match your skills and ambitions."
        image={<Img3 className="w-full h-full" />}
      />
      <CTABottom />
    </main>
  );
}
