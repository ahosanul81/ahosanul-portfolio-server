export type TProject = {
  projectName: string;
  idea: string;
  homePageImg: string | undefined;
  technologies: string[];
  features: string[];
  githubRepo: {
    clientSite: string;
    backendSite: string;
  };
  liveLink: string;
  developerNotes: string;
  description: string;
};
