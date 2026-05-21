import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

  stats = [
    {
      title: 'Usuarios',
      value: '1,245',
      icon: '👥'
    },
    {
      title: 'Ventas',
      value: '$18,430',
      icon: '💰'
    },
    {
      title: 'Pedidos',
      value: '320',
      icon: '📦'
    },
    {
      title: 'Mensajes',
      value: '87',
      icon: '💬'
    }
  ];

  bars = [40, 65, 30, 80, 55, 90, 70];

  months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'];

  activities = [
    'Nuevo usuario registrado',
    'Se realizó una compra',
    'Actualización del sistema completada',
    'Nuevo mensaje recibido'
  ];

  users = [
    {
      name: 'Juan Pérez',
      email: 'juan@gmail.com',
      role: 'Admin'
    },
    {
      name: 'Ana López',
      email: 'ana@gmail.com',
      role: 'Editor'
    },
    {
      name: 'Carlos Ruiz',
      email: 'carlos@gmail.com',
      role: 'Usuario'
    }
  ];

}
