import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graf-torta',
  templateUrl: './graf-torta.component.html',
  styleUrls: ['./graf-torta.component.css']
})
export class GrafTortaComponent implements OnInit {

  @Input() leyenda
  @Input('labels') doughnutChartLabels
  @Input('data') doughnutChartData
  @Input('type') doughnutChartType

  constructor() { }

  ngOnInit() {
  }

}
