import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auth: any;
  tel: any;

  constructor(private dataService : DataServiceService,private http : HttpClient) { }
  

  ngOnInit(): void {
       

  }
  

  
}
