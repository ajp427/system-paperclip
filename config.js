System.config({
  baseURL: "/system-paperclip/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.23",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@1.1.4",
    "paperclip": "npm:paperclip@3.0.18",
    "pc": "index",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:factories@0.0.8": {
      "protoclass": "npm:protoclass@0.0.6",
      "type-component": "npm:type-component@0.0.1"
    },
    "npm:nofactor@3.0.0": {
      "factories": "npm:factories@0.0.8",
      "he": "npm:he@0.4.1",
      "protoclass": "npm:protoclass@0.0.6"
    },
    "npm:paperclip@3.0.18": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "he": "npm:he@0.5.0",
      "nofactor": "npm:nofactor@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "protoclass": "npm:protoclass@0.0.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    }
  }
});
