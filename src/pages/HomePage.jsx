import {
  Link,
} from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h1>home</h1>
      <Link to="/board">태그(게시판으로 이동)</Link>
      <br />
      <Link to="/board/write">작성(게시글작성으로 이동)</Link>
    </>
  )
}
