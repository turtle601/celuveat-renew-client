import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from '../../pages/home';

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
