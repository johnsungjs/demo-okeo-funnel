import { CallToActionRecord, JumbotronRecord, ThreeGridRecord, WebComponentRecord } from "../../../../bridges/Records";

export const dummyInitialWebComponentData: WebComponentRecord[] = [
  {
    id: 1,
    version: 0,
    title: "",
    subtitle: "",
    background:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",
    align: "CENTER",
    type: "Jumbotron",
  },
];

export const droppablePlaceHolderData: WebComponentRecord = {
  id: 0,
  version: 0,
  background: "https://fakeimg.pl/600x400?font=bebas&font_size=1",
  type: "PlaceHolder",
};

export const dataDraggable: WebComponentRecord[] = [
  {
    id: 0,
    version: 0,
    title: "",
    subtitle: "",
    background: "https://fakeimg.pl/600x400?font=bebas&font_size=1",
    align: "CENTER",
    type: "Jumbotron",
  } as JumbotronRecord,
  {
    id: 1,
    version: 0,
    title1: "",
    title2: "",
    title3: "",
    subtitle1: "",
    subtitle2: "",
    subtitle3: "",
    subtitle: "",
    background1: "https://fakeimg.pl/600x400?font=bebas&font_size=1",
    background2: "https://fakeimg.pl/600x400?font=bebas&font_size=1",
    background3: "https://fakeimg.pl/600x400?font=bebas&font_size=1",
    background: "https://fakeimg.pl/600x400?font=bebas&font_size=1",
    align: "CENTER",
    type: "ThreeGrid",
  } as ThreeGridRecord,
  {
    id: 2,
    version: 0,
    title: "",
    buttonText: "Buy",
    type: "CallToAction"
  } as CallToActionRecord
];
