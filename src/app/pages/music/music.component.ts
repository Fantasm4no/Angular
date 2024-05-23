import { Component } from '@angular/core';
import { Mussic } from '../../Music/mussic';
import { MusicService } from '../../services/music.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  music : Mussic = new Mussic()

  constructor(private musicService: MusicService){}

  guardar(){
    this.musicService.addMusic(this.music) 
  }
}
