export interface TableConfig {
  columns: ColumnDef[];
  // Display & Style
  size?: 'small' | 'large';
  showGridlines?: boolean;
  stripedRows?: boolean;
  rowStyleClass?: (data: any) => string;
  // Pagination
  paginator?: boolean;
  rows?: number;
  totalRecords?: number; // For programmatic/lazy pagination
  // Interaction
  sortMode?: 'single' | 'multiple';
  selectionMode?: 'single' | 'multiple' | 'radio' | 'checkbox';
  dataKey?: string;
  // Advanced Features
  resizableColumns?: boolean;
  columnResizeMode?: 'fit' | 'expand';
  reorderableColumns?: boolean;
  reorderableRows?: boolean;
  rowExpansion?: boolean;
  rowGroupMode?: 'subheader' | 'rowspan';
  groupRowsBy?: string;
  expandableRowGroups?: boolean;
  // Scrolling & Frozen
  scrollable?: boolean;
  scrollHeight?: string;
  frozenValue?: any[];
  // Context & Export
  contextMenu?: boolean;
  exportFilename?: string;
}

export interface ColumnDef {
  field: string;
  header: string;
  type?: 'text' | 'numeric' | 'date' | 'boolean' | 'template' | 'status' | 'image';
  sortable?: boolean;
  filter?: boolean;
  width?: string;
  frozen?: boolean;
}
