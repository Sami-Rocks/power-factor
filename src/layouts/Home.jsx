import SuspendedComponent from "../components/SuspendedComponent";
import { lazy } from "react";

const LazyHome = lazy(() => import("../pages/Home"));

export default function Home() {
  return (
    <div>
      <SuspendedComponent>
        <LazyHome />
      </SuspendedComponent>
    </div>
  );
}
