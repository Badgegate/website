import { Credential } from '@/lib/types';

export const credentials: Credential[] = [
  {
    id: '1',
    name: 'TypeScript Smart Contract 101',
    description: 'Learn the fundamentals of smart contract development using TypeScript, covering basic concepts and best practices.',
    issuer: 'Blockchain Academy',
    link: 'https://blockchain.academy/courses/ts-smart-contract-101'
  },
  {
    id: '2',
    name: 'TypeScript Development 201',
    description: 'Advanced TypeScript development course covering design patterns, performance optimization, and enterprise-level applications.',
    issuer: 'CodeMasters',
    link: 'https://codemasters.com/typescript-201'
  },
  {
    id: '3',
    name: 'Solidity Programming',
    description: 'Comprehensive course on Solidity programming language, focusing on smart contract development for Ethereum.',
    issuer: 'Ethereum Academy',
    link: 'https://ethereum.academy/solidity'
  },
  {
    id: '4',
    name: 'Smart Contract Security',
    description: 'Learn to identify and prevent common security vulnerabilities in smart contracts, including best practices for auditing.',
    issuer: 'Blockchain Security Institute',
    link: 'https://bsi.edu/smart-contract-security'
  }
];
