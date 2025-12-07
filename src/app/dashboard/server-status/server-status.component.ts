import { Component, OnInit, OnDestroy, inject, DestroyRef } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  // private timer?: ReturnType<typeof setInterval>;
  private destoyRef = inject(DestroyRef);
  constructor() {}

  ngOnInit() {
    const timer = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destoyRef.onDestroy(() => {
      clearInterval(timer);
    });
  }

  // ngOnDestroy() {
  //   clearInterval(this.timer);
  // }
}
