import { Component, OnInit } from '@angular/core';
import { EsperadosService } from '../shared/services/esperados.service';
import { MaspopService } from '../shared/services/maspop.service';
import { MaspopularesService } from '../shared/services/maspopulares.service';
import { MejoresService } from '../shared/services/mejores.service';
import { PopularesService } from '../shared/services/populares.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  populars: any = []
  maspops: any = []
  esperados: any = []
  mejores: any = []
  maspopulares: any = []

  constructor(private popularesServices: PopularesService, private maspopService: MaspopService, private esperadosService: EsperadosService, private mejoresService: MejoresService, private maspopularesService: MaspopularesService) { }

  ngOnInit(): void {

  this.popularesServices.getPopulares().subscribe((res: any) => {
      this.populars = res.data
    })

  this.maspopService.getMasPop().subscribe((res: any) => {
      this.maspops = res.data
    })

  this.esperadosService.getEsperados().subscribe((res: any) => {
      this.esperados = res.data
    })

  this.mejoresService.getMejores().subscribe((res: any) => {
      this.mejores = res.data
    })

  this.maspopularesService.getMaspopulares().subscribe((res: any) => {
      this.maspopulares = res.data
    })


  }
}
