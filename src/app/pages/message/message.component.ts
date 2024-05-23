import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Mussic } from '../../Music/mussic';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

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
      console.log('mscs', this.musics)
    })
  }

  borrar(musicId: string) {
    this.musicService.deleteMusic(musicId).then(() => {
      console.log('Documento eliminado exitosamente');
    }).catch(error => {
      console.log('Error al eliminar documento:', error);
    });
  }
}
