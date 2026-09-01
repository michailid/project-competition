import { Component, inject, OnInit, signal } from '@angular/core';
import { CompetitionModel } from '../../model/competition';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [FormsModule, DatePipe],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events implements OnInit {
  competitionObj: CompetitionModel = new CompetitionModel();
  http = inject(HttpClient);
  events = signal<CompetitionModel[]>([]);

  ngOnInit(): void {
    this.getAllEvents();
  }

  onSave() {
    this.http
      .post(
        'https://api.freeprojectapi.com/api/ProjectCompetition/competition',
        this.competitionObj,
      )
      .subscribe({
        next: (res) => {
          alert('Competition saved successfully');
        },
        error: (error) => {
          alert('Error: ' + error.error);
        },
      });
  }

  getAllEvents() {
    this.http
      .get('https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition')
      .subscribe({
        next: (res: any) => {
          this.events.set(res);
          console.log(this.events());
        },
        error: (error) => {
          alert('Error: ' + error.error);
        },
      });
  }
}
