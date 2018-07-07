import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() selectionEmitter = new EventEmitter<string>();

    onSelect(selection: string) {
        this.selectionEmitter.emit(selection);
    }
}