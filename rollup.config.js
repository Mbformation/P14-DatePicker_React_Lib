import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/Test.jsx",
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
  plugins: [
    peerDepsExternal(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
  ],
};
