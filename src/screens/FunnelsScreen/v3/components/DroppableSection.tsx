import { BackgroundImage, Flex, Group, Stack, Text } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { Property } from "csstype";
import {
  CallToActionRecord,
  JumbotronRecord,
  ThreeGridRecord,
  WebComponentRecord,
} from "../../../../bridges/Records";
import style from "../funnelscreen.module.css";
import { FunnelForm } from "../utils/interfaces";
import { WEBCOMPONENTTYPE } from "../utils/webComponentType";
import DraggableWithToggle from "./DraggableWithToggle";
import Droppable from "./Droppable";
import SimpleEditor from "./SimpleEditor";

interface DroppableSection {
  droppableRef: any;
  handleDeleteSection: (index: number) => void;
  activeSection: number | null;
  setActiveSection: (input: number) => void;
  funnelsForm: UseFormReturnType<FunnelForm>;
}

export default function DroppableSection({
  droppableRef,
  handleDeleteSection,
  activeSection,
  setActiveSection,
  funnelsForm,
}: DroppableSection) {

  const getAlignFlex = (indexDroppable: number) => {
    if (indexDroppable === null) {
      return "center";
    } else {
      if ("align" in funnelsForm.values.state[indexDroppable]) {
        if (funnelsForm.values.state[indexDroppable].align === "LEFT") {
          return "start";
        } else if (funnelsForm.values.state[indexDroppable].align === "RIGHT") {
          return "end";
        } else {
          return "center";
        }
      } else {
        return "center";
      }
    }
  };

  const getAlignText = (indexDroppable: number) => {
    if (indexDroppable === null) {
      return "center";
    } else {
      if ("align" in funnelsForm.values.state[indexDroppable]) {
        if (funnelsForm.values.state[indexDroppable].align === "LEFT") {
          return "left";
        } else if (funnelsForm.values.state[indexDroppable].align === "RIGHT") {
          return "right";
        } else {
          return "center";
        }
      } else {
        return "center";
      }
    }
  };

  const deleteButton = (index: number) => {
    return (
      <button
        style={{
          position: "absolute",
          right: -22,
          top: 0,
          backgroundColor: "red",
          borderRadius: 10,
          width: 20,
          height: 20,
          border: "none",
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteSection(index);
        }}
      />
    );
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          // border: "5px solid purple",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "350px",
            border: "2px solid grey",
          }}
          ref={droppableRef}
        >
          {funnelsForm.values.state && funnelsForm.values.state.length > 0 && (
            <>
              {funnelsForm.values.state.map(
                (component: WebComponentRecord, index: number) => {
                  switch (component.type) {
                    case WEBCOMPONENTTYPE.jumbotron: {
                      return (
                        <div
                          key={index}
                          style={{
                            position: "relative",
                            border: `${
                              activeSection === index
                                ? "5px solid blue"
                                : "none"
                            }`,
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSection(index);
                          }}
                        >
                          <Droppable id={index.toString()}>
                            <DraggableWithToggle
                              id={index.toString()}
                              value={component}
                            >
                              <BackgroundImage
                                src={(component as JumbotronRecord).background!}
                                h={600}
                                w={"100%"}
                              >
                                <Stack
                                  h={"100%"}
                                  gap={0}
                                  px={8}
                                  align={getAlignFlex(index)}
                                  justify={"center"}
                                >
                                  <input
                                    className={style.titleBanner}
                                    style={{
                                      outline: "none",
                                      background: "transparent",
                                      border: "none",
                                      fontSize: "24px",
                                      textAlign: getAlignText(index),
                                      fontWeight: 700,
                                    }}
                                    placeholder="Your Title"
                                    {...funnelsForm.getInputProps(
                                      `state.${index}.title`
                                    )}
                                  />
                                  <input
                                    className={style.subtitleBanner}
                                    style={{
                                      outline: "none",
                                      background: "transparent",
                                      border: "none",
                                      fontSize: "18px",
                                      textAlign: getAlignText(index),
                                      fontWeight: 600,
                                    }}
                                    placeholder="Your Subtitle"
                                    {...funnelsForm.getInputProps(
                                      `state.${index}.subtitle`
                                    )}
                                  />
                                </Stack>
                              </BackgroundImage>
                            </DraggableWithToggle>
                          </Droppable>
                          {deleteButton(index)}
                        </div>
                      );
                    }
                    case WEBCOMPONENTTYPE.threeGrid: {
                      return (
                        <div
                          key={index}
                          style={{
                            position: "relative",
                            border: `${
                              activeSection === index
                                ? "5px solid blue"
                                : "none"
                            }`,
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSection(index);
                          }}
                        >
                          <Droppable id={index.toString()}>
                            <DraggableWithToggle
                              id={index.toString()}
                              value={component}
                            >
                              <Flex w={"100%"}>
                                <BackgroundImage
                                  src={
                                    (component as ThreeGridRecord).background1!
                                  }
                                  h={200}
                                  w={"calc(100%/3)"}
                                >
                                  <Stack
                                    h={"100%"}
                                    gap={0}
                                    px={8}
                                    align={getAlignFlex(index)}
                                    justify={"center"}
                                  >
                                    <input
                                      className={style.titleBanner}
                                      style={{
                                        outline: "none",
                                        background: "transparent",
                                        border: "none",
                                        fontSize: "24px",
                                        textAlign: getAlignText(index),
                                        fontWeight: 700,
                                      }}
                                      placeholder="Your Title"
                                      {...funnelsForm.getInputProps(
                                        `state.${index}.title1`
                                      )}
                                    />
                                    <SimpleEditor
                                      {...funnelsForm.getInputProps(
                                        `state.${index}.subtitle1`
                                      )}
                                      textAlign={
                                        getAlignText(
                                          index
                                        ) as Property.TextAlign
                                      }
                                    />
                                  </Stack>
                                </BackgroundImage>
                                <BackgroundImage
                                  src={
                                    (component as ThreeGridRecord).background2!
                                  }
                                  h={200}
                                  w={"calc(100%/3)"}
                                >
                                  <Stack
                                    h={"100%"}
                                    gap={0}
                                    px={8}
                                    align={getAlignFlex(index)}
                                    justify={"center"}
                                  >
                                    <input
                                      className={style.titleBanner}
                                      style={{
                                        outline: "none",
                                        background: "transparent",
                                        border: "none",
                                        fontSize: "24px",
                                        textAlign: getAlignText(index),
                                        fontWeight: 700,
                                      }}
                                      placeholder="Your Title"
                                      {...funnelsForm.getInputProps(
                                        `state.${index}.title2`
                                      )}
                                    />
                                    <SimpleEditor
                                      {...funnelsForm.getInputProps(
                                        `state.${index}.subtitle2`
                                      )}
                                      textAlign={
                                        getAlignText(
                                          index
                                        ) as Property.TextAlign
                                      }
                                    />
                                  </Stack>
                                </BackgroundImage>
                                <BackgroundImage
                                  src={
                                    (component as ThreeGridRecord).background3!
                                  }
                                  h={200}
                                  w={"calc(100%/3)"}
                                >
                                  <Stack
                                    h={"100%"}
                                    gap={0}
                                    px={8}
                                    align={getAlignFlex(index)}
                                    justify={"center"}
                                  >
                                    <input
                                      className={style.titleBanner}
                                      style={{
                                        outline: "none",
                                        background: "transparent",
                                        border: "none",
                                        fontSize: "24px",
                                        textAlign: getAlignText(index),
                                        fontWeight: 700,
                                      }}
                                      placeholder="Your Title"
                                      {...funnelsForm.getInputProps(
                                        `state.${index}.title3`
                                      )}
                                    />
                                    <SimpleEditor
                                      {...funnelsForm.getInputProps(
                                        `state.${index}.subtitle3`
                                      )}
                                      textAlign={
                                        getAlignText(
                                          index
                                        ) as Property.TextAlign
                                      }
                                    />
                                  </Stack>
                                </BackgroundImage>
                              </Flex>
                            </DraggableWithToggle>
                          </Droppable>
                          {deleteButton(index)}
                        </div>
                      );
                    }
                    case WEBCOMPONENTTYPE.callToAction: {
                      return (
                        <div
                          key={index}
                          style={{
                            position: "relative",
                            border: `${
                              activeSection === index
                                ? "5px solid blue"
                                : "none"
                            }`,
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSection(index);
                          }}
                        >
                          <Droppable id={index.toString()}>
                            <DraggableWithToggle
                              id={index.toString()}
                              value={component}
                            >
                              <BackgroundImage
                                src={
                                  (component as CallToActionRecord).background!
                                }
                                h={200}
                                w={"100%"}
                              >
                                <Stack
                                  h={"100%"}
                                  gap={0}
                                  px={8}
                                  align={"center"}
                                  justify={"center"}
                                >
                                  <input
                                    className={style.titleBanner}
                                    style={{
                                      outline: "none",
                                      background: "transparent",
                                      border: "none",
                                      fontSize: "24px",
                                      textAlign: "center",
                                      fontWeight: 700,
                                    }}
                                    placeholder="Call To Action Title"
                                    {...funnelsForm.getInputProps(
                                      `state.${index}.title`
                                    )}
                                  />
                                  <button
                                    style={{
                                      border: "5px solid grey",
                                      padding: "8px 16px",
                                      borderRadius: "12px",
                                    }}
                                  >
                                    <input
                                      className={style.subtitleBanner}
                                      style={{
                                        outline: "none",
                                        background: "transparent",
                                        border: "none",
                                        fontSize: "18px",
                                        textAlign: getAlignText(index),
                                        fontWeight: 600,
                                      }}
                                      placeholder="Button Message"
                                      {...funnelsForm.getInputProps(
                                        `state.${index}.buttonText`
                                      )}
                                    />
                                  </button>
                                </Stack>
                              </BackgroundImage>
                            </DraggableWithToggle>
                          </Droppable>
                          {deleteButton(index)}
                        </div>
                      );
                    }
                    default: {
                      return <></>;
                    }
                  }
                }
              )}
            </>
          )}
          <Droppable id={funnelsForm.values.state.length.toString()}>
            <Group justify="center" content="center" h={100}>
              <Text size="xl">Drop Your Component Here ...</Text>
            </Group>
          </Droppable>
        </div>
      </div>
    </>
  );
}
