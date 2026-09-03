export class Project {
  submissionId: number;
  competitionId: number;
  userId: number;
  projectTitle: string;
  description: string;
  githubLink: string;
  submissionDate: Date;
  status: string;
  rank: number;

  constructor() {
    this.submissionId = 0;
    this.competitionId = 0;
    this.userId = 0;
    this.projectTitle = '';
    this.description = '';
    this.githubLink = '';
    this.submissionDate = new Date();
    this.status = '';
    this.rank = 0;
  }
}
