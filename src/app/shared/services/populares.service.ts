import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopularesService {

  constructor(private http: HttpClient) { }

  getPopulares(){
    return this.http.get("https://kitsu.io/api/edge/trending/anime?limit=5")
  }

}
