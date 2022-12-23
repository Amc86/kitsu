import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoAnimes = [];
    for(const anime of value){
      if (anime.attributes.slug.indexOf(arg) > -1) {
        resultadoAnimes.push(anime)
      }
    }
    return resultadoAnimes;
  }

}
