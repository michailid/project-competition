import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-project-submissions',
  imports: [],
  templateUrl: './project-submissions.html',
  styleUrl: './project-submissions.css',
})
export class ProjectSubmissions {
  masterService = inject(Master);
  currentCompetitionId: number = 0;
  submissionList: any[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((res: any) => {
      debugger;
      this.currentCompetitionId = res.id;
      this.getAllSubmissions();
    });
  }

  getAllSubmissions() {
    this.masterService
      .getAllSubmissionsByCompetitionId(this.currentCompetitionId)
      .subscribe((res: any) => {
        this.submissionList = res;
      });
  }
}
