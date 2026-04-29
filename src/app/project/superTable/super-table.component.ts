
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { TableConfig } from './super-table.types';

@Component({
  selector: 'superTable',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './super-table.component.html',
  styleUrls: ['./super-table.component.scss']
})
export class SuperTableComponent {
  @Input() config!: TableConfig;
  @Input() data: any[] = [];
  @ViewChild('dt') table!: Table;

  // Bubble up events
  @Output() onRowSelect = new EventEmitter<any>();
  @Output() onSort = new EventEmitter<any>();
  @Output() onPage = new EventEmitter<any>();

 exportCSV() {
    if (this.table) {
      this.table.exportCSV();
    }
  }
  
}
