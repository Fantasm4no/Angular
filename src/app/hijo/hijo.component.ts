import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  
  @Output() incrementarH = new EventEmitter<void>();
  @Output() decrementarH = new EventEmitter<void>();

  incrementarHijo() {
    this.incrementarH.emit();
  }

  decrementarHijo(){
    this.decrementarH.emit()
  }
}
