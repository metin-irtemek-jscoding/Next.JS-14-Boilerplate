type ScreenName = 'WideDesktop' | 'Desktop' | 'Mobile';

type BreakPoint = {
  [key in ScreenName]: string;
};

type MediaQueries = {
  [key in ScreenName]: string;
};

export const breakPoint: BreakPoint = {
  WideDesktop: '1200px',
  Desktop: '992px',
  Mobile: '768px',
};

export const mediaQueries: MediaQueries = {
  WideDesktop: `@media only screen and (max-width: ${breakPoint.WideDesktop})`,
  Desktop: `@media only screen and (max-width: ${breakPoint.Desktop})`,
  Mobile: `@media only screen and (max-width: ${breakPoint.Mobile})`,
};
