import { Suspense } from "react";
import Loader from "../Loader";

// eslint-disable-next-line react/prop-types
const SuspendedComponent = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export default SuspendedComponent;
