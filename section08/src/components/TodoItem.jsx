import "./TotoItem.css";
import { memo } from "react";

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onDeleteList = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        readOnly
        onChange={onChangeCheckbox}
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={onDeleteList}>삭제</button>
    </div>
  );
};

// export default memo(TodoItem, (prevProps, nextProps) => {
//   return !(
//     prevProps.id !== nextProps.id ||
//     prevProps.isDone !== nextProps.isDone ||
//     prevProps.content !== nextProps.content ||
//     nextProps.isDone !== nextProps.isDone
//   );
// });
export default memo(TodoItem);
