import "./List.css";
import TodoItem from "./TodoItem.jsx";
import {
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import { TodoStateContext } from "../App.jsx";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [analyzedData, setAnalyzedData] = useState({
    totalCount: 0,
    doneCount: 0,
    notDoneCount: 0,
  });

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log("search");
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

  useEffect(() => {
    console.log("memo");
    const totalCount = todos.length;
    const doneCount = todos.filter(
      (todo) => todo.isDone
    ).length;
    const notDoneCount = totalCount - doneCount;

    setAnalyzedData({
      totalCount,
      doneCount,
      notDoneCount,
    });
  }, [todos]);

  // const { totalCount, doneCount, notDoneCount } =
  //   useMemo(() => {
  //     console.log("memo");
  //     const totalCount = todos.length;
  //     const doneCount = todos.filter(
  //       (todo) => todo.isDone
  //     ).length;
  //     const notDoneCount = totalCount - doneCount;
  //
  //     return {
  //       totalCount,
  //       doneCount,
  //       notDoneCount,
  //     };
  //   }, [todos]);

  console.log("렌더링");

  return (
    <div className="List">
      <h4>Todo List 🎄</h4>
      <div>total: {analyzedData.totalCount} </div>
      <div>done: {analyzedData.doneCount}</div>
      <div>notDone: {analyzedData.notDoneCount}</div>
      {/*<div>total: {totalCount} </div>*/}
      {/*<div>done: {doneCount}</div>*/}
      {/*<div>notDone: {notDoneCount}</div>*/}
      <input
        value={search}
        placeholder="검색어를 입력해주세요"
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
