import "./App.css";
import {
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <button onClick={onClickButton}>
          New 페이지로 이동!
        </button>
      </div>
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/new">New</Link>
          <Link to="/diary">Diary</Link>
          <Link to="/test">testA</Link>
        </div>
        <div>
          <a href="/">Home</a>
          <a href="/new">New</a>
          <a href="/diary">Diary</a>
          <a href="/test">testB</a>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
