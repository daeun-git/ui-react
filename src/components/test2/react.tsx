import { useState } from "react";

export const Test2_React = () => {
  const [show, toggle] = useState(false);
  return (
    <div>
      테스트2 - 리액트
      <button onClick={() => toggle((p) => !p)}>토글</button>
      <p>{show ? "켜짐" : "꺼짐"}</p>
    </div>
  );
};
