import { borderRadius, Center, color, Sidebar, Tab, Text } from 'ik-ui-library';

function SidebarNav() {
  return (
    <Tab.Buttons>
      <Tab.Button>
        {(isActive: boolean) => {
          return (
            <Sidebar.Toggle>
              <Center
                etcStyles={{
                  width: '100%',
                  height: '50px',
                  borderRadius: borderRadius.sm,
                  backgroundColor: isActive
                    ? color['primary-4']
                    : color['white'],
                }}
              >
                <Text
                  label="음식점 보기"
                  etcStyles={{
                    color: isActive ? color['white'] : color['black'],
                  }}
                />
              </Center>
            </Sidebar.Toggle>
          );
        }}
      </Tab.Button>
      <Tab.Button>
        {(isActive: boolean) => {
          return (
            <Sidebar.Toggle>
              <Center
                etcStyles={{
                  width: '100%',
                  height: '50px',
                  borderRadius: borderRadius.sm,
                  backgroundColor: isActive
                    ? color['primary-4']
                    : color['white'],
                }}
              >
                <Text
                  label="지도로 보기"
                  etcStyles={{
                    color: isActive ? color['white'] : color['black'],
                  }}
                />
              </Center>
            </Sidebar.Toggle>
          );
        }}
      </Tab.Button>
    </Tab.Buttons>
  );
}

export default SidebarNav;
