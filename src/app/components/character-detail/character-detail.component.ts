import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: any;

  constructor(private route: ActivatedRoute, private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const characterId = params.get('id');
      if (characterId) {
        this.rickAndMortyService.getCharacterById(characterId).subscribe(data => {
          this.character = data;
        });
      }
    });
  }
}
