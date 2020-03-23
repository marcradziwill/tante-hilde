import { breakpoints } from 'utils/theme';
const sizes = {
  small: breakpoints.small.value,
  medium: breakpoints.medium.value,
  large: breakpoints.large.value,
};

export const media = {
  small: `(min-width: ${sizes.small}px)`,
  medium: `(min-width: ${sizes.medium}px)`,
  large: `(min-width: ${sizes.large}px)`,
};
