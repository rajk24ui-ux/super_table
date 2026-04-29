import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SuperTableComponent } from './project/superTable/super-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SuperTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  active = true;
  currentMode: any;
  
  // CDN Links from PrimeNG docs
  private imgBase = 'https://primefaces.org/cdn/primeng/images/demo';

  modes = [
    {
      id: 'customers',
      label: 'Customers Mode',
      data: [
        {
          id: 1000,
          name: 'James Butt',
          country:  'Algeria',
          company: 'Benton, John B Jr',
          representative: 'Ioni Bowcher',
          status: 'unqualified',
          verified: true,
          activity: 17
        },
        {
          id: 1001,
          name: 'Josephine Darakjy',
          country: 'Egypt',
          company: 'Chanay, Jeffrey A Esq',
          representative: 'Amy Elsner',
          status: 'proposal',
          verified: true,
          activity: 0
        }
      ],
      config: {
        columns: [
          { field: 'name', header: 'Name', type: 'text', sortable: true, },
          { field: 'country', header: 'Country', type: 'text' }, // Use logic in template for flag
          { field: 'company', header: 'Company', type: 'text' },
          { field: 'representative', header: 'Representative', type: 'text' }, // Use logic for avatar
          { field: 'status', header: 'Status', type: 'status' },
          { field: 'activity', header: 'Activity', type: 'numeric' }
        ],
        paginator: true,
        rows: 10
      }
    },
    {
      id: 'products',
      label: 'Products Mode',
      data: [
        { id: '1000', code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: 24, inventoryStatus: 'INSTOCK', rating: 5 },
        { id: '1001', code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: 61, inventoryStatus: 'OUTOFSTOCK', rating: 4 }
      ],
      config: {
        columns: [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name', sortable: true },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity', type: 'numeric' }
        ],
        paginator: true
      }
    }
  ];

  ngOnInit() {
    this.currentMode = this.modes[0];
  }

  selectMode(mode: any) {
    this.active = false;
    setTimeout(() => {
      this.currentMode = mode;
      this.active = true;
    }, 10);
  }
}

