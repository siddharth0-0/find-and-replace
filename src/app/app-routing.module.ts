import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindReplaceComponent } from './find-replace/find-replace.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: FindReplaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
