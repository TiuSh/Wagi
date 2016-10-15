import { createRouter } from '@exponent/ex-navigation';
import { MainScene } from '../scenes/MainScene';

export const MainRouter = createRouter(() => ({
  home: () => MainScene,
}));
