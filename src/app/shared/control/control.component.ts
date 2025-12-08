import { Component, ContentChild, inject, input, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'control'
  }
})
export class ControlComponent {
  label = input.required<string>();
  private el = inject(ElementRef);

  // @ContentChild('input') private contrlo?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  // private control = ContentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick(){
    console.log(this.el);
    console.log()
  }
}
