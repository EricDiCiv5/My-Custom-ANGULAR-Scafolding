import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, BrowserAnimationsModule, NgxSpinnerModule],
  exports: [BrowserAnimationsModule, NgxSpinnerModule]
})
export class AnimationModule {}
