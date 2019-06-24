/*
 * @title Config
 */

// Paths
export const paths = {
  src: './src',
  dest: './dist',
  deploy: './dist/**/*',
  styles: {
    src: 'src/styles/main.scss',
    watch: 'src/styles/**/*.scss',
    components: 'src/components/**/*.scss',
    dest: 'dist/css',
    lint: 'src/styles/**/*.s+(a|c)ss'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: 'src/scripts/**/*.js',
    components: 'src/components/**/*.js',
    dest: 'dist/js',
  },
  templates: {
    src: 'src/templates/pages/*.{twig,html}',
    watch: 'src/templates/**/*.{twig,html}',
    components: 'src/components/**/*.{twig,html}',
    dest: 'dist/'
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist/assets'
  },
  copy: {
    src: 'src/robots.txt',
    dest: 'dist/'
  }
};
