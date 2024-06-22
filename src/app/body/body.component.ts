import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  items = [
    { image: 'assets/camiseta.webp', name: 'Camiseta', price: 29.99, quantity: 0  },
    { image: 'assets/calca.webp', name: 'Calça Jeans', price: 89.99, quantity: 0  },
    { image: 'assets/vestido.webp', name: 'Vestido', price: 59.99, quantity: 0  },
    { image: 'assets/blusa.webp', name: 'Blusa', price: 39.99, quantity: 0  },
    { image: 'assets/saia.webp', name: 'Saia', price: 49.99, quantity: 0  },
    { image: 'assets/jaqueta.webp', name: 'Jaqueta', price: 119.99, quantity: 0  },
    { image: 'assets/shorts.webp', name: 'Shorts', price: 34.99, quantity: 0  },
    { image: 'assets/polo.webp', name: 'Camisa Polo', price: 44.99, quantity: 0  }
  ];

  addToCart(item: any) {
    item.quantity += 1;
    console.log(`${item.name} foi adicionado à sacola. Quantidade: ${item.quantity}`);
  }

  removeFromCart(item: any) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      console.log(`${item.name} foi removido da sacola. Quantidade: ${item.quantity}`);
    }
  }

  
}
