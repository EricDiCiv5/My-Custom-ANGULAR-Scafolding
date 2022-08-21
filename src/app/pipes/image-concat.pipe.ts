import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../models/Characters';
@Pipe({
  name: 'imageConcat'
})
export class ImageConcatPipe implements PipeTransform {
  transform(hero: Image): string {
    const url: string = hero.path + '.' + hero.extension;
    return url;
  }
}
