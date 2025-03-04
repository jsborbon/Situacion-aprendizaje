import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-exchanges',
  imports: [],
  templateUrl: './exchanges.component.html',
  standalone: true,
  styleUrl: './exchanges.component.scss'
})
export class ExchangesComponent implements OnInit{

 data= [];
 error:string = '';

    constructor(private apiService:ApiService) { }

    ngOnInit() {
        this.apiService.getExchanges().subscribe(
            (data: any) => {
                this.data = data;
            },
            (error: any) => {
                this.error = error;
            }
        );
    }

}
