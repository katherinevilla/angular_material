import { DialogButtonComponent } from './dialog-button/dialog-button.component';
import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout'
import { fromEvent, map } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

//variables
export const SCROLL_CONTAINER = 'mat-sidenav-content'
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  public isSmallScreen = false
  //mostre o text pra mim
  public popText = false
  public applyShadow = false

constructor(private breakpointObserver: BreakpointObserver, dialog: MatDialog){}

ngOnInit(): void {
  const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];


  fromEvent(content, 'scroll')
  .pipe(
    map(() => content.scrollTop)
  ).subscribe({
    next: (value: number) => this.determineHeader(value)
  })
}

determineHeader(scrollTop: number){
  console.log(top)
this.popText = scrollTop >= TEXT_LIMIT;
this.applyShadow = scrollTop >= SHADOW_LIMIT;
}

ngAfterContentInit(): void {
  this.breakpointObserver.observe(['(max-width:800px)'])
  .subscribe((res) => this.isSmallScreen = res.matches);
}
get sidenavMode() {
  return this.isSmallScreen ? 'over' : 'side';
}

openDialog(){
  //this.dialog.open(DialogButtonComponent,{
//width: '30%'
}
}