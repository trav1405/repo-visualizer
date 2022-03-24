import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from "fs"

import { processDir } from "./process-dir.js"
import { Tree } from "./Tree.tsx"
import { config } from './config.ts'

const main = async () => {

  const rootPath = config.rootPath || ""; // Micro and minimatch do not support paths starting with ./
  const maxDepth = config.maxDepth || 9
  const colorEncoding = config.colorEncoding || "type"
  const excludedPathsString = config.excludedPathsString || "node_modules,bower_components,dist,out,build,eject,.next,.netlify,.yarn,.git,.vscode,package-lock.json,yarn.lock"
  const excludedPaths = excludedPathsString.split(",").map(str => str.trim())

  // Split on semicolons instead of commas since ',' are allowed in globs, but ';' are not + are not permitted in file/folder names.
  const excludedGlobsString = config.excludedGlobsString || '';
  const excludedGlobs = excludedGlobsString.split(";");

  const data = await processDir(rootPath, excludedPaths, excludedGlobs);

  const componentCodeString = ReactDOMServer.renderToStaticMarkup(
    <Tree data={data} maxDepth={+maxDepth} colorEncoding={colorEncoding} />
  );

  const outputFile = "./diagram.svg"

  await fs.writeFileSync(outputFile, componentCodeString)
}

main().catch((e) => {
  console.log('failed')
})
