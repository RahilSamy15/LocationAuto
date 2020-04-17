import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  Values : any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.GetValues();
  }
 GetValues(){
   this.http.get('http://localhost:5000/api/values').subscribe(respone => {this.Values=respone;console.log(respone);},error => {console.log(error);})
 }
}
