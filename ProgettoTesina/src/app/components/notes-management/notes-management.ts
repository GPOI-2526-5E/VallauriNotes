import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Note } from '../../models/notes-model';

@Component({
  selector: 'app-notes-management',
  imports: [RouterLink],
  templateUrl: './notes-management.html',
  styleUrl: './notes-management.css',
})
export class NotesManagementComponent {
  selectedNote: Note | null = null;

  dummyNotes: Note[] = [
    {
      id: 1,
      titolo: 'Riassunto Prima Guerra Mondiale',
      nomeCreatore: 'Mario',
      cognomeCreatore: 'Rossi',
      classe: '5A',
      annoClasse: '2023/2024',
      dimensioneFile: '2.4 MB',
      valutazione: 4.5,
      dataCaricamento: '12 Ottobre 2023'
    },
    {
      id: 1,
      titolo: 'Riassunto Prima Guerra Mondiale',
      nomeCreatore: 'Mario',
      cognomeCreatore: 'Rossi',
      classe: '5A',
      annoClasse: '2023/2024',
      dimensioneFile: '2.4 MB',
      valutazione: 4.5,
      dataCaricamento: '12 Ottobre 2023'
    },
    {
      id: 1,
      titolo: 'Riassunto Prima Guerra Mondiale',
      nomeCreatore: 'Mario',
      cognomeCreatore: 'Rossi',
      classe: '5A',
      annoClasse: '2023/2024',
      dimensioneFile: '2.4 MB',
      valutazione: 4.5,
      dataCaricamento: '12 Ottobre 2023'
    },
    {
      id: 1,
      titolo: 'Riassunto Prima Guerra Mondiale',
      nomeCreatore: 'Mario',
      cognomeCreatore: 'Rossi',
      classe: '5A',
      annoClasse: '2023/2024',
      dimensioneFile: '2.4 MB',
      valutazione: 4.5,
      dataCaricamento: '12 Ottobre 2023'
    },
    {
      id: 1,
      titolo: 'Riassunto Prima Guerra Mondiale',
      nomeCreatore: 'Mario',
      cognomeCreatore: 'Rossi',
      classe: '5A',
      annoClasse: '2023/2024',
      dimensioneFile: '2.4 MB',
      valutazione: 4.5,
      dataCaricamento: '12 Ottobre 2023'
    },
  ];

  selectNote(note: Note) {
    this.selectedNote = note;
  }
}
