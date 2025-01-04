import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import Button from "./components/Button";
import Header from "./components/Header";
import { createContext, useReducer, useRef } from "react";

const mockData = [
  {
    id: 0,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.data.id)
      );
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (
    id,
    createdDate,
    emotionId,
    content
  ) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: { id },
    });
  };

  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello");
        }}
      >
        일기 추가 테스트
      </button>
      <button
        onClick={() => {
          onUpdate(
            0,
            new Date().getTime(),
            3,
            "수정된 일기 입니다"
          );
        }}
      >
        일기 수정 테스트
      </button>
      <button
        onClick={() => {
          onDelete(0);
        }}
      >
        일기 삭제 테스트
      </button>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{ onCreate, onUpdate, onDelete }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
