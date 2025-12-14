import { Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild, viewChildren } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { TicketsComponent } from '../tickets.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // @Output() add = new EventEmitter<{title: string; text: string}>();
  add = output<{ title: string; text: string }>();

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title, text: ticketText });
    
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}
