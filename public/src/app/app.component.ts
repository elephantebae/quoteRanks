import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  allAuthors: any = null;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.showAllAuthors();
  }
  showAllAuthors() {
    let obs = this._httpService.getAllAuthors();
    obs.subscribe(data => {
      this.allAuthors = data;
      console.log("this is the data", data);

    })
  }
}
