import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LOGIN_STORAGE_KEY } from '../../constants';
import { Master } from '../../services/master';

@Component({
  selector: 'app-register-event',
  imports: [ReactiveFormsModule],
  templateUrl: './register-event.html',
  styleUrl: './register-event.css',
})
export class RegisterEvent {
  masterService = inject(Master);

  submissionForm: FormGroup = new FormGroup({
    submissionId: new FormControl(0),
    competitionId: new FormControl(0),
    userId: new FormControl(0),
    projectTitle: new FormControl(''),
    description: new FormControl(''),
    githubLink: new FormControl(''),
    submissionDate: new FormControl(new Date()),
    status: new FormControl(''),
    rank: new FormControl(0),
  });

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((res: any) => {
      debugger;
      this.submissionForm.controls['competitionId'].setValue(res.id);
    });
    const localData = localStorage.getItem(LOGIN_STORAGE_KEY);
    debugger;
    if (localData != null) {
      const parseData = JSON.parse(localData);
      this.submissionForm.controls['userId'].setValue(parseData.userId);
      debugger;
    }
  }

  onSubmit() {
    this.masterService.onSubmitProject()
  }
}
