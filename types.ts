
export enum AppScreen {
  SPLASH,
  LOGIN,
  SIGNUP,
  EDUCATIONAL,
  MAIN,
  SETTINGS,
}

export interface User {
  username: string;
  email: string;
  profilePicture?: string;
  country?: string;
  birthDate?: string;
  gender?: string;
  knownLanguages?: string[];
  notificationLanguage: string;
}

export interface Language {
  code: string;
  name: string;
}
