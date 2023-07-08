import SuspendedComponent from "../components/SuspendedComponent";
import { lazy } from "react";

const LazyBusiness = lazy(() => import("../pages/Business"));

export default function Business() {
  return (
    <div>
      <SuspendedComponent>
        <LazyBusiness />
      </SuspendedComponent>
    </div>
  );
}
