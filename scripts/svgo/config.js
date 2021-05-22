module.exports = {
    multipass: false, // boolean. false by default
    datauri: 'base64', // 'base64', 'enc' or 'unenc'. 'base64' by default
    floatPrecision: 2,
    js2svg: {
      indent: 2, // string with spaces or number of spaces. 4 by default
      pretty: true
    },
    plugins: [
      // enable a built-in plugin by name      
        "removeDoctype",
        "removeXMLProcInst",
        "removeComments",
        "removeMetadata",
        //"removeXMLNS",
        "removeEditorsNSData",
        "cleanupAttrs",
        "inlineStyles",
        "minifyStyles",
        "convertStyleToAttrs",
        "cleanupIDs",
        //"removeRasterImages",
        "removeUselessDefs",
        "cleanupNumericValues",
        //"cleanupListOfValues",
        "convertColors",
        "removeUnknownsAndDefaults",
        "removeNonInheritableGroupAttrs",
        "removeUselessStrokeAndFill",
        "removeViewBox",
        "cleanupEnableBackground",
        "removeHiddenElems",
        "removeEmptyText",
        "convertShapeToPath",
        "moveElemsAttrsToGroup",
        "moveGroupAttrsToElems",
        "collapseGroups",
        "convertPathData",
        "convertEllipseToCircle",
        "convertTransform",
        "removeEmptyAttrs",
        "removeEmptyContainers",
        "mergePaths",
        "removeUnusedNS",
        //"reusePaths",
        //"sortAttrs",
        "sortDefsChildren",
        "removeTitle",
        "removeDesc",
        //"removeDimensions",
        //"removeStyleElement",
        //"removeScriptElement"
    ]
  }
  