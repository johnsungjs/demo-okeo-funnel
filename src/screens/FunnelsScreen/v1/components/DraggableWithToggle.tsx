import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";
import { WebComponentRecord } from "../../../../bridges/Records";

interface DraggableProps {
  children: ReactNode;
  id: string;
  value: WebComponentRecord;
}

export default function DraggableWithToggle({
  children,
  id,
  value,
}: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: value,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {
        cursor: "auto",
      };

  return (
    <div style={{...style, position: "relative"}} {...attributes} role="div">
      {value !== null && (
        <button
          style={{
            position: "absolute",
            backgroundColor: "green",
            width: 20,
            height: 20,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            borderTopRightRadius: 500,
            borderBottomRightRadius: 500,
            border: 'none',
            top: 0,
            left: -23
          }}
          ref={setNodeRef}
          {...listeners}
        />
      )}
      {children}
    </div>
  );
}
