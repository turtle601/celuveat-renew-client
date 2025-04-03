import { Link, useLocation } from 'react-router';

import { borderRadius, Center, color, Text } from 'ik-ui-library';

function MapLinkButton() {
  const location = useLocation();

  const isActive = location.pathname === '/map';

  return (
    <Link to="/map">
      <Center
        etcStyles={{
          width: '100%',
          height: '50px',
          borderRadius: borderRadius.sm,
          backgroundColor: isActive ? color['primary-4'] : color['white'],
        }}
      >
        <Text
          label="지도로 보기"
          etcStyles={{
            color: isActive ? color['white'] : color['black'],
          }}
        />
      </Center>
    </Link>
  );
}

export default MapLinkButton;
