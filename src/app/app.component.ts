import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TodoListNgxsComponent } from "./todo-list-ngxs/todo-list-ngxs.component";
import { TodoListCustomStoreComponent } from './todo-list-custom-store/todo-list-custom-store.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [MatTabsModule, TodoListNgxsComponent, TodoListCustomStoreComponent]
})
export class AppComponent {
  readonly tabs = [{ index: 0, link: '/todo-list-ngxs' }, { index: 1, link: '/todo-list-custom-store' }];
  activeTabIndex = 0;
}
