import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, query} from '@angular/fire/firestore';
import { Mussic } from '../Music/mussic';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private firestore: Firestore){}

  addMusic(music:Mussic){
    addDoc(collection(this.firestore, 'musicas'),Object.assign({},music))
  }

  getMusics(){
    return getDocs(query(collection(this.firestore, 'musicas')))
  }

  deleteMusic(musicId: string) {
    return deleteDoc(doc(this.firestore, 'musicas', musicId))
  }

}
