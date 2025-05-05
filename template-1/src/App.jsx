import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const TypeSelection = lazy(() => import('./pages/Registration/TypeSelection'));
// const MultiStepForm = lazy(() => import('./pages/Registration/'));
// const Confirmation = lazy(() => import('./pages/Registration/Confirmation'));
// 
export default function App() {
  return (
    // <Router>
      <div className="font-sans text-white">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<TypeSelection />} />
            {/* <Route path="/register/form" element={<MultiStepForm />} /> */}
            {/* <Route path="/register/confirmation" element={<Confirmation />} /> */}
          </Routes>
        </Suspense>
      </div>
    // </Router>
  );
}