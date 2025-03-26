import Quill from "quill";
import "quill/dist/quill.snow.css";
import { forwardRef, useEffect, useRef } from "react";

interface EditorProps {
  htmlContent: string;
  onHtmlChange: (html: string) => void;
}

const Editor = forwardRef<Quill | null, EditorProps>(
  ({ htmlContent, onHtmlChange }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const quillRef = useRef<Quill | null>(null);
    const isSettingValue = useRef(false); // Prevent unwanted updates

    useEffect(() => {
      if (!containerRef.current || quillRef.current) return;

      // Create Quill editor only ONCE
      const editorContainer = document.createElement("div");
      containerRef.current.appendChild(editorContainer);
      const quill = new Quill(editorContainer, {
        theme: "snow",
        modules: {
          toolbar: [["bold", "italic", "underline"]],
        },
      });

      quill.root.innerHTML = htmlContent; // Set initial content

      // Pass Quill instance via ref
      if (typeof ref === "function") {
        ref(quill);
      } else if (ref) {
        ref.current = quill;
      }

      quillRef.current = quill;

      // Handle content change
      quill.on(Quill.events.TEXT_CHANGE, () => {
        if (isSettingValue.current) return;
        const html = quill.root.innerHTML;
        onHtmlChange(html);
      });

      return () => {
        if (typeof ref === "function") {
          ref(null);
        } else if (ref) {
          ref.current = null;
        }

        quillRef.current = null;
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
      };
    }, []); // Empty dependency array prevents reinitialization

    // Sync external state with editor content
    useEffect(() => {
      if (!quillRef.current) return;
      const currentHtml = quillRef.current.root.innerHTML;

      if (currentHtml !== htmlContent) {
        isSettingValue.current = true;
        quillRef.current.root.innerHTML = htmlContent;
        setTimeout(() => (isSettingValue.current = false), 0);
      }
    }, [htmlContent]);

    return <div ref={containerRef} />;
  }
);

Editor.displayName = "Editor";

export default Editor;
