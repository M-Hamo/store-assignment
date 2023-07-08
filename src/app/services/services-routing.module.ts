import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveChangesGuard } from '../core/guards/save-changes.guard';
import { ServicesListComponent } from './components/services-list/services-list.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesListComponent,
  },
  // {
  //   path: 'create',
  //   canDeactivate: [SaveChangesGuard],
  // },
  // {
  //   path: 'edit/:id',
  //   canDeactivate: [SaveChangesGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {
  public static Components: Array<Type<any> | any[]> = [ServicesListComponent];
}
