import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CompetitionModel } from '../model/competition';

@Injectable({
  providedIn: 'root',
})
export class Master {
  $loginDone: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  onSaveCompetition(competitionObj: CompetitionModel) {
    return this.http.post(
      'https://api.freeprojectapi.com/api/ProjectCompetition/competition',
      competitionObj,
    );
  }

  getAllCompetitions() {
    return this.http.get('https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition');
  }
}
