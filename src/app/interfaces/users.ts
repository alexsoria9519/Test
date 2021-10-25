export interface UserData {
  _id?: string;
  type?: string;
  url?: string;
  avatar_url?: string;
  login?: string;
  name?: string;
  bio?: string;
  company?: string;
  website?: string;
  location?: string;
  emails?: Array<{
    address: string;
    primary: true;
    verified: true;
  }>;
  billing_plan?: {
    name: string;
    space: number;
    private_repos: number;
  };
  created_at?: Date;
  __v?: number;
}
