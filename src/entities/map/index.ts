import Provider from '../../shared/ui/map/model/provider';

import { ModalContent } from '../../shared/ui/map/ui';

export const Map = {
  Provider,
  Content: ModalContent,
} as const;

export * from './map.queries';
export * from './map.type';
