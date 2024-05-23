import { Routes } from '@angular/router';
import { MusicComponent } from './pages/music/music.component';
import { MessageComponent } from './pages/message/message.component';

export const routes: Routes = [
    {path: 'music', title:'Musica', component: MusicComponent},
    {path: 'message', title:'Mensajes', component: MessageComponent}
];
