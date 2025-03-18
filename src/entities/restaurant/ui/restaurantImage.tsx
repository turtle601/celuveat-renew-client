import { useState } from 'react';
import { css, CSSObject } from '@emotion/react';

import { usePreventClickOnDrag } from '../../../shared/hooks';
import { getImgUrl } from '../../../shared/utils/image';

const getRestaurantImageLoadingStyle = (isImageLoading: boolean): CSSObject => {
  return isImageLoading ? { background: 'none' } : {};
};

interface RestaurantImageProps {
  width: CSSObject['width'];
  height: CSSObject['height'];
  author: string;
  imageUrl: string;
  sns: string;
}

function RestaurantImage({
  width,
  height,
  author,
  imageUrl,
  sns,
}: RestaurantImageProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const register = usePreventClickOnDrag<HTMLDivElement>({
    fn: (e) => {
      e?.stopPropagation();

      if (sns === 'INSTAGRAM')
        window.open(
          `https://www.instagram.com/${author?.substring(1)}`,
          '_blank'
        );
      if (sns === 'YOUTUBE')
        window.open(`https://www.youtube.com/${author}`, '_blank');
    },
  });

  return (
    <div
      css={css({
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        borderRadius: '10px',
        ...getRestaurantImageLoadingStyle(isImageLoading),
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      })}
      {...register}
    >
      <picture>
        <source type="images/webp" srcSet={getImgUrl('webp', imageUrl)} />
        <source type="images/jpeg" srcSet={getImgUrl('jpeg', imageUrl)} />
        <img
          css={css({
            position: 'absolute',
            inset: 0,
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          })}
          src={getImgUrl('webp', imageUrl)}
          alt="음식점"
          loading="lazy"
          onLoad={() => setIsImageLoading(false)}
        />
      </picture>
    </div>
  );
}

export default RestaurantImage;
