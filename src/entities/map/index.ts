import Provider from './model/provider';

import { ModalContent } from './ui';

export const Map = {
  Provider,
  Content: ModalContent,
} as const;

export * from './map.queries';
export * from './map.type';
