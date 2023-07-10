import SuspendedComponent from "../components/SuspendedComponent";
import { lazy } from "react";

const LazyPageNotFound = lazy(() => import("../pages/PageNotFound"));

export default function PageNotFound() {
  return (
    <div>
      <SuspendedComponent>
        <LazyPageNotFound />
      </SuspendedComponent>
    </div>
  );
}
