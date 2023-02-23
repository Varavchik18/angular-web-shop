import { Component } from '@angular/core';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 355, 4: 350 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  columnsCount = 3;
  rowHeight = ROWS_HEIGHT[this.columnsCount]
  category: string | undefined;


  onColumnsCountChange(columnsCount: number): void {
    this.columnsCount = columnsCount;
    this.rowHeight = ROWS_HEIGHT[this.columnsCount]
  }

  onShowCategoryChanged(category: string): void {
    this.category = category;
  }
}
