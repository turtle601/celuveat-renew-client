import { ComponentPropsWithoutRef, CSSProperties, useState } from 'react';
import { paintSkeleton } from '../styles/animation';

interface CustomImageProps extends ComponentPropsWithoutRef<'img'> {
  src: string;
  alt: string;
  fallbackSrc: string;
  etcStyles?: CSSProperties;
}

function CustomImage({
  src,
  alt,
  fallbackSrc,
  etcStyles,
  ...attribute
}: CustomImageProps) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  const [isLoading, setIsLoading] = useState(false);

  const loadStyle = isLoading ? paintSkeleton() : {};

  return (
    <img
      css={{
        ...loadStyle,
        ...etcStyles,
      }}
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoading(true)}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      {...attribute}
    />
  );
}

export default CustomImage;
