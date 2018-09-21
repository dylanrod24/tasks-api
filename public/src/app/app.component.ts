import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'API';
  tasks = [];
  isHidden = true;

  constructor(private _httpService: HttpService){ // '_httpService is the name and HttpService  is the type
  }
  ngOnInit(){
  }
 getTasksFromService() {
     let observable = this._httpService.getTasks();
     observable.subscribe((data: any) => {
         console.log("Got our data!", data)
         this.tasks = data.data;
     })
 }
 onButtonClick(): void {
    this.getTasksFromService(); // Having the component invoke getTasks from service.ts
 }
 onButtonClickShow(): void {
     this.isHidden = false;
     })
 }
}
