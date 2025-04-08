import { Provider } from './model';
import { MarkerContent } from './ui';

export { BindEvent, Overlay } from './ui';

export const Map = {
  Provider,
  Content: MarkerContent,
} as const;
