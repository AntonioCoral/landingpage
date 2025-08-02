import { Component } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.css'
})

export class BeneficiosComponent {
  numberColors = [
    'bg-yellow-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-orange-500',
    'bg-red-500'
  ];

  beneficios = [
    {
      title: 'Reportes Diarios de Órdenes',
      icon: 'document-chart-bar',
      description: 'Consulta el resumen diario de todas las órdenes realizadas, organizadas.'
    },
    {
      title: 'Cortes de Caja',
      icon: 'currency-dollar',
      description: 'Genera cortes por día para tener claridad del efectivo, transferencias y pagos.'
    },
    {
      title: 'Administración de Productos y categorías',
      icon: 'archive-box',
      description: 'Agrega, edita o elimina productos fácilmente con fotos, precios y descripciones.'
    },
    {
      title: 'Panel de Órdenes',
      icon: 'table-cells',
      description: 'Administra todas las órdenes recibidas en una tabla clara con filtros por estatus.'
    },
    {
      title: 'Datos de la Empresa',
      icon: 'building-storefront',
      description: 'Administra la información de contacto, dirección y datos bancarios desde tu panel.'
    },
    {
      title: 'Pedidos vía WhatsApp',
      icon: 'chat-bubble-left-right',
      description: 'Recibe pedidos completos: nombre, dirección, productos, total, pago y más.'
    },
    {
      title: 'Método de entrega',
      icon: 'truck',
      description: 'El cliente elige si desea recoger o recibir a domicilio. Todo llega ordenado.'
    },
    {
      title: 'Optimización Total',
      icon: 'sparkles',
      description: 'Ahorra tiempo, evita errores y ofrece una experiencia moderna a tus clientes.'
    }
  ];
}
