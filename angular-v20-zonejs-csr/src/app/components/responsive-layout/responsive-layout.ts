import { Component, signal, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsive-layout.html',
  styleUrl: './responsive-layout.css'
})
export class ResponsiveLayout {
  screenWidth = signal(window.innerWidth);

  isMobile = computed(() => this.screenWidth() < 768);
  sidebarOpen = signal(false);


  layoutDirection = computed(() => this.isMobile() ? 'column' : 'row');

  constructor() {
    window.addEventListener('resize', () => {
      this.screenWidth.set(window.innerWidth);
    });

    effect(() => {
      console.log('Layout is now:', this.layoutDirection());
    });
  }
}
