import SuspendedComponent from "../components/SuspendedComponent";
import { lazy } from "react";

const LazyCsrs = lazy(()=>import("../pages/Csrs"))

export default function Csrs() {
  return (
    <div>
      <SuspendedComponent>
        <LazyCsrs />
      </SuspendedComponent>
    </div>
  );
}
