import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {RickAndMortyService} from '../../services/rick-and-morty.service';
import {Router} from '@angular/router';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
}

@Component({
  selector: 'app-character-grid',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './character-grid.component.html',
  styleUrls: ['./character-grid.component.css']
})
export class CharacterGridComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'status', 'species', 'gender', 'origin', 'location'];
  dataSource = new MatTableDataSource<Character>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private rickAndMortyService: RickAndMortyService, private router: Router) {}

  ngOnInit() {
    this.rickAndMortyService.getCharacters().subscribe(data => {
      this.dataSource.data = data.results;
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/character', id]);
  }
}
