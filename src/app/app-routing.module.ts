import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormfieldInputComponent } from './formfield-input/formfield-input.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DatatableComponent} from './datatable/datatable.component';


const routes: Routes = [
  {path: 'formFieldInput', component: FormfieldInputComponent},
  {path: 'progBarSpinner', component: ProgressSpinnerComponent},
  {path: 'tabs', component: TabsComponent},
  {path: 'datepicker', component: DatepickerComponent},
  {path: 'snackbar', component: SnackbarComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'datatable', component: DatatableComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
