import { Opportunity } from '@/lib/types';
import { credentials } from '@/lib/data/credentials';

export const opportunities: Opportunity[] = [
    {
      id: '1',
      postedDate: new Date('November 8, 2024 03:24:00').getTime(), 
      title: 'TypeScript Developer',
      description: 'Seeking a skilled TypeScript developer with ICP experience to join our talent pool. Work on cutting-edge blockchain and AI projects with an international development studio.',
      company: 'Ape Unit',
      requiredCredentials: [
        credentials[4], // Dacade TS101
      ],
      applyUrl: "https://forms.gle/bqQWLoYGDcwuxmNHA",
      markdownContent: `
### Introduction

Are you passionate about building the future with TypeScript, ICP, and emerging technologies? Join our talent pool at Ape Unit, where we work on exciting projects in blockchain and AI.

### About the Role

As part of our talent pool, you'll have the opportunity to work on diverse projects spanning blockchain, DeFi, and AI. We're looking for developers who can bring technical excellence and innovation to our client projects.

### What We Offer

- Work on cutting-edge blockchain and AI projects
- Flexible engagement opportunities
- Collaborative environment with industry experts
- Competitive compensation
- Access to our network of industry partners

### Requirements

- Strong TypeScript development experience
- Familiarity with Internet Computer development
- Problem-solving mindset and ability to work independently
    `
    },
    {
      id: '2',
      postedDate: new Date('November 7, 2024 01:24:00').getTime(), 
      title: 'ICP Innovator in Residence',
      description: 'Looking for visionary builders with proven development experience to receive funding and support for their ICP project ideas. Grants up to $20,000 available.',
      company: 'ICPHubGermany',
      requiredCredentials: [
        credentials[4], // TS101
        // credentials[2], // Solidity Programming
        // credentials[3]  // Smart Contract Security
      ],
      applyUrl: "https://forms.gle/2HsBsVuJonEnbhWU8",
      markdownContent: `
### Introduction

Have a groundbreaking project idea for the Internet Computer? We're offering grants up to $25,000 for innovative builders who can demonstrate their development capability and vision.

### Program Benefits

- Funding: Up to $20,000 in grant funding
- Network Access: Direct connection to the ICP ecosystem
- Technical Support: Development and architectural guidance
- Marketing Boost: Help with project visibility and promotion
- Community: Join a network of fellow innovators

### What We're Looking For

- Proven track record in development
- Innovative project ideas for the ICP ecosystem
- Commitment to building and launching on ICP
- Clear vision and execution plan

### Support Provided

- Technical mentorship
- Marketing and PR support
- Access to ICP Hub Germany's network
- Regular check-ins and milestone support
- Community building assistance    `
    },
    
  ];

export function getOpportunities() {
  return opportunities;
}

export function getOpportunityById(id: string) {
  return opportunities.find((opportunity) => opportunity.id === id);
}
