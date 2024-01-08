import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import { Story } from '../Model/Story';
import { map } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  dataItems: any=[];
  page:number=1;
  totalLength : any ;
  loader=true;

  constructor(private stories:StoriesService) {
  }
  ngOnInit(): void {
    this.getStoriesData();
  }

  getStoriesData(){

    this.stories.getStories()
    .subscribe(
      response=>{
      //console.log(response);
      this.dataItems = response;
      this.loader=false;
      }  )
  }



}
