import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { Flex, Text } from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form";
import { LegacyRef, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  JumbotronRecord,
  ThreeGridRecord,
  WebComponentRecord,
} from "../../../bridges/Records";
import DraggableSection from "./components/DraggableSection";
import DroppableSection from "./components/DroppableSection";
import WebComponentSettings from "./components/WebComponentSettings";
import { dummyInitialWebComponentData } from "./utils/hardcodeData";
import { FunnelForm } from "./utils/interfaces";
import { isNumeric, reorderList, stringToInt } from "./utils/util";
import { WEBCOMPONENTTYPE } from "./utils/webComponentType";

export default function FunnelScreen3() {
  const droppableRef: LegacyRef<HTMLDivElement> | undefined = useRef(null);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const navigate = useNavigate();

  //nanti abis ini caritau cara ubah form didalem useForm ini
  const funnelsForm: UseFormReturnType<FunnelForm> = useForm<FunnelForm>({
    mode: "controlled",
    initialValues: {
      state: dummyInitialWebComponentData,
    },
    onValuesChange(values) {
      if (activeSection === null) {
        return;
      }

      const webComponentType = values.state[activeSection].type;

      const updatedWebComponentData = values.state.map((item, i) => {
        if (i === activeSection) {
          switch (webComponentType) {
            case WEBCOMPONENTTYPE.jumbotron: {
              return {
                ...item,
                title: (item as JumbotronRecord).title,
                subtitle: (item as JumbotronRecord).subtitle,
              };
            }
            case WEBCOMPONENTTYPE.threeGrid: {
              return {
                ...item,
                title1: (item as ThreeGridRecord).title1,
                title2: (item as ThreeGridRecord).title2,
                title3: (item as ThreeGridRecord).title3,
                subtitle1: (item as ThreeGridRecord).subtitle1,
                subtitle2: (item as ThreeGridRecord).subtitle2,
                subtitle3: (item as ThreeGridRecord).subtitle3,
              };
            }
            default:
              return item;
          }
        }
        return item;
      });

      // Only update if values actually changed
      if (
        JSON.stringify(updatedWebComponentData) !== JSON.stringify(values.state)
      ) {
        funnelsForm.setValues({ state: updatedWebComponentData });
      }
    },
  });

  const [isScrollable, setIsScrollable] = useState(false);

  // console.log("formdata", funnelsForm.values);

  const handleDragStart = (event: DragStartEvent) => {
    if (isNumeric(event.active.id)) {
      setIsScrollable(true);
    } else {
      setIsScrollable(false);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    // console.log("event", event);
    let collisionsIdx: number | null = null;

    //CHECKING COMPONENT DROPPED INSIDE DROPPABLE ZONE
    if (event.over && event.over && event.over.id) {
      collisionsIdx = stringToInt(event.over.id as string);
    }

    //HANDLE INVALID COLLITION IDX
    if (collisionsIdx === null) {
      // console.log(
      //   "outside droppable with value collition Idx of ",
      //   collisionsIdx
      // );
      return;
    }

    //FOR SCENARIO CANVAS TO CANVAS
    if (isNumeric(event.active.id)) {
      const existing: WebComponentRecord[] = Array.from(
        funnelsForm.values.state
      );
      const sourceIdx = stringToInt(event.active.id as string);
      const destinationIdx = collisionsIdx;
      const newArr: WebComponentRecord[] = reorderList(
        existing,
        sourceIdx!,
        destinationIdx
      );
      funnelsForm.setValues({
        state: newArr,
      });
      //todooooooo save here
      return;
    }

    //FOR SCENARIO WEB COMPONENT TO CANVAS
    const existing: WebComponentRecord[] = Array.from(funnelsForm.values.state);
    const index: number = collisionsIdx!;
    const newVal: WebComponentRecord = event.active.data
      .current as WebComponentRecord;
    existing[index] = newVal;

    funnelsForm.setValues({
      state: existing,
    });
    setActiveSection(index);
    return;
  };

  const handleDeleteSection = (index: number) => {
    const existing = Array.from(funnelsForm.values.state);
    existing.splice(index, 1);
    setActiveSection(null);
    funnelsForm.setValues({
      state: existing,
    });
  };

  return (
    <div
      onClick={() => setActiveSection(null)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 0,
          border: "0px solid red",
          padding: "24px 24px",
          display: "flex",
          gap: 24,
        }}
      >
        <button style={{borderRadius: "8px"}} onClick={() => navigate(-1)}>back</button>
        <Text size={"xl"} ta={"center"} fw={700}>
          Okeo Funnel v3
        </Text>
      </div>
      <div style={{ height: "100%", flex: 1, border: "0px solid red" }}>
        <DndContext
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          autoScroll={{ enabled: isScrollable }}
        >
          <Flex>
            <WebComponentSettings
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              funnelsForm={funnelsForm}
            />
            <DraggableSection />
            <DroppableSection
              droppableRef={droppableRef}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              handleDeleteSection={handleDeleteSection}
              funnelsForm={funnelsForm}
            />
          </Flex>
        </DndContext>
      </div>
    </div>
  );
}
