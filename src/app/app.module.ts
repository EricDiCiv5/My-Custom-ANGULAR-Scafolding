import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Table1Component } from './components/table1/table1.component';
import { HttpClientModule } from '@angular/common/http';

// The other 3 module files.
import { LibrariesModule } from './modules/libraries.module';
import { MaterialAngularModule } from './modules/material-angular.module';
import { PipesAndInterceptorsModule } from './modules/pipes-and-interceptors.module';
import { MainViewComponent } from './components/main-view/main-view.component';
import { LoginComponent } from './components/login/login.component';
import { InfopageComponent } from './components/infopage/infopage.component';
import { AnimationModule } from './modules/animation/animation.module';
import { LazyLoadingDirective } from './directive/lazy-loading.directive';
import { MetaTableComponent } from './components/meta-table/meta-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Table1Component,
    MainViewComponent,
    LoginComponent,
    InfopageComponent,
    LazyLoadingDirective,
    MetaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LibrariesModule,
    MaterialAngularModule,
    PipesAndInterceptorsModule,
    AnimationModule,

  ],
  providers: [],
  bootstrap: [MainViewComponent]
})
export class AppModule { }
