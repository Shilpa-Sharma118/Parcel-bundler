/**
 * Parcel has following features::
 * 
 * Creates local server
 * HMR - Hot Module Replacement / hot loading of app
 * File watcher algorithm - written in C++
 * Minification of file  MINIFY
 * Remove console logs and other cleanup of code
 * BUNDLING
 * Manages dev and prod build
 * Image optimization as well
 * caching while development
 * Compresses you file like by renaming your variables etc
 * Compatible with older version on browser
 * HTTPS on dev as well
 * handles port number
 * Uses consistent hashing algorithm
 * Zero config bundler
 * Transitive Dependencies (nested dependencies)
 * 
 * 
 * All this is done in parcel-cache folder if you see
 * 
 * dist folder - keeps minified version of files and libs
 * 
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1", { id: "heading1" }, "Heading 1");
const heading2 = React.createElement("h2", { id: "heading2" }, "Heading 2");
const heading = React.createElement(
  "div",
  {
    id: "titles",
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
