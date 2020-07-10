import React from 'react';

const Pos = React.lazy(() => import('./views/Pos/Pos'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Pos', name: 'Pos', component: Pos },

];

export default routes;
