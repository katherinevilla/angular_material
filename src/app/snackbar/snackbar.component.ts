import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { endWith } from 'rxjs';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
   // this.snackbar.open('Hello People', 'close', {
    //   duration:2000
    //})
  }
  public openSnackbar(){
    const snackBar = this.snackbar.open('Hello People', 'close',{
      duration:2000
  });

  snackBar.afterDismissed().subscribe (_ => {
console.log('Dismissed');
  })

  snackBar.onAction().subscribe (_ => {
    console.log('After Action');
      })
}

public openFromComp(){
  this.snackbar.openFromComponent(SnackbarMsnComponent,{
    data:'hello people',
    duration: 2500,
    horizontalPosition: 'end',
    verticalPosition:'top'


});
}
}

