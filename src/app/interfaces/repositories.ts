export interface repositoryData {
  _id: string;
  type?: string;
  url?: string;
  owner?: string;
  name?: string;
  description?: string;
  website?: string;
  private?: boolean;
  has_issues?: boolean;
  has_wiki?: boolean;
  has_downloads?: boolean;
  labels?: Array<{
    url: string;
    name: string;
    color: string;
    description: string;
    created_at: Date;
  }>;
  collaborators?: Array<any>;
  created_at?: Date;
  git_url?: string;
  default_branch?: string;
  webhooks?: Array<any>;
  public_keys?: Array<any>;
  __v: 0;
}
