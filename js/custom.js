// 自定义解密回调
function decryptCallback() {
    // 如果 tocbot 存在，则重新渲染目录
    if (typeof tocbot !== 'undefined') {
      tocbot.refresh({
        tocSelector: '.post-toc',       // STUN 主题的目录容器
        contentSelector: '.post-content', // STUN 主题的内容容器
        headingSelector: 'h1, h2, h3, h4, h5, h6',
        collapseDepth: 6,
        headingsOffset: 20,
        scrollSmooth: true
      });
    }
  
    // 如果目录仍未渲染，通过事件触发（兼容 STUN 主题逻辑）
    setTimeout(() => {
      const event = new Event('toc-refresh');
      document.dispatchEvent(event);
    }, 300);
  }