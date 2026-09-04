import { Component, inject, OnInit, signal } from '@angular/core';
import { CompetitionModel } from '../../model/competition';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Master } from '../../services/master';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [FormsModule, DatePipe, RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events implements OnInit {
  competitionObj: CompetitionModel = new CompetitionModel();
  http = inject(HttpClient);
  events = signal<CompetitionModel[]>([]);
  masterService = inject(Master);

  ngOnInit(): void {
    this.getAllData();
  }

  onSave() {
    this.masterService.onSaveCompetition(this.competitionObj).subscribe({
      next: (res) => {
        alert('Competition saved successfully');
      },
      error: (error) => {
        alert('Error: ' + error.error);
      },
    });
  }

  getAllData() {
    this.masterService.getAllCompetitions().subscribe({
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
