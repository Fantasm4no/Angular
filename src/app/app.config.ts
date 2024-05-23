import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"prueba1-89d55","appId":"1:16003354282:web:0b39974437b616ffa70ad3","storageBucket":"prueba1-89d55.appspot.com","apiKey":"AIzaSyB42FQj0G1gwg_6YLbrrbU9F5nLQnWSgJg","authDomain":"prueba1-89d55.firebaseapp.com","messagingSenderId":"16003354282","measurementId":"G-KXCR3JYEWY"})), provideFirestore(() => getFirestore())]
};
