import "./List.css";
import TodoItem from "./TodoItem.jsx";
import { useEffect, useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(
        todos.filter((todo) =>
          todo.content
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
    }
  }, [search, todos]);

  const { totalCount, doneCount, notDoneCount } =
    useMemo(() => {
      const totalCount = todos.length;
      const doneCount = todos.filter(
        (todo) => todo.isDone
      ).length;
      const notDoneCount = totalCount - doneCount;

      return {
        totalCount,
        doneCount,
        notDoneCount,
      };
    }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🎄</h4>
      <div>total: {totalCount} </div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
      <input
        value={search}
        placeholder="검색어를 입력해주세요"
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
