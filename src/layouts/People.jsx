import SuspendedComponent from "../components/SuspendedComponent";
import { lazy } from "react";

const LazyPeople = lazy(()=>import("../pages/People"))

export default function People() {
  return (
    <div>
      <SuspendedComponent>
        <LazyPeople />
      </SuspendedComponent>
    </div>
  );
}
