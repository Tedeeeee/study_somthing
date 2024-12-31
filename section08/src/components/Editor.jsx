import "./Editor.css";
import { useRef, useState } from "react";

const Editor = ({ onAddList }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onAddList(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        placeholder="새로운 Todo...."
        value={content}
        onChange={onChangeContent}
        onKeyDown={onEnter}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
