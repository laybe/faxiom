const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    preprocess: sveltePreprocess({
      scss: {
        includePaths: ['src'],
      },
      postcss: {
        plugins: [require('autoprefixer')],
      }
    }),
    // ...other svelte options could go here
};

