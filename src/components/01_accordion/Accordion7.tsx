import { useCallback, useEffect, useRef, useState } from "react";
import data from "./data";
import cx from "./cx";

const AccordionItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [current, setCurrent] = useState(false);

  const descRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setCurrent((prev) => !prev), []);

  useEffect(() => {
    let ref = descRef.current;
    ref?.addEventListener("beforematch", toggle);
    return () => {
      ref?.removeEventListener("beforematch", toggle);
    };
  }, [toggle]);

  return (
    <li className={cx("item", "item3", { current })}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      <div className={cx("description")} ref={descRef}>
        {description}
      </div>
    </li>
  );
};

const Accordion7 = () => {
  return (
    <>
      <h3>
        #7. React
        <sub>여러 개가 펼쳐지는 아코디언 + 검색가능</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((d, i) => (
          <AccordionItem {...d} key={d.id} />
        ))}
      </ul>
    </>
  );
};

export default Accordion7;
