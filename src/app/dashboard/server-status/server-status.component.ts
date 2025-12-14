import { Component, OnInit, OnDestroy, inject, DestroyRef, signal, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private timer?: ReturnType<typeof setInterval>;
  private destoyRef = inject(DestroyRef);
  constructor() {
    effect(() => {
      console.log(`Server status changed to: ${this.currentStatus()}`);
    });
  }

  ngOnInit() {
    const timer = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
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
