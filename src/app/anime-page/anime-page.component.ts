import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.scss']
})
export class AnimePageComponent implements OnInit {

  animes: any = []

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getAnimes().subscribe((res: any) => {
      this.animes = res.data;
    })
  }

}
