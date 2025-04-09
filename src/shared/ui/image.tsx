import { ComponentPropsWithoutRef, CSSProperties } from 'react';

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
  // const loadStyle = isLoading ? paintSkeleton() : {};

  return (
    <img
      css={{
        ...etcStyles,
      }}
      src={src || fallbackSrc}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = fallbackSrc;
      }}
      {...attribute}
    />
  );
}

export default CustomImage;
