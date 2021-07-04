import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    photos = [
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Long_Black_Coffee.jpg/220px-Long_Black_Coffee.jpg',
            description: 'Xícara de café',
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Coffee_with_milk_(563800).jpg/250px-Coffee_with_milk_(563800).jpg',
            description: 'Café com leite',
        },
    ];
}
