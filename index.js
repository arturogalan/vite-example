const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');
const fs = require('fs');


void async function main() {
  // I want to be able to import here .src/MyComponent.vue
  const example= {
    data: () => ({ to: 'Developer' }),
    template: `
      <div>
        Hello {{to}}
      </div>`,
  };
  const vueApp = createSSRApp(example);
  const html = await renderToString(vueApp);
  fs.writeFile('./dist/renderOutput.txt', html, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
}();