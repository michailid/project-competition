import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CompetitionModel } from '../model/competition';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class Master {
  $loginDone: Subject<void> = new Subject<void>();
  apiURL: string = 'https://api.freeprojectapi.com/api/ProjectCompetition/';

  constructor(private http: HttpClient) {}

  onSaveCompetition(competitionObj: CompetitionModel) {
    return this.http.post(this.apiURL + 'competition', competitionObj);
  }

  onSubmitProject(projectObj: Project) {
    return this.http.post(this.apiURL + 'project', projectObj);
  }

  getAllCompetitions() {
    return this.http.get<CompetitionModel[]>(`${this.apiURL}GetAllCompetition`);
  }

  getAllSubmissionsByCompetitionId(competitionId: number) {
    return this.http.get<CompetitionModel[]>(
      `${this.apiURL}project/byCompetition/${competitionId}`,
    );
  }
}
