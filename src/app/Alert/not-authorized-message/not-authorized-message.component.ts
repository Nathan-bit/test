import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-not-authorized-message',
  templateUrl: './not-authorized-message.component.html',
  styleUrls: ['./not-authorized-message.component.css']
})
export class NotAuthorizedMessageComponent implements OnInit {

  constructor(private service : DataServiceService) { }

  ngOnInit(): void 
  {
      
  }

}
