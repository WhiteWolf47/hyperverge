import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
// src/index.tsx or src/App.tsx

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = (): ReactElement => {
  return <Outlet />;
};

export default App;
