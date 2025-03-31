import { ComponentPropsWithoutRef, CSSProperties, useState } from 'react';

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
  const [, setIsLoading] = useState(false);

  // const loadStyle = isLoading ? paintSkeleton() : {};

  return (
    <img
      css={{
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
