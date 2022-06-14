import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  lessLoader: {},
  fastRefresh: {},
  alias: {
    '@': '/src',
  },
  routes: [
    {
      path: '/',
      component: 'layouts/index',
      routes: [
        {
          exact: true,
          path: 'discoverMusic',
          component: 'DiscoverMusic',
          title: '发现音乐',
        },
        {
          exact: true,
          path: 'podcast',
          component: 'Podcast',
          title: '播客',
        },
        {
          exact: true,
          path: 'video',
          component: 'Video',
          title: '视频',
        },
        {
          exact: true,
          path: 'attention',
          component: 'Attention',
          title: '关注',
        },
        {
          exact: true,
          path: 'live',
          component: 'Live',
          title: '直播',
        },
        {
          exact: true,
          path: 'privateFM',
          component: 'PrivateFM',
          title: '私人FM',
        },
      ],
    },
  ],
});
