import SuspendedComponent from "../components/SuspendedComponent";
import { lazy } from "react";

const LazySustainability = lazy(() => import("../pages/Sustainability"));

export default function Sustainability() {
  return (
    <div>
      <SuspendedComponent>
        <LazySustainability />
      </SuspendedComponent>
    </div>
  );
}
