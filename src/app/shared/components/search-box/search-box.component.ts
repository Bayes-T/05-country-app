import { Component,ElementRef,EventEmitter, Input, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public busqueda!:string

  @ViewChild("txtSearchBoxInput")
  public elemento!: ElementRef<HTMLInputElement>

  @Output()
  onSearch:EventEmitter<string> = new EventEmitter
  search(term:string):void{
    this.onSearch.emit(term)
  }
}
