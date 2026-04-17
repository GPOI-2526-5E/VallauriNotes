import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent {
  // Dati statici fittizi per la dashboard
  numeroUtenti: number = 1245;
  numeroAppunti: number = 8432;

  // Variabile per gestire il modale del profilo
  isProfileModalOpen: boolean = false;

  // Funzioni per aprire e chiudere il modale
  openProfileModal() {
    this.isProfileModalOpen = true;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
  }

  // Dati fittizi per gli Utenti
  dummyUsers = [
    { nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mario' },
    { nome: 'Giulia', cognome: 'Bianchi', email: 'giulia.b@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Giulia' },
    { nome: 'Luca', cognome: 'Verdi', email: 'l.verdi@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luca' },
    { nome: 'Sofia', cognome: 'Gallo', email: 's.gallo@vallauri.edu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia' }
  ];

  // Dati fittizi per gli Appunti
  dummyNotes = [
    { settore: 'Informatica', argomento: 'Gestione della Memoria nei Sistemi Operativi', professore: 'Ferrero', studente: 'Andrea Conti', classe: '5', sezione: 'A' },
    { settore: 'Sistemi e Reti', argomento: 'Il Modello ISO/OSI', professore: 'Marino', studente: 'Elisa Gatti', classe: '4', sezione: 'B' },
    { settore: 'Matematica', argomento: 'Studio di Funzione e Derivate', professore: 'Costa', studente: 'Marco Leone', classe: '5', sezione: 'A' },
    { settore: 'Telecomunicazioni', argomento: 'Modulazione AM e FM', professore: 'Russo', studente: 'Sara Ricci', classe: '3', sezione: 'C' }
  ];
}