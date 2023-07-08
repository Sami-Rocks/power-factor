import SuspendedComponent from "../components/SuspendedComponent";
import { lazy } from "react";

const LazyAbout = lazy(() => import("../pages/About"));

export default function About() {
  return (
    <div>
      <SuspendedComponent>
        <LazyAbout />
      </SuspendedComponent>
    </div>
  );
}
