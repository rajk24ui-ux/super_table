
import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { TableConfig } from './super-table.types';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'superTable',
  standalone: true,
  imports: [CommonModule, TableModule, FormsModule,ButtonModule ],
  templateUrl: './super-table.component.html',
  styleUrls: ['./super-table.component.scss']
})
export class SuperTableComponent implements OnInit {
  @Input() config!: TableConfig;
  @Input() data: any[] = [];
  @ViewChild('dt') table!: Table;
  selectedRows: any[] | any = null;
  editMode: 'cell' | 'row' = 'cell';
  scrollable: true | false = false;
  expandedRows: { [key: string]: boolean } = {};
  cols: any[] = [];

  // Bubble up events
  @Output() onRowSelectEmit = new EventEmitter<any>();
  @Output() onSort = new EventEmitter<any>();
  @Output() onPage = new EventEmitter<any>();


  ngOnInit() {
    // Set defaults if not provided
    this.editMode = this.config.editMode ?? 'cell';
    this.scrollable = this.config.scrollable ?? false;
    this.cols = [...this.config.columns];
  }

 exportCSV() {
    if (this.table) {
      this.table.exportCSV();
    }
  }

  onColReorder(event: any) {
  this.cols = event.columns;
}

  getFilterType(type?: string): string {
  switch (type) {
    case 'numeric': return 'numeric';
    case 'date': return 'date';
    case 'boolean': return 'boolean';
    default: return 'text';
  }
}

onRowSelect(event: any) {
  console.log('Selected:', event.data);
  this.onRowSelectEmit.emit(event.data);
}

onRowUnselect(event: any) {
  console.log('Unselected:', event.data);
    this.onRowSelectEmit.emit(event.data);

}

get frozenColumns() {
  return this.config.columns.filter(c => c.frozen);
}

get normalColumns() {
  return this.config.columns.filter(c => !c.frozen);
}
  onRowExpand(event: any) {
  const key = event.data[this.config.dataKey!];
  this.expandedRows[key] = true;
}

onRowCollapse(event: any) {
  const key = event.data[this.config.dataKey!];
  delete this.expandedRows[key];
}
}
