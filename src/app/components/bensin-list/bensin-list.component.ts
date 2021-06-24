import { Component, OnInit } from '@angular/core';
import { Bensin } from 'src/app/models/bensin.model';
import { BensinService } from 'src/app/services/bensin.service';

@Component({
  selector: 'app-bensin-list',
  templateUrl: './bensin-list.component.html',
  styleUrls: ['./bensin-list.component.css'],
})
export class BensinListComponent implements OnInit {
  bensins?: Bensin[];
  currentBensin: Bensin = {};
  currentIndex = -1;
  title = '';

  constructor(private bensinService: BensinService) {}

  ngOnInit(): void {
    this.retrieveBensins();
  }

  retrieveBensins(): void {
    this.bensinService.getAll()
      .subscribe(
        data => {
          this.bensins = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveBensins();
    this.currentBensin = {};
    this.currentIndex = -1;
  }

  setActiveBensin(bensin: Bensin, index: number): void {
    this.currentBensin = bensin;
    this.currentIndex = index;
  }

  removeAllBensins(): void {
    this.bensinService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
}
