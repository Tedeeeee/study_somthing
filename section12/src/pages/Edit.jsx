import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  return <div>{id}번 일기 수정페이지 입니다</div>;
};

export default Edit;
