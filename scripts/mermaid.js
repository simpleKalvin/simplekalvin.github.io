'use strict';

// hexo-filter-mermaid-diagrams only rewrites ```mermaid blocks into
// <div class="mermaid"> — loading the library itself used to be NexT's job
// (vendors.mermaid in _config.next.yml), and toybox has no mermaid support.
// Inject the script here, only on pages that actually contain a diagram.
// version / theme come from the `mermaid` section of _config.yml.
hexo.extend.filter.register('after_render:html', function (str) {
  const cfg = hexo.config.mermaid || {};
  if (!cfg.enable || !str || str.indexOf('class="mermaid"') === -1) return str;

  const js = 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/' + (cfg.version || '8.4.8') + '/mermaid.min.js';
  const snippet =
    '<script src="' + js + '"></script>' +
    '<script>if (window.mermaid) mermaid.initialize({startOnLoad: true, theme: ' + JSON.stringify(cfg.theme || 'neutral') + '});</script>';

  return str.replace('</body>', snippet + '</body>');
});
