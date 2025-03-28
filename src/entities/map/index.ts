import { Marker, ModalContent, Provider } from './ui';

export const Map = {
  Provider,
  Marker,
  ModalContent,
} as const;

export * from './map.queries';
export * from './map.type';
