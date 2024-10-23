import { Opportunity } from '@/lib/types';
import { credentials } from './credentials';

export const opportunities: Opportunity[] = [
    {
      id: '1',
      postedDate: Date.now() - 9 * 24 * 60 * 60 * 1000, // 9 days ago
      title: 'Senior DevOps Engineer',
      description: 'Blanditiis officia autem eos molestiae aut aliquam. Aperiam qui deleniti hic tempora deserunt in quia fugit.',
      company: 'DFINITY Foundation',
      requiredCredentials: [
        credentials[0], // TypeScript Smart Contract 101
        credentials[1]  // TypeScript Development 201
      ],
      markdownContent: `

Do you have extensive experience crafting high-performance, secure DevOps pipelines? Are you passionate about building the future of the internet on the cutting edge of blockchain technology? If you have deep expertise in Kubernetes, CI/CD, and PromQL, and you’re excited to push boundaries, then let’s talk!


### About the Role

As a Senior DevOps Engineer, you'll take the helm in designing, developing, and maintaining our highly available infrastructure for groundbreaking blockchain applications. You'll leverage your extensive experience and expertise in Kubernetes, CI/CD pipelines, and PromQL to not only automate deployments and optimize performance but also guide the overall DevOps strategy.

### Responsibilities
- Design, implement, and manage robust Kubernetes deployments for applications and services, ensuring scalability, security, and efficiency.
- Champion the use of PromQL for crafting intricate queries that monitor the performance and health of blockchain applications and the underlying infrastructure.
- Troubleshoot and diagnose complex issues within the Kubernetes environment.
- Collaborate extensively with development teams to establish and implement DevOps best practices for secure and efficient deployments.
- Continuously innovate and automate DevOps workflows to streamline processes.
- Stay at the forefront of advancements in Kubernetes, CI/CD tools, monitoring technologies, and the ever-evolving landscape of blockchain technology.
- Proactively identify and implement industry-leading security best practices to safeguard our infrastructure.
- Mentor engineers and share your vast knowledge of blockchain technology and DevOps principles.


### Qualifications
- 10+ years of related professional experience
- Proven track record of successfully designing, implementing, and managing large-scale, production-grade Kubernetes deployments.
- In-depth and demonstrable expertise in CI/CD principles and a variety of tools (e.g., Jenkins, GitLab CI/CD, etc.).
- Mastery of PromQL for querying and analyzing complex monitoring data, particularly from blockchain systems.
- Strong understanding of cloud platforms (AWS, Cloudflare).
- Excellent scripting skills (Bash, Python, etc.) and experience with infrastructure as code tools (e.g., Terraform).
- A deep understanding distributed systems, and their security considerations is crucial.
- Prior experience working with blockchain technologies is a plus.
- Exceptional communication, collaboration, and leadership skills.
- Ability to thrive in a fast-paced, innovative environment and work effectively as part of a talented team.

This is a remote role with much of the current team based in the US on EST, so preference for those that can work in overlapping time zones.

### About DFINITY and the Internet Computer:

The Internet Computer is the fastest and only infinitely scalable general-purpose blockchain — incubated and launched by the DFINITY Foundation in May 2021. A team of over 200 world-renowned cryptographers, distributed systems engineers, and programming language experts have taken on the massive technological challenge of building, maintaining, and continuously improving a ‘world computer’ powerful enough to host Web3 dApps, DeFi, games, NFTs, social media, and metaverse projects.

DFINITY was founded in 2016 by entrepreneur and crypto theoretician, Dominic Williams, and attracted interest and financial contributions from early members of the Ethereum community. Later, top-tier institutions such as Andreessen Horowitz, Polychain Capital, and SV Angel backed the Internet Computer in a collective effort to help build out Web3.

All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status.
    `
    },
    {
      id: '2',
      postedDate: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
      title: 'Blockchain Developer',
      description: 'Seeking an experienced blockchain developer to work on cutting-edge decentralized applications.',
      company: 'Ethereum Foundation',
      requiredCredentials: [
        credentials[2], // Solidity Programming
        credentials[3]  // Smart Contract Security
      ],
      markdownContent: `
# Front-end Software Engineer

Join our team as a Front-end Software Engineer and work on exciting projects!

## Responsibilities
- Develop user-friendly web applications.
- Collaborate with designers and back-end developers.
- Ensure high performance on mobile and desktop.

> "The best way to predict the future is to invent it." - Alan Kay

### Required Skills
1. Proficiency in TypeScript and JavaScript.
2. Experience with modern frameworks (React, Vue, etc.).
3. Strong understanding of web performance optimization.

## Why Join Us?
We offer a dynamic work environment and opportunities for growth. 

For more information, visit our [website](https://example.com).
    `
    }
  ];
