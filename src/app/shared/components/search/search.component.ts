import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  filteredAnimes = ''
  animes2: any = []

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getAnimes().subscribe((res: any) => {
      this.animes2 = res.data;
    })


  }

}
