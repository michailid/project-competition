import { Component, inject } from '@angular/core';
import { Master } from '../../services/master';
import { Observable } from 'rxjs';
import { CompetitionModel } from '../../model/competition';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  masterService = inject(Master);
  $eventList: Observable<CompetitionModel[]> = new Observable<CompetitionModel[]>();

  constructor() {
    this.$eventList = this.masterService.getAllCompetitions();
  }
}
