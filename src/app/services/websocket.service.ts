import { EventEmitter, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) { }

  // emit event
	sayHello() {
		this.socket.emit('sayhello');
	} 

	// listen event
	onSayHello() {
		return this.socket.fromEvent('sayhello');
	}

	newUser() {
		this.socket.emit('new user', localStorage.getItem('nombre'));
	} 

	verUsuariosConectados(cb:any) {
		this.socket.emit('ver usuarios conectados', (data:any) => {
			cb(data);
		}); 
	}
}
