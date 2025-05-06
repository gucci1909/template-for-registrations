import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const TypeSelection = lazy(() => import("./pages/Registration/TypeSelection"));
const RegistrationSteps = lazy(
  () => import("./pages/Registration/RegistrationSteps"),
);

export default function App() {
  return (
    <div className="font-sans text-white">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<TypeSelection />} />
          <Route path="/register/:type" element={<RegistrationSteps />} />
        </Routes>
      </Suspense>
    </div>
  );
}
