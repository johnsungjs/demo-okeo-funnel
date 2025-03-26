import { Fragment } from "react";

// import { Box, Flex } from "@mantine/core";
import { dataDraggable } from "../utils/hardcodeData";
import Draggable from "./Draggable";


const dataElement = dataDraggable;

export default function DraggableSection() {
  const draggableMarkup =
    dataElement &&
    dataElement.length > 0 &&
    dataElement.map((e, index) => (
      <Fragment key={index}>
        <Draggable id={e.type!} value={e}>
          <div
            style={{
              borderWidth: 2,
              textAlign: "center",
              borderRadius: 12,
              borderColor: "green",
              borderStyle: "solid",
              padding: "8px 24px",
              marginBottom: "16px",
            }}
          >
            {e.type}
          </div>
        </Draggable>
      </Fragment>
    ));

  const draggableCloneShadow =
    dataElement &&
    dataElement.length > 0 &&
    dataElement.map((e, index) => (
      <Fragment key={index}>
        <div
          style={{
            borderWidth: 2,
            textAlign: "center",
            borderRadius: 12,
            borderColor: "grey",
            borderStyle: "solid",
            padding: "8px 24px",
            marginBottom: "16px",
            opacity: "50%",
          }}
        >
          {e.type}
        </div>
      </Fragment>
    ));
  return (
    <>
      <div style={{ position: "relative" }}>
        {/* Clone Shadow (Behind) */}
        <div
          style={{
            position: "absolute",
            width: "303px",
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: 0.5,
          }}
        >
          <div>{draggableCloneShadow}</div>
        </div>

        {/* Draggable Items (Above) */}
        <div style={{ position: "relative", zIndex: 1, width: "303px", }}>{draggableMarkup}</div>
      </div>
    </>
  );
}
