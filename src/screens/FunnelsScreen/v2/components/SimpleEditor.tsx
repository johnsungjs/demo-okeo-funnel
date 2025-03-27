import { Property } from "csstype";
import Quill from "quill";
import { useEffect, useRef, useState } from "react";
import Editor from "./Editor";

interface SimpleEditorProps {
  value?: string;
  onChange: (input: string) => void;
  textAlign: Property.TextAlign
}

export default function SimpleEditor({ value, onChange, textAlign }: SimpleEditorProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const editorRef = useRef<Quill | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isActive && editorRef.current) {
      editorRef.current.focus();
    }
  }, [isActive]); // Autofocus when the editor becomes active

  return (
    <div ref={containerRef} style={{ padding: "0px", maxWidth: "150px", border: "2px solid red" }}>
      {isActive ? (
        <Editor ref={editorRef} htmlContent={value || ""} onHtmlChange={onChange} />
      ) : (
        <div
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            cursor: "pointer",
            minHeight: "40px",
          }}
          onClick={() => setIsActive(true)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "150px",
              overflow: "hidden",
              // whiteSpace: "nowrap",
              padding: "8px 12px",
              overflowWrap: "break-word",
              // border: "1px solid red",
              cursor: "pointer",
              minHeight: "40px",
              textAlign: textAlign
            }}
            dangerouslySetInnerHTML={{
              __html: value || "Click to edit...",
            }}
          />
        </div>
      )}
    </div>
  );
}
