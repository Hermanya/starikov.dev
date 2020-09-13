import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
export default {
  input: "src/exports.ts",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [
    image(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
  external: ["react", "styled-components"],
};
