import { Component, OnInit } from '@angular/core';
import { Bensin } from 'src/app/models/bensin.model';
import { BensinService } from 'src/app/services/bensin.service';

@Component({
  selector: 'app-add-bensin',
  templateUrl: './add-bensin.component.html',
  styleUrls: ['./add-bensin.component.css'],
})
export class AddBensinComponent implements OnInit {
  bensin: Bensin = {
    jumlah_liter: '',
    premium: '',
    pertalite: '',
  };

  submitted = false;

  constructor(private bensinService: BensinService) {}

  ngOnInit(): void {}

  saveBensin(): void {
    const data = {
      jumlah_liter: this.bensin.jumlah_liter,
      premium: this.bensin.premium,
      pertalite: this.bensin.pertalite,
    };

    this.bensinService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
          console.log(data)
        });
  }

  newBensin(): void {
    this.submitted = false;
    this.bensin = {
      jumlah_liter: '',
      premium: '',
      pertalite: '',
    };
  }
}
