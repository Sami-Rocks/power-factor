import SuspendedComponent from "../components/SuspendedComponent";
import { lazy } from "react";

const LazyContact = lazy(() => import("../pages/Contact"));

export default function Contact() {
  return (
    <div>
      <SuspendedComponent>
        <LazyContact />
      </SuspendedComponent>
    </div>
  );
}
