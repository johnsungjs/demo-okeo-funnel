// THIS FILE IS GENERATED. DO NOT MODIFY

export type CustomerRecord = {
  id: number;
  version: number;
  name: string;
  company?: string;
  note?: string;
  phone?: string;
  email?: string;
  address?: string;
};

export type JumbotronRecord = {
  id: number;
  version: number;
  title?: string;
  subtitle?: string;
  background?: string;
  align?: "LEFT" | "CENTER" | "RIGHT";
  type?: string;
};

export type ThreeGridRecord = {
  id: number;
  version: number;
  title1?: string;
  title2?: string;
  title3?: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  background1?: string;
  background2?: string;
  background3?: string;
  align?: "LEFT" | "CENTER" | "RIGHT";
  type?: string;
};

export type CallToActionRecord = {
  id: number;
  version: number;
  title: string;
  buttonText: string;
  background: string;
  type: string;
}

export type WebpageRecord = {
  id: number;
  version: number;
  path?: string;
  components?: WebComponentRecord[];
};

export type WebComponentRecord = JumbotronRecord | ThreeGridRecord | CallToActionRecord;
