import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  imports: [RouterLink],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersListComponent {
  // Dati fittizi per gli Utenti
  dummyUsers = [
    { nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mario' },
    { nome: 'Giulia', cognome: 'Bianchi', email: 'giulia.b@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Giulia' },
    { nome: 'Luca', cognome: 'Verdi', email: 'l.verdi@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luca' },
    { nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mario' },
    { nome: 'Giulia', cognome: 'Bianchi', email: 'giulia.b@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Giulia' },
    { nome: 'Luca', cognome: 'Verdi', email: 'l.verdi@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luca' },
    { nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mario' },
    { nome: 'Giulia', cognome: 'Bianchi', email: 'giulia.b@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Giulia' },
    { nome: 'Luca', cognome: 'Verdi', email: 'l.verdi@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luca' },
    { nome: 'Sofia', cognome: 'Gallo', email: 's.gallo@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia' }
  ];

  selectedUser: any = null;

  // Funzione che viene chiamata quando clicchi su una card
  selectUser(user: any) {
    this.selectedUser = user;
  }
}
