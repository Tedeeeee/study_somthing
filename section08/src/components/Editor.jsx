import "./Editor.css";
import { useRef, useState, useContext } from "react";
import { TodoDispatchContext } from "../App.jsx";

const Editor = () => {
  const { onAddList } = useContext(TodoDispatchContext);
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
