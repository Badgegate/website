export interface Credential {
    id: string;
    name: string;
    description: string;
    issuer: string;
    link: string;
  }
  
  export interface Opportunity {
    id: string;
    postedDate: number;
    title: string;
    description: string;
    company: string;
    requiredCredentials: Credential[];
    markdownContent: string; // New field
  }

export type ICPAuthReturn = {
  isAuthenticated: boolean;
  principal: string | null;
  loginWithInternetIdentity: () => Promise<void>;
  logout: () => Promise<void>;
};
