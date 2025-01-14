
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/gatling-grimoire-site/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 23690, hash: 'b3f02924193ba49bb8f890daa3180c719953c2ef10f8fc7be918abe9ffeeb2a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17252, hash: '7c1aba89f9c0380d9e40a6aebe073b4e8f7792fc87fd430795726a90bb3240b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TPMAOEHW.css': {size: 7126, hash: '0aQuTfwm8bQ', text: () => import('./assets-chunks/styles-TPMAOEHW_css.mjs').then(m => m.default)}
  },
};
