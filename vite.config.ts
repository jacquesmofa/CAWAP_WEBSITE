import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";

// Set base to empty string for absolute flexibility on HostGator
const base = ""; 
const isPreview = process.env.IS_PREVIEW ? true : false;

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
    __READDY_PROJECT_ID__: JSON.stringify(""),
    __READDY_VERSION_ID__: JSON.stringify(""),
    __READDY_AI_DOMAIN__: JSON.stringify(""),
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          react: [
            "React", "useState", "useEffect", "useContext", "useReducer",
            "useCallback", "useMemo", "useRef", "useImperativeHandle",
            "useLayoutEffect", "useDebugValue", "useDeferredValue",
            "useId", "useInsertionEffect", "useSyncExternalStore",
            "useTransition", "startTransition", "lazy", "memo",
            "forwardRef", "createContext", "createElement",
            "cloneElement", "isValidElement",
          ],
        },
        {
          "react-router-dom": [
            "useNavigate", "useLocation", "useParams",
            "useSearchParams", "Link", "NavLink", "Navigate", "Outlet",
          ],
        },
        {
          "react-i18next": ["useTranslation", "Trans"],
        },
      ],
      dts: true,
    }),
  ],
  base,
  build: {
    sourcemap: false, // Disabled for faster production loading
    outDir: "out",
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});