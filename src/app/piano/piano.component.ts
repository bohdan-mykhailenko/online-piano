import { Component, HostListener } from '@angular/core';
import { AudioService } from '../services/audio/audio.service';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss'],
})
export class PianoComponent {
  private isMouseDown = false;

  constructor(private audioService: AudioService) {}

  onMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    console.log(target);

    if (target.classList.contains('piano__key')) {
      console.log('a');
      const note = target.getAttribute('data-note');
      const src = `assets/audio/${note}.mp3`;

      this.playAudio(src);
      target.classList.add('active');
      this.isMouseDown = true;
    }
  }

  onMouseOver(event: MouseEvent) {
    if (this.isMouseDown) {
      const target = event.target as HTMLElement;
      console.log(target);

      if (target.classList.contains('piano__key')) {
        const note = target.getAttribute('data-note');
        const src = `assets/audio/${note}.mp3`;

        this.playAudio(src);
        target.classList.add('active');
      }
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isMouseDown = false;

    const target = event.target as HTMLElement;

    if (target.classList.contains('piano__key')) {
      target.classList.remove('active');
    }
  }

  onMouseOut(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.classList.contains('piano__key')) {
      target.classList.remove('active');
    }
  }

  playAudio(src: string) {
    this.audioService.playAudio(src);
  }
}
