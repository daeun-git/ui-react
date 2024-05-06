"use client";

import {
  ChildRoute,
  ParentRoute,
  ROUTE,
  ROUTE_PATH,
  gnbRootList,
  isParentRoute,
  routes,
} from "@/routes";
import classNames from "classnames";
import Link from "next/link";
import { useParams } from "next/navigation";

const Gnb = () => {
  const { item = [] } = useParams();
  const itemArr = item as string[];
  const currentPath = ["", ...itemArr].join("/") as ROUTE_PATH;

  return (
    <aside>
      <h1>
        <Link href="/">
          UI 요소 모음<sub>daeun</sub>
        </Link>
      </h1>
      <ul className="mainRoutes">
        {gnbRootList.map((route) => (
          <GnbItem route={route} currentPath={currentPath} key={route.key} />
        ))}
      </ul>
    </aside>
  );
};

const GnbItem = ({
  route,
  currentPath,
}: {
  route: ROUTE;
  currentPath: ROUTE_PATH;
}) => {
  if (isParentRoute(route))
    return <ParentGnbItem route={route} currentPath={currentPath} />;
  return <ChildGnbItem route={route} currentPath={currentPath} />;
};

const ParentGnbItem = ({
  route: { link, name, children },
  currentPath,
}: {
  route: ParentRoute;
  currentPath: ROUTE_PATH;
}) => {
  const open = children.includes(currentPath);
  return (
    <li className={classNames("parent", `item-${children.length}`, { open })}>
      <Link href={link}>{name}</Link>
      <ul className="subRoutes">
        {children.map((r) => {
          const route = routes[r];
          return (
            <GnbItem route={route} currentPath={currentPath} key={route.key} />
          );
        })}
      </ul>
    </li>
  );
};

const ChildGnbItem = ({
  route: { link, name },
  currentPath,
}: {
  route: ChildRoute;
  currentPath: ROUTE_PATH;
}) => {
  return (
    <li className={classNames({ active: link === currentPath })}>
      <Link href={link}>{name}</Link>
    </li>
  );
};

export default Gnb;
