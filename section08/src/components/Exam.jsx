import { useReducer } from "react";

// 상태를 실제로 변환시키는 변환기 (reducer)
// 그저 함수의 반환값을 다뤄주기만 하면 된다
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch -> 발송하다
  // 상태 변화가 있어야 한다는 사실을 알리는 함수
  // 첫번째 인자 : 변환기 (함수)
  // 두번째 인자 : 초기값 (state)
  // 리듀서는 반환값을 state로 자동으로 변환해주는 것을 확인할수 있다
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => {
    // 상태가 어떻게 변화되어야 하는가?
    // dispatch 안의 객체 이름을 action 객체라고 한다
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};
export default Exam;
