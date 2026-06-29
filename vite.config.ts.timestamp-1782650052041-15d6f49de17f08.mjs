// vite.config.ts
import { defineConfig } from "file:///C:/Users/VIRAJ/OneDrive/%E6%96%87%E6%A1%A3/Desktop/qorynta/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/VIRAJ/OneDrive/%E6%96%87%E6%A1%A3/Desktop/qorynta/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/VIRAJ/OneDrive/%E6%96%87%E6%A1%A3/Desktop/qorynta/node_modules/lovable-tagger/dist/index.js";
import viteCompression from "file:///C:/Users/VIRAJ/OneDrive/%E6%96%87%E6%A1%A3/Desktop/qorynta/node_modules/vite-plugin-compression/dist/index.mjs";
import { ViteImageOptimizer } from "file:///C:/Users/VIRAJ/OneDrive/%E6%96%87%E6%A1%A3/Desktop/qorynta/node_modules/vite-plugin-image-optimizer/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\VIRAJ\\OneDrive\\\u6587\u6863\\Desktop\\qorynta";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  build: {
    target: "es2015"
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && viteCompression({ algorithm: "brotliCompress" }),
    mode === "production" && viteCompression({ algorithm: "gzip" }),
    mode === "production" && ViteImageOptimizer()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxWSVJBSlxcXFxPbmVEcml2ZVxcXFxcdTY1ODdcdTY4NjNcXFxcRGVza3RvcFxcXFxxb3J5bnRhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxWSVJBSlxcXFxPbmVEcml2ZVxcXFxcdTY1ODdcdTY4NjNcXFxcRGVza3RvcFxcXFxxb3J5bnRhXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9WSVJBSi9PbmVEcml2ZS8lRTYlOTYlODclRTYlQTElQTMvRGVza3RvcC9xb3J5bnRhL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XHJcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gXCJ2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXJcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiBcIjo6XCIsXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gICAgaG1yOiB7XHJcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICB0YXJnZXQ6ICdlczIwMTUnLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBjb21wb25lbnRUYWdnZXIoKSxcclxuICAgIG1vZGUgPT09IFwicHJvZHVjdGlvblwiICYmIHZpdGVDb21wcmVzc2lvbih7IGFsZ29yaXRobTogXCJicm90bGlDb21wcmVzc1wiIH0pLFxyXG4gICAgbW9kZSA9PT0gXCJwcm9kdWN0aW9uXCIgJiYgdml0ZUNvbXByZXNzaW9uKHsgYWxnb3JpdGhtOiBcImd6aXBcIiB9KSxcclxuICAgIG1vZGUgPT09IFwicHJvZHVjdGlvblwiICYmIFZpdGVJbWFnZU9wdGltaXplcigpXHJcbiAgXS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VSxTQUFTLG9CQUFvQjtBQUMzVyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8scUJBQXFCO0FBQzVCLFNBQVMsMEJBQTBCO0FBTG5DLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUyxpQkFBaUIsZ0JBQWdCO0FBQUEsSUFDMUMsU0FBUyxnQkFBZ0IsZ0JBQWdCLEVBQUUsV0FBVyxpQkFBaUIsQ0FBQztBQUFBLElBQ3hFLFNBQVMsZ0JBQWdCLGdCQUFnQixFQUFFLFdBQVcsT0FBTyxDQUFDO0FBQUEsSUFDOUQsU0FBUyxnQkFBZ0IsbUJBQW1CO0FBQUEsRUFDOUMsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
