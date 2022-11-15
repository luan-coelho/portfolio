export default interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  owner: {
    login: string
  };
}
