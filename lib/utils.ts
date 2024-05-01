import { IconDirection } from './icon-props';

export const getRotation = (direction: IconDirection) => {
  switch (direction) {
    case 'left':
      return 0;
    case 'up':
      return 90;
    case 'right':
      return 180;
    case 'down':
      return 270;
    default:
      return 0;
  }
};
