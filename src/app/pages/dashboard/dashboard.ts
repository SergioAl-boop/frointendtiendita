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

  activities = [
    'Nuevo usuario registrado',
    'Se realizó una compra',
    'Actualización del sistema completada',
    'Nuevo mensaje recibido'
  ];

  currentTime = '';

ngOnInit() {

  setInterval(() => {

    const now = new Date();

    this.currentTime = now.toLocaleTimeString();

  }, 1000);

}

days = [
  1,2,3,4,5,6,7,
  8,9,10,11,12,13,14,
  15,16,17,18,19,20,21,
  22,23,24,25,26,27,28
];

constructor() {
  console.log('Hello, World!');
}

}
