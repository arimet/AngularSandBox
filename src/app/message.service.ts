import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  /**
   * Fonction qui ajoute des messages dans le tableau
   * @param String Message
   * @return Void
   */
  add(message: string): void {
    this.messages.push(message);
  }

  /**
   * Fonction qui nettoie les messages
   */
  clear(): void {
    this.messages = [];
  }
}
