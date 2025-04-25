import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.js"),
      name: "VueImageInput",
      // the name of the output files when the build is run
      fileName: "vue3-picture-input",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  define: {
    __VUE_HMR_RUNTIME__: 'import.meta.hot ? __VUE_HMR_RUNTIME__ : undefined'
  }
});