import "./List.css";
import TodoItem from "./TodoItem.jsx";
import { useEffect, useState } from "react";

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

  return (
    <div className="List">
      <h4>Todo List 🎄</h4>
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
