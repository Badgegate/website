import { Opportunity } from '@/lib/types';

export const opportunities: Opportunity[] = [
    {
      id: '1',
      postedDate: Date.now() - 9 * 24 * 60 * 60 * 1000, // 9 days ago
      title: 'Front-end Software Engineer',
      description: 'Blanditiis officia autem eos molestiae aut aliquam. Aperiam qui deleniti hic tempora deserunt in quia fugit.',
      company: 'DFINITY Foundation',
      requiredCredentials: [
        {
          id: '1',
          name: 'TypeScript Smart Contract 101',
          issuer: 'Blockchain Academy',
          level: 'Intermediate'
        },
        {
          id: '2',
          name: 'TypeScript Development 201',
          issuer: 'CodeMasters',
          level: 'Advanced'
        }
      ],
      markdownContent: ''
    },
    {
      id: '2',
      postedDate: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
      title: 'Blockchain Developer',
      description: 'Seeking an experienced blockchain developer to work on cutting-edge decentralized applications.',
      company: 'Ethereum Foundation',
      requiredCredentials: [
        {
          id: '3',
          name: 'Solidity Programming',
          issuer: 'Ethereum Academy',
          level: 'Advanced'
        },
        {
          id: '4',
          name: 'Smart Contract Security',
          issuer: 'Blockchain Security Institute',
          level: 'Intermediate'
        }
      ],
      markdownContent: ''
    }
  ];