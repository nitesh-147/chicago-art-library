import { Component } from '@angular/core';
import {NgModel} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private route:Router){}
  searchValue: string = '';
}
