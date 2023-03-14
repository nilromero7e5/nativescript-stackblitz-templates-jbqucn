import { Component, OnInit } from '@angular/core';
import Theme from '@nativescript/theme';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    Theme.setMode(Theme.Dark);
  }
}
