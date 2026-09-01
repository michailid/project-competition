export class CompetitionModel {
  competitionId: 0;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;

  constructor() {
    this.competitionId = 0;
    this.title = '';
    this.description = '';
    this.startDate = new Date();
    this.endDate = new Date();
    this.status = '';
  }
}
