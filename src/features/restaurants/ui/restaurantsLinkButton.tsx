import { Link, useLocation } from 'react-router';

import { borderRadius, Center, color, Text } from 'ik-ui-library';

function RestaurantsLinkButton() {
  const location = useLocation();

  const isActive =
    location.pathname === '/restaurants' || location.pathname === '/';

  return (
    <Link to="/restaurants">
      <Center
        etcStyles={{
          width: '100%',
          height: '50px',
          borderRadius: borderRadius.sm,
          backgroundColor: isActive ? color['primary-4'] : color['white'],
        }}
      >
        <Text
          label="음식점 보기"
          etcStyles={{
            color: isActive ? color['white'] : color['black'],
          }}
        />
      </Center>
    </Link>
  );
}

export default RestaurantsLinkButton;
