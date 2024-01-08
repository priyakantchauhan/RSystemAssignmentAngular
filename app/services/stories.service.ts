import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../Model/Story';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  baseUrl:string="http://localhost:5101/api/hacker";
  constructor(private http:HttpClient ) { }

  getStories():Observable<Story>{
    
   return this.http.get<Story>(this.baseUrl);
  }
}
