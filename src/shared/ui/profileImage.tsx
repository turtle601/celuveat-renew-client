import { css, CSSObject } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

const getProfileImageStyle = (
  size?: CSSObject['width'],
  etcStyle: CSSObject = {}
): CSSObject => {
  return {
    display: 'inline-block',
    width: size || 'auto',
    height: size || 'auto',
    border: '1px solid #ddd',
    borderRadius: '50%',
    background: '#eee',
    objectFit: 'cover',
    lineHeight: size || 'auto',
    textAlign: 'center',
    ...etcStyle,
  };
};

interface ProfileImageProps extends ComponentPropsWithoutRef<'img'> {
  name: string;
  imageUrl: string;
  size?: CSSObject['width'];
  etcStyle?: CSSObject;
}

function ProfileImage({
  name,
  imageUrl,
  size,
  etcStyle,
  ...attribute
}: ProfileImageProps) {
  return (
    <img
      alt={`${name} 프로필`}
      src={imageUrl}
      css={css(getProfileImageStyle(size, etcStyle))}
      {...attribute}
    />
  );
}

export default ProfileImage;
