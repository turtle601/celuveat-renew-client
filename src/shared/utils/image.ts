import { SERVER_IMG_URL } from '../constant/url';

export const getImgUrl = (imgType: 'webp' | 'jpeg', imgUrl: string) =>
  `${SERVER_IMG_URL}/restaurants/${imgType}_images/${imgUrl}.${imgType}`;
