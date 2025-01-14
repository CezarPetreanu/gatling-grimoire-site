
export default {
  basePath: 'C:/Program Files/Git/gatling-grimoire-site',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
