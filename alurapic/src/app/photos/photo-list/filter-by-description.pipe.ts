import { Photos } from './../photos';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByDescription',
})
export class FilterByDescriptionPipe implements PipeTransform {
    transform(photos: Photos, descrptionQuery: string): Photos {
        descrptionQuery = descrptionQuery.trim().toLowerCase();

        if (descrptionQuery) {
            return photos.filter((photo) =>
                photo.description.toLowerCase().includes(descrptionQuery),
            );
        } else {
            return photos;
        }
    }
}
