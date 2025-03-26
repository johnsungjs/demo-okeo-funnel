import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function SimpleEditor() {
  const [content, setContent] = useState("");
  const quillRef = useRef<ReactQuill>(null); // Explicitly type the ref
  const [isActive, setIsActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the editor container

  const handleChange = (value: string) => {
    setContent(value);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        isActive
      ) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]); // Re-run effect when isActive changes

  const modules = {
    toolbar: [["bold", "italic", "underline"]],
  };

  const formats = ["bold", "italic", "underline"];

  return (
    <div ref={containerRef}>
      {isActive ? (
        <ReactQuill
          ref={quillRef}
          value={content}
          onChange={handleChange}
          modules={modules}
          formats={formats}
        />
      ) : (
        <div onClick={() => setIsActive(true)}>Click to edit...</div>
      )}
    </div>
  );
}
