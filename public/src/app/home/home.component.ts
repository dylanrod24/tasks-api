import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks = [];
  newTask: any;
  constructor(private _httpService: HttpService) { } // '_httpService is the name and HttpService  is the type

  ngOnInit() {
    // this.getTasksFromService();
    this.newTask = { title: "", description: "" }
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe((data: any) => {
      console.log("Got our data!", data);
      this.tasks = data.data;
    });
  }
  onButtonClick(): void {
    this.getTasksFromService(); // Having the component invoke getTasks from service.ts
  }
  onSubmit() {
    const observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      //  this.newTask = {title: "", description: ""}
    });
  }
}
