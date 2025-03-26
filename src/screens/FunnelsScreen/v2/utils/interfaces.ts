import { CSSProperties } from "react";
import { WebComponentRecord } from "../../../../bridges/Records";

export interface HtmlValues {
  openingTag: string;
  closingTag: string;
  value: string;
  style: CSSProperties | undefined;
}

export interface DataDraggable {
  title: string;
  content: HtmlValues;
}

export interface FunnelForm {
  state: WebComponentRecord[];
}
