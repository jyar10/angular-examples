import { Component } from '@angular/core';
import { Home } from '../components/home/home';

@Component({
  selector: 'app-shell',
  imports: [Home],
  templateUrl: './shell.html',
  styleUrl: './shell.css'
})
export class Shell {

}
