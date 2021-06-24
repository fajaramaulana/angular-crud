import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bensin } from 'src/app/models/bensin.model';
import { BensinService } from 'src/app/services/bensin.service';

@Component({
  selector: 'app-bensin-details',
  templateUrl: './bensin-details.component.html',
  styleUrls: ['./bensin-details.component.css'],
})
export class BensinDetailsComponent implements OnInit {
  currentBensin: Bensin = {
    jumlah_liter: '',
    pertalite: '',
    premium: '',
  };

  message = '';

  constructor(
    private bensinService: BensinService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getBensin(this.route.snapshot.params.id);
  }

  getBensin(id: string): void {
    this.bensinService.get(id).subscribe(
      (data) => {
        this.currentBensin = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateBensin(): void {
    this.message = '';

    this.bensinService.update(this.currentBensin.id, this.currentBensin)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This bensin was updated successfully!';
        },
        error => {
          console.log(error);
          console.log(this.currentBensin)
        });
  }

  deleteBensin(): void {
    this.bensinService.delete(this.currentBensin.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/bensins']);
        },
        error => {
          console.log(error);
        });
  }

  
}
