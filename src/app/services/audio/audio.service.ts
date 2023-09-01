import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  playAudio(src: string): void {
    const audio = new Audio();

    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }
}
