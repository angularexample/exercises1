import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface MyTask {
  title: string;
}

@Component({
  selector: 'app-exercise7',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './exercise7.html',
  styleUrl: './exercise7.css',
  standalone: true,
})
export class Exercise7 {
  protected tasks: MyTask[] = [];
  protected todoForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  protected addTask(): void {
    this.tasks.push({
      title: this.todoForm.value.title,
    });
    this.todoForm.reset();
  }

  protected removeTask(task: MyTask): void {
    this.tasks = this.tasks.filter(t => t.title !== task.title);
  }
}
