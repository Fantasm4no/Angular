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

  musics: any

  constructor(private musicService: MusicService){}

  ngOnInit(){
    this.musicService.getMusics().then(data => {
      this.musics = data.docs.map((doc: any) => {
        console.log(doc.id)
        console.log(doc.data)
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      console.log('msgs', this.musics)
    })
  }

  guardar(){
    this.musicService.addMusic(this.music) 
  }
}
