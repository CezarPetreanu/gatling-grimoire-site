
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/gatling-grimoire-site',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 23689, hash: 'f1961f3dc8fbffddb3d4d8752f75734ad881253a6ca175f417e4f4d9e641d263', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17251, hash: 'd2aad91167a21c0566553c1c03685e79502a004edb6fc5f305ba9bc561dd5053', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TPMAOEHW.css': {size: 7126, hash: '0aQuTfwm8bQ', text: () => import('./assets-chunks/styles-TPMAOEHW_css.mjs').then(m => m.default)}
  },
};
