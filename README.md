A reusable, configuration-driven data table component built with Angular 18.2 and PrimeNG 19. This project demonstrates a "Wrapper Component" architecture where a complex UI library is abstracted into a simple, declarative API.

Overview

The superTable component is designed to be highly reusable across different modules. Instead of repeating boilerplate PrimeNG HTML, you simply provide a config object and a data array.


Core API
html
<superTable [config]="myConfig" [data]="myData"></superTable>

🛠 Tech Stack
Framework: Angular 18.2.x (Standalone)
UI Library: PrimeNG 18.x
Theming: @primeuix/themes (Aura Preset)
Icons: PrimeIcons 7+
Styling: SCSS with design tokens



/
├── src/
│   ├── app/                # Localhost playground app
│   │   ├── app.component.ts # Mode Switcher & Sample Data
│   │   └── app.config.ts    # PrimeNG v19 Configuration
│   └── project/            # Reusable Library Area
│       └── superTable/
│           ├── super-table.component.ts
│           ├── super-table.component.html
│           ├── super-table.component.scss
│           └── super-table.types.ts   # Config/Column Interfaces


Features & Demo Modes

The playground includes a sidebar to test the following features in isolation. Clicking a mode destroys and recreates the table instance to ensure a clean state.
Display: Basic, Size/Gridlines/Stripes, Templating, Conditional Styles.
Data: Dynamic Columns, Row/Cell Editing, Export (CSV).
Navigation: Pagination (Basic & Programmatic), Scroll (Vertical/Horizontal/Flexible).
Organization: Row Grouping (Subheader/RowSpan), Column Grouping, Row Expansion.
Interaction: Sort (Single/Multi), Filter (Basic/Advanced), Selection (Single/Multi/Radio/Checkbox).
Layout: Frozen Rows/Columns, Column Resize (Fit/Expand), Reorder (Rows/Columns), Column Toggle.
Menu: Context Menu support.


⚙️ Architecture Note

Strict Mode Ready: The component is built with TypeScript strict mode and Angular strict template checking enabled.
v18 compatibility: Uses a custom APP_INITIALIZER in app.config.ts to provide PrimeNG 19 configurations without requiring the Angular 19 provideAppInitializer export.
Control Flow: Utilizes Angular 18 @if and @for for high-performance rendering.
Event Bubbling: All core p-table events (sort, page, select) are bubbled up to the host through a unified onTableEvent or specific @Output emitters.


