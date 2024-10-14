import { Pipe, PipeTransform } from '@angular/core';
import '@fortawesome/fontawesome-free/css/all.min.css';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let result = '';
    for (let i = 0; i < fullStars; i++) {
      result += '<i class="fa fa-star"></i>';
    }
    if (halfStar) {
      result += '<i class="fa fa-star-half-o"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
      result += '<i class="fa fa-star-o"></i>';
    }
    return result;
  }
}
