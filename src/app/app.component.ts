import { Component } from '@angular/core';
import { Employee } from './model/employeed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formulario: Employee = {
    id: 0,
    name: '',
    country: '',
  };
  employes: Employee[] = [
    { id: 1, name: 'Emmanuel', country: 'Argentina' },
    { id: 2, name: 'Josefa', country: 'Colombia' },
    { id: 3, name: 'Mauro', country: 'Peru' },
  ];

  addOrEdit() {
    if (this.formulario.id == 0) {
      this.formulario.id = this.employes.length + 1;
      this.employes.push(this.formulario);
      console.log(this.employes);
    }
    this.formulario = {
      id: 0,
      name: '',
      country: '',
    };
  }
  openEdit(employe: Employee) {
    this.formulario = employe;
    console.log(this.formulario);
  }
  delite(id: number) {
    if (confirm('estas seguros que quieres eliminarlo?')) {
      this.employes = this.employes.filter((x) => x.id != id);
      this.formulario = {
        id: 0,
        name: '',
        country: '',
      };
      console.log(this.employes);
    }
  }
}
