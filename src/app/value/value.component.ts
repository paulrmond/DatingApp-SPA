import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  ngOnInit() {}
  constructor(private http: HttpClient) {
      this.getValues();
  }
    getValues() {
      this.http.get('http://localhost:5000/api/values').subscribe(response => {
        this.values = response;
      }, error => {
        error.log(error);
      }
      );


    }

}
