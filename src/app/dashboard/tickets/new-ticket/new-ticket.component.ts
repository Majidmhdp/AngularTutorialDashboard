import { Component, ElementRef, ViewChild } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;


  onSubmit(title: string, ticketText: string) {
    console.log('Title:', title);
    console.log('Form submitted');
    this.form?.nativeElement.reset();
  }
}
