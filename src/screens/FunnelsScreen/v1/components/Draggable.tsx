import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";
import { WebComponentRecord } from "../../../../bridges/Records";

interface DraggableProps {
  children: ReactNode;
  id: string;
  value: WebComponentRecord
}

export default function Draggable({ children, id, value }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: value
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        cursor: "pointer",
      }
    : {
        cursor: "pointer",
      };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}
