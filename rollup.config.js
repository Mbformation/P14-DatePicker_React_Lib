import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
export default {
  input: "src/DatePicker.jsx",
  output: [
    {
      file: "dist/index.jsx",
      format: "cjs",
    },
    {
      file: "dist/index.es.jsx",
      format: "es",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    commonjs(),
    peerDepsExternal(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    postcss({
      extensions: [".css"],
    }),
  ],
};
