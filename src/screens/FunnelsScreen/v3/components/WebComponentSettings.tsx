import { Button, Drawer, Group, Text } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { FloatingLabelInput, ImageInput } from "@okeo/okeo-components";
import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
} from "@tabler/icons-react";
import { useEffect } from "react";
import { CallToActionRecord, JumbotronRecord, ThreeGridRecord } from "../../../../bridges/Records";
import { WEBCOMPONENTTYPE } from "../utils/webComponentType";

interface WebComponentSettingsProps {
  activeSection: number | null;
  setActiveSection: (input: number | null) => void;
  funnelsForm: UseFormReturnType<any>;
}

export default function WebComponentSettings({
  activeSection,
  setActiveSection,
  funnelsForm,
}: WebComponentSettingsProps) {
  // console.log("webComponentData", webComponentData);
  // console.log("activeSection", activeSection);
  const [opened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  useEffect(() => {
    if (activeSection !== null) {
      openDrawer();
    } else {
      closeDrawer();
    }
  }, [activeSection]);

  // useform TODOOO pakai useform ya

  function settingSection() {
    if (
      funnelsForm.values.state &&
      funnelsForm.values.state.length > 0 &&
      activeSection !== null &&
      funnelsForm.values.state[activeSection] &&
      funnelsForm.values.state[activeSection].type
    ) {
      switch (funnelsForm.values.state[activeSection].type) {
        case WEBCOMPONENTTYPE.jumbotron: {
          return (
            <form>
              <FloatingLabelInput
                label={"Title"}
                placeholder="Insert Your Title"
                {...funnelsForm.getInputProps(`state.${activeSection}.title`)}
              />
              <FloatingLabelInput
                label={"Subtitle"}
                placeholder="Insert Your Subtitle"
                {...funnelsForm.getInputProps(`state.${activeSection}.subtitle`)}
              />
              <div
                style={{
                  marginTop: "12px",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #adb5bd",
                }}
              >
                <Text size="xs" fw={"bold"} c={"okeo-blue"}>
                  Choose Align
                </Text>
                <Group>
                  <Button
                    variant="light"
                    px={8}
                    py={2}
                    onClick={(e) => {
                      e.stopPropagation();
                      const updatedWebComponentData =
                        funnelsForm.values.state.map(
                          (item: JumbotronRecord, i: number) => {
                            if (i === activeSection) {
                              return {
                                ...item,
                                align: "LEFT" as "LEFT",
                              };
                            }
                            return item;
                          }
                        );

                      funnelsForm.setValues({
                        state: updatedWebComponentData,
                      });
                    }}
                  >
                    <IconAlignLeft size={12} />
                  </Button>

                  <Button
                    variant="light"
                    px={8}
                    py={2}
                    onClick={(e) => {
                      e.stopPropagation();
                      const updatedWebComponentData =
                        funnelsForm.values.state.map(
                          (item: JumbotronRecord, i: number) => {
                            if (i === activeSection) {
                              return {
                                ...item,
                                align: "CENTER" as "CENTER",
                              };
                            }
                            return item;
                          }
                        );

                      funnelsForm.setValues({
                        state: updatedWebComponentData,
                      });
                    }}
                  >
                    <IconAlignCenter size={12} />
                  </Button>
                  <Button
                    variant="light"
                    px={8}
                    py={2}
                    onClick={(e) => {
                      e.stopPropagation();
                      const updatedWebComponentData =
                        funnelsForm.values.state.map(
                          (item: JumbotronRecord, i: number) => {
                            if (i === activeSection) {
                              return {
                                ...item,
                                align: "RIGHT" as "RIGHT",
                              };
                            }
                            return item;
                          }
                        );

                      funnelsForm.setValues({
                        state: updatedWebComponentData,
                      });
                    }}
                  >
                    <IconAlignRight size={12} />
                  </Button>
                </Group>
              </div>
              <ImageInput
                label="Upload Image"
                value={
                  (funnelsForm.values.state[activeSection] as JumbotronRecord)
                    ?.background || ""
                }
                url={
                  (funnelsForm.values.state[activeSection] as JumbotronRecord)
                    ?.background || ""
                }
                onChange={(e) => {
                  const updatedWebComponentData = funnelsForm.values.state.map(
                    (item: JumbotronRecord, i: number) => {
                      if (i === activeSection) {
                        return {
                          ...item,
                          background: e.target.value,
                        };
                      }
                      return item;
                    }
                  );

                  funnelsForm.setValues({
                    state: updatedWebComponentData,
                  });
                }}
              />
            </form>
          );
        }
        case WEBCOMPONENTTYPE.threeGrid: {
          return (
            <form>
              <FloatingLabelInput
                label={"First Title"}
                placeholder="Insert Your Text"
                {...funnelsForm.getInputProps(`state.${activeSection}.title1`)}
              />
              <FloatingLabelInput
                label={"Second Title"}
                placeholder="Insert Your Text"
                {...funnelsForm.getInputProps(`state.${activeSection}.title2`)}
              />
              <FloatingLabelInput
                label={"Third Title"}
                placeholder="Insert Your Text"
                {...funnelsForm.getInputProps(`state.${activeSection}.title3`)}
              />
              <div
                style={{
                  marginTop: "12px",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #adb5bd",
                }}
              >
                <Text size="xs" fw={"bold"} c={"okeo-blue"}>
                  Choose Align
                </Text>
                <Group>
                  <Button
                    variant="light"
                    px={8}
                    py={2}
                    onClick={(e) => {
                      e.stopPropagation();
                      const updatedWebComponentData =
                        funnelsForm.values.state.map(
                          (item: ThreeGridRecord, i: number) => {
                            if (i === activeSection) {
                              return {
                                ...item,
                                align: "LEFT" as "LEFT",
                              };
                            }
                            return item;
                          }
                        );

                      funnelsForm.setValues({
                        state: updatedWebComponentData,
                      });
                    }}
                  >
                    <IconAlignLeft size={12} />
                  </Button>
                  <Button
                    variant="light"
                    px={8}
                    py={2}
                    onClick={(e) => {
                      e.stopPropagation();
                      const updatedWebComponentData =
                        funnelsForm.values.state.map(
                          (item: ThreeGridRecord, i: number) => {
                            if (i === activeSection) {
                              return {
                                ...item,
                                align: "CENTER" as "CENTER",
                              };
                            }
                            return item;
                          }
                        );

                      funnelsForm.setValues({
                        state: updatedWebComponentData,
                      });
                    }}
                  >
                    <IconAlignCenter size={12} />
                  </Button>
                  <Button
                    variant="light"
                    px={8}
                    py={2}
                    onClick={(e) => {
                      e.stopPropagation();
                      const updatedWebComponentData =
                        funnelsForm.values.state.map(
                          (item: ThreeGridRecord, i: number) => {
                            if (i === activeSection) {
                              return {
                                ...item,
                                align: "RIGHT" as "RIGHT",
                              };
                            }
                            return item;
                          }
                        );

                      funnelsForm.setValues({
                        state: updatedWebComponentData,
                      });
                    }}
                  >
                    <IconAlignRight size={12} />
                  </Button>
                </Group>
              </div>
              <ImageInput
                label="Upload Left Image"
                value={
                  (funnelsForm.values.state[activeSection] as JumbotronRecord)
                    ?.background || ""
                }
                url={
                  (funnelsForm.values.state[activeSection] as JumbotronRecord)
                    ?.background || ""
                }
                onChange={(e) => {
                  const updatedWebComponentData = funnelsForm.values.state.map(
                    (item: ThreeGridRecord, i: number) => {
                      if (i === activeSection) {
                        return {
                          ...item,
                          background1: e.target.value,
                        };
                      }
                      return item;
                    }
                  );

                  funnelsForm.setValues({
                    state: updatedWebComponentData,
                  });
                }}
              />
              <ImageInput
                label="Upload Left Image"
                value={
                  (funnelsForm.values.state[activeSection] as JumbotronRecord)
                    ?.background || ""
                }
                url={
                  (funnelsForm.values.state[activeSection] as JumbotronRecord)
                    ?.background || ""
                }
                onChange={(e) => {
                  const updatedWebComponentData = funnelsForm.values.state.map(
                    (item: ThreeGridRecord, i: number) => {
                      if (i === activeSection) {
                        return {
                          ...item,
                          background2: e.target.value,
                        };
                      }
                      return item;
                    }
                  );

                  funnelsForm.setValues({
                    state: updatedWebComponentData,
                  });
                }}
              />
              <ImageInput
                label="Upload Right Image"
                value={
                  (funnelsForm.values.state[activeSection] as JumbotronRecord)
                    ?.background || ""
                }
                url={
                  (funnelsForm.values.state[activeSection] as JumbotronRecord)
                    ?.background || ""
                }
                onChange={(e) => {
                  const updatedWebComponentData = funnelsForm.values.state.map(
                    (item: ThreeGridRecord, i: number) => {
                      if (i === activeSection) {
                        return {
                          ...item,
                          background3: e.target.value,
                        };
                      }
                      return item;
                    }
                  );

                  funnelsForm.setValues({
                    state: updatedWebComponentData,
                  });
                }}
              />
            </form>
          );
        }
        case WEBCOMPONENTTYPE.callToAction: {
          return (
            <form>
              <FloatingLabelInput
                label={"Title"}
                placeholder="Insert Your Text"
                {...funnelsForm.getInputProps(`state.${activeSection}.title`)}
              />
                <FloatingLabelInput
                label={"Button Text"}
                placeholder="Insert Your Button Text"
                {...funnelsForm.getInputProps(`state.${activeSection}.buttonText`)}
              />
              <ImageInput
                label="Upload Image"
                value={
                  (funnelsForm.values.state[activeSection] as CallToActionRecord)
                    ?.background || ""
                }
                url={
                  (funnelsForm.values.state[activeSection] as CallToActionRecord)
                    ?.background || ""
                }
                onChange={(e) => {
                  const updatedWebComponentData = funnelsForm.values.state.map(
                    (item: CallToActionRecord, i: number) => {
                      if (i === activeSection) {
                        return {
                          ...item,
                          background: e.target.value,
                        };
                      }
                      return item;
                    }
                  );

                  funnelsForm.setValues({
                    state: updatedWebComponentData,
                  });
                }}
              />
            </form>
          );
        }
        default: {
          return <></>;
        }
      }
    }
  }

  return (
    <>
      <Drawer
        offset={0}
        position="left"
        size={"xs"}
        opened={opened}
        onClose={() => {
          closeDrawer();
          setActiveSection(null);
        }}
        onClick={(e) => e.stopPropagation()}
        closeOnClickOutside={false}
        closeOnEscape={false}
        withOverlay={false}
      >
        {settingSection()}
      </Drawer>
    </>
  );
}
