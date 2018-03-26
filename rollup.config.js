import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    name: "next-hoc",
    file: "dist/index.js",
    format: "umd"
  },
  external: ["react", "next/router"],
  plugins: [
    json(),
    commonjs({
      include: "node_modules/**",
      extensions: [".js"]
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: [".js", ".json"]
    }),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
