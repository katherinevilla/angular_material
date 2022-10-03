
import { CoursesServices } from './../services/courses.services';

import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { DATA_MOVIES } from './model/data-movies';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';




@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements AfterViewInit  {
  public dataSource = new MatTableDataSource (DATA_MOVIES);
  public displayedNameColumns: string[] = ['name', 'category', 'rating', 'year', 'director'];
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  @ViewChild (MatSort) sort!: MatSort;
  //coursesService: CoursesServices 

  constructor(){
   // this.coursesService = new CoursesServices ();
   // this.courses = this.coursesService.list() 
}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

  }


}


