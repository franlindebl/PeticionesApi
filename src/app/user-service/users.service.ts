import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUserItemApp, IUserItemServer } from './models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public usersApiUrl = 'https://jsonplaceholder.typicode.com/users';
  public getNumeroUsuarios: BehaviorSubject<number> = new BehaviorSubject(0);

  private numeroDeUsuarios = 0;

  constructor(private httpClient: HttpClient) {

  }

  public addOneToUsers() {
    this.numeroDeUsuarios++;
    this.getNumeroUsuarios.next(this.numeroDeUsuarios);
  }

  public getUsers() {
    const observableUsers = this.httpClient.get(this.usersApiUrl);

    const observableFiltrado = observableUsers.pipe(
      map((usersEnBruto: IUserItemServer[]) => {
        const usuariosFiltrados: IUserItemApp[] = [];

        usersEnBruto.forEach(user => {
          if (user.name !== 'Clementine Bauch') {

            const userShort: IUserItemApp = {
              nombre: user.name,
              correo: user.email,
              identificador: user.id,
              ciudad: user.address.city,
            };

            usuariosFiltrados.push(userShort);
          }

        });

        // AQUI PODEMOS MODIFICAR EL DATO
        return usuariosFiltrados;
      })
    );

    return observableFiltrado;
  }
}
