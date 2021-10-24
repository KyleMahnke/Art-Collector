/**
 * The index.js file is used to re-export from our separate files, that way rather than write:
 * 
 * import Feature from './components/Feature';
 * 
 * we can write:
 * 
 * import { Feature } from './components';
 * 
 * since index.js is assumed as part of the import when you specify a folder
 * 
 * Re-export Feature, Loading, Preview, Search, and Title from their respective files
 */
// export { default as Feature } from './components/Feature';
// export { default as Loading } from './components/Loading';
export { default as Preview } from './components/Preview';
export { default as Search } from './components/Search';
// export { default as Title } from './components/Title';