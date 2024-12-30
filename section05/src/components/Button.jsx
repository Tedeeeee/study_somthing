const Button = ({ text, color = "black", children }) => {
  // 이벤트 객체 ( 모든 이벤트는 매개 변수로 이벤트 객체라는 것을 제공한다 )
  const handler = (e) => {
    console.log(e);
    console.log(text);
  };
  const onMouse = () => {
    console.log("뭘 봐");
  };

  return (
    <button
      onClick={handler}
      //onMouseEnter={onMouse}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};
export default Button;
