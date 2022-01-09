export enum ThemeName {
  Light = `light`,
  Dark = `dark`,
}

export type Theme = {
  name: ThemeName;
  primary: string;
  secondary: string;
  accent: string;
  highlight: string;
  background: string;
  backgroundSecondary: string;
  textPrimary: string;
  fonts: {
    primary: string;
    secondary: string;
  };
};

export const theme: Theme = {
  name: ThemeName.Light,
  primary: `#104455`,
  secondary: `#0A3442`,
  accent: `#3AD3CD`,
  highlight: `#7FFFD6`,
  background: `#f9fafb`,
  backgroundSecondary: `transparent`,
  textPrimary: `#104455`,
  fonts: {
    primary: `Soehne`,
    secondary: `GTWalsheimPro`,
  },
};

export const darkTheme: Theme = {
  name: ThemeName.Dark,
  primary: `#f9fafb`,
  secondary: `#f9fafb`,
  accent: `#3AD3CD`,
  highlight: `#7FFFD6`,
  background: `#282c35`,
  backgroundSecondary: `#f9fafb`,
  textPrimary: `#FFFFFF`,
  fonts: {
    primary: `Soehne`,
    secondary: `GTWalsheimPro`,
  },
};
