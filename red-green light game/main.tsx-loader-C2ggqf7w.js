(function () {
    'use strict';
  
    const injectTime = performance.now();
    (async () => {
      const { onExecute } = await import(
        /* @vite-ignore */
        chrome.runtime.getURL("assets/main.tsx-nR3n8d4V.js")
      );
      onExecute?.({ perf: { injectTime, loadTime: performance.now() - injectTime } });
    })().catch(console.error);
  
  })();
  