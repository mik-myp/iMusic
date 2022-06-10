export default [
  {
    exact: true,
    path: '/',
    component: 'layouts/index',
    routes: [
      {
        exact: true,
        path: '/discoverMusic',
        component: 'DiscoverMusic/index',
      },
    ],
  },
];
