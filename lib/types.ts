export interface Credential {
    id: string;
    name: string;
    issuer?: string;
    level?: string;
  }
  
  export interface Opportunity {
    id: string;
    postedDate: number;
    title: string;
    description: string;
    company: string;
    requiredCredentials: Credential[];
  }