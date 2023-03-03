import { Component, OnInit } from '@angular/core';
import { AutoRefreshService } from '../services/auto-refresh.service';
import { Confirm, Notify } from 'notiflix';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isUserLoggedIn: boolean | undefined;
  constructor(private refeshService:AutoRefreshService, private router: Router) { 
    this.refeshService.isUserLoggedIn.subscribe((value: boolean) => {
      this.isUserLoggedIn = value;
  });
  if (localStorage.getItem("token")) {
      this.refeshService.isUserLoggedIn.next(true);
  }
  }

  ngOnInit(): void {
  }

  logout(){
    Confirm.show(
      'Delete',
      'Do you want to delete this Categories?',
      'Yes',
      'No',
      () => {
          console.warn("Logout Called");
          localStorage.removeItem("token");
          this.refeshService.isUserLoggedIn.next(false);
          this.router.navigateByUrl('/login');
      }
  );
  }
}
