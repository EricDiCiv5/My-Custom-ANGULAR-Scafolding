import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Table1Component } from './components/table1/table1.component';
import { AccessGuard } from './guards/access.guard';
import { TableInfoGuard } from './guards/table-info.guard';
import { InfopageComponent } from './components/infopage/infopage.component';
import { MetaTableComponent } from './components/meta-table/meta-table.component';

const routes: Routes = [
  { path: 'home', canActivate: [AccessGuard], component: LoginComponent },
  { path: 'table-data', canActivate: [TableInfoGuard], component: MetaTableComponent },
  {
    path: 'table-data/:type/:id',
    canActivate: [TableInfoGuard],
    component: MetaTableComponent
  },
  {
    path: 'detail/:type/:id',
    canActivate: [TableInfoGuard],
    component: InfopageComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
