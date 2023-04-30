import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      inter: string;
      karla: string;
    };

    colors: {
      primary: string;
      background: string;
      onBackground: string;
      text: string;
      offWhite: string;
      fade: string;
      lightFade: string;
    };

    measurements: {
      sidebar: string;
    };

    breakpoints: {
      mobile: string;
    };
  }
}
