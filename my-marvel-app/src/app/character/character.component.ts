import { Component } from '@angular/core';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  character: any = {};
  name!: string;

  constructor(private marvelService: MarvelService) { }

  search(name: string): void {
    this.marvelService.getCharacter(name).subscribe(characters => {
      this.character = characters[0];
    });
    
  }
}
