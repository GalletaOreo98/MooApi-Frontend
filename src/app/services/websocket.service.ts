import { EventEmitter, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) { }

  // emit event
	sayHello() {
		this.socket.emit('sayhello', 'Lola');
	} 

	// listen event
	onSayHello() {
		return this.socket.fromEvent('sayhello');
	}

}
