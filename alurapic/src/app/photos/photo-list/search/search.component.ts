import {
    Component,
    OnInit,
    OnDestroy,
    Output,
    EventEmitter,
    Input,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
    @Output() onTyping = new EventEmitter<string>();
    @Input() value = '';
    debounce = new Subject<string>();

    constructor() {}

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    onKeyUp(search: EventTarget | null) {
        this.debounce.next((<HTMLInputElement>search).value);
        this.debounce
            .pipe(debounceTime(300))
            .subscribe((filter) => this.onTyping.emit(filter));
    }
}
