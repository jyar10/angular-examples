import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
upcomingEvents = [
    { name: 'AngularConf 2025', date: '2025-08-20', attendees: 340, status: 'Scheduled' },
    { name: 'TechFest LA', date: '2025-09-10', attendees: 120, status: 'Pending' },
    { name: 'Hackathon X', date: '2025-10-05', attendees: 85, status: 'Confirmed' },
  ];
}
