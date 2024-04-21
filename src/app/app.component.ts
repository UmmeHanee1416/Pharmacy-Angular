import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from './services/storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private stSer:StorageServiceService){}

  ask:any

  ngOnInit(): void {
   this.ask = this.stSer.isLoggedIn();
  }

  title = 'finalProject';

}
