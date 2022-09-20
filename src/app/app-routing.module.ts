import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TexExComponent } from './components/tex-ex/tex-ex.component';

const routes: Routes = [
  {path:'',redirectTo:'document',pathMatch:'full'},
  {path: 'document', component:TexExComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
