import { Credential } from '@/lib/types';

export const credentials: Credential[] = [
  {
    id: '1',
    name: 'TypeScript Smart Contract 101',
    description: 'Learn the fundamentals of smart contract development using TypeScript, covering basic concepts and best practices.',
    issuer: 'Blockchain Academy',
    link: 'https://blockchain.academy/courses/ts-smart-contract-101',
    derivationUrl: 'https://blockchain.academy',
    issuerUrl: "https://blockchain.academy",
    credentialSpec: {
      credentialType: "Verified course completion on Blockchain Academy",
      arguments: {
        "course": "TypeScript Smart Contract 101",
      }
    },
    canisterId: "bu5ax-5iaaa-aaaam-qbgcq-cai",
  },
  {
    id: '2',
    name: 'TypeScript Development 201',
    description: 'Advanced TypeScript development course covering design patterns, performance optimization, and enterprise-level applications.',
    issuer: 'CodeMasters',
    link: 'https://codemasters.com/typescript-201',
    derivationUrl: 'https://codemasters.com',
    issuerUrl: "https://codemasters.com",
    credentialSpec: {
      credentialType: "Verified course completion on CodeMasters",
      arguments: {
        "course": "TypeScript Development 201",
      }
    },
    canisterId: "bu5ax-5iaaa-aaaam-qbgcq-cai",
  },
  {
    id: '3',
    name: 'Solidity Programming',
    description: 'Comprehensive course on Solidity programming language, focusing on smart contract development for Ethereum.',
    issuer: 'Ethereum Academy',
    link: 'https://ethereum.academy/solidity',
    derivationUrl: 'https://ethereum.academy',
    issuerUrl: "https://ethereum.academy",
    credentialSpec: {
      credentialType: "Verified course completion on Ethereum Academy",
      arguments: {
        "course": "Solidity Programming",
      }
    },
    canisterId: "bu5ax-5iaaa-aaaam-qbgcq-cai",
  },
  {
    id: '4',
    name: 'Smart Contract Security',
    description: 'Learn to identify and prevent common security vulnerabilities in smart contracts, including best practices for auditing.',
    issuer: 'Blockchain Security Institute',
    link: 'https://bsi.edu/smart-contract-security',
    derivationUrl: 'https://bsi.edu/smart-contract-security',
    issuerUrl: "https://bsi.edu/smart-contract-security",
    credentialSpec: {
      credentialType: "Verified course completion on Blockchain Security Institute",
      arguments: {
        "course": "Smart Contract Security",
      }
    },
    canisterId: "bu5ax-5iaaa-aaaam-qbgcq-cai",
  },
  {
    id: '5',
    name: 'TypeScript Smart Contract 101',
    description: 'The credential proves that the owner successfully absolved an introduction to developing on the Internet Computer Protocol (ICP) platform using TypeScript.',
    issuer: 'Dacade',
    link: 'https://dacade.org/communities/icp/challenges/256f0a1c-5f4f-495f-a1b3-90559ab3c51f',
    derivationUrl: 'https://staging-dacade.netlify.app',
    issuerUrl: "https://dacade.org/",
    credentialSpec: {
      credentialType: "Verified course completion on Dacade",
      arguments: {
        "course": "typescript-smart-contract-101",
      }
    },
    canisterId: "bu5ax-5iaaa-aaaam-qbgcq-cai",
  },
  {
    id: '6',
    name: 'AI Dapp Development 101 ',
    description: 'Learn to identify and prevent common security vulnerabilities in smart contracts, including best practices for auditing.',
    issuer: 'Dacade',
    link: 'https://dacade.org/communities/icp/challenges/b549466d-5ff5-5f4c-b66b-52f2899309b5',
    derivationUrl: 'https://staging-dacade.netlify.app',
    issuerUrl: "https://dacade.org/",
    credentialSpec: {
      credentialType: "Verified course completion on Dacade",
      arguments: {
        "course": "ai-dapp-development-101",
      }
    },
    canisterId: "bu5ax-5iaaa-aaaam-qbgcq-cai",
  },
  {
    id: '7',
    name: 'Demo',
    description: 'This is an example listing for users to try out and experience the process. Check the details below for step-by-step instructions.',
    issuer: 'Dacade',
    link: 'https://rp-dacade-demo.vercel.app',
    derivationUrl: 'https://rp-dacade-demo.vercel.app',
    issuerUrl: "https://dacade.org/",
    credentialSpec: {
      credentialType: "Verified course completion on Dacade",
      arguments: {
        "course": "DEMO",
      }
    },
    canisterId: "bu5ax-5iaaa-aaaam-qbgcq-cai",
  },
];
