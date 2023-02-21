import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();

  sort = 'Desc';
  itemsShowCount = 12;


  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(columnsNumber: number): void {
    this.columnsCountChange.emit(columnsNumber);
  }
}
