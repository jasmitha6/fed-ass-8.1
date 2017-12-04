import { Component } from '@angular/core';
// defining component detail 
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class RootComponent {
  title: string;
  name: string;
  lastName: string;
  arrayList: any[] = [];

  constructor(private _listService: ListService) { }

  ngOnInit() { }

// declaring submit function 
  submit(Name: string, LastName: string) {
    let model = {
      name: Name,
      lastName: LastName
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }
}
