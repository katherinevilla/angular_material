import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CategoryPipe } from "./category.pipe";

@NgModule({
  declarations:[
    CategoryPipe
  ],
  imports:[
    CommonModule,

  ],
  exports:[
  CategoryPipe
  ],

})

export class SharedModule{}