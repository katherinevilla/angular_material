

import { HttpClient } from '@angular/common/http';
//import { course } from '../datatable/model/course.interface';
import {Injectable} from '@angular/core'
import { Observable, tap, take, delay } from 'rxjs';

@Injectable({
  providedIn:'root'

})

export class CoursesServices{
private readonly API = '/assets/courses.json';


  constructor(private httpClient: HttpClient){ }


 /* list(){
    return this.httpClient.get<course[]>(this.API)
    .pipe(
      take(1),
     //delay(10000),
      tap(courses => console.log(courses)

    ))
  }*/
}

