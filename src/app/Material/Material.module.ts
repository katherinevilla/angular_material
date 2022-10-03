import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,} from '@angular/material/core';
import{MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


@NgModule({

  exports:[MatSliderModule, MatToolbarModule, MatIconModule,MatButtonModule,
    MatSidenavModule,MatInputModule,MatListModule, MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTableModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule,
     MatSnackBarModule, MatDialogModule,MatCardModule,MatPaginatorModule, MatSortModule ],

  declarations:[],
  providers:[{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue:{apperrance: 'outline'}
  },
  {
    provide: MAT_DATE_LOCALE, useValue: 'pt-br'
  },
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: 'pt-br'
  }
]
})
export class MaterialModule { }
