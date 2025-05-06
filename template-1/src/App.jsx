import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const TypeSelection = lazy(() => import("./pages/Registration/TypeSelection"));
// const MultiStepForm = lazy(() => import('./pages/Registration/'));
// const Confirmation = lazy(() => import('./pages/Registration/Confirmation'));

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
          {/* <Route path="/register/form" element={<MultiStepForm />} /> */}
          {/* <Route path="/register/confirmation" element={<Confirmation />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}
