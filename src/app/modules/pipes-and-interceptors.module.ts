import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ImageConcatPipe } from '../pipes/image-concat.pipe';
import { ReformatDataPipe } from '../pipes/reformat-data.pipe';
import { CatchErrorInterceptor } from '../interceptors/catch-error.interceptor';
import { AddKeysInterceptor } from '../interceptors/add-keys.interceptor';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    ImageConcatPipe,
    ReformatDataPipe
  ],
  imports: [
    
  ],
  exports: [
    ImageConcatPipe,
    ReformatDataPipe
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddKeysInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchErrorInterceptor,
      multi: true
    },
    DatePipe
  ]
})
export class PipesAndInterceptorsModule { }