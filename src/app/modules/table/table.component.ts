import { fader, fadein } from './../../layouts/route-animation';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { variable } from '@angular/compiler/src/output/output_ast';

export interface Data{
  
  Doctor: string,
  specialization:string,
  Hospital: string,
  Time: string,
  charges:number,

}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations:[fadein]
})
export class TableComponent implements OnInit {

  
  listUsuarios: Data[] = [
    { Doctor : "fucker",specialization:"fs", Hospital: "fuckingham",     Time: "hthe" ,charges:1000},
    { Doctor : "vfvf",specialization:"fs", Hospital: "yjrjyrj",     Time: "anthhtr", charges:1000},
    { Doctor : "ghgher",specialization:"fs", Hospital: "htrhm",     Time: "ahth", charges:1000},
    { Doctor : "yhhy",specialization:"fs", Hospital: "iky",     Time: "athee", charges:1000},
    { Doctor : "fucker",specialization:"fs", Hospital: "fuckingham",     Time: "hthe", charges:1000},
    { Doctor : "vfvf",specialization:"fs", Hospital: "yjrjyrj",     Time: "anthhtr", charges:1000},
    { Doctor : "ghgher",specialization:"fs", Hospital: "htrhm",     Time: "ahth", charges:1000},
    { Doctor : "yhhy",specialization:"fs", Hospital: "iky",     Time: "athee", charges:1000},
    { Doctor : "fucker",specialization:"fs", Hospital: "fuckingham",     Time: "hthe", charges:1000},
    { Doctor : "vfvf",specialization:"fs", Hospital: "yjrjyrj",     Time: "anthhtr", charges:1000},
    { Doctor : "ghgher",specialization:"fs", Hospital: "htrhm",     Time: "ahth", charges:1000},
    { Doctor : "yhhy",specialization:"fs", Hospital: "iky",     Time: "athee", charges:1000},
   
  ];

  displayedColumns: string[] = [ 'Doctor','specialization', 'Hospital', 'Time','charges','Actions'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  constructor(){}


  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}
