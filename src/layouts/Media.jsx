import SuspendedComponent from "../components/SuspendedComponent";
import { lazy } from "react";

const LazyMedia = lazy(()=>import("../pages/Media"))

export default function Media() {
  return (
    <div>
      <SuspendedComponent>
        <LazyMedia />
      </SuspendedComponent>
    </div>
  );
}
