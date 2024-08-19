import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {URL, fileURLToPath} from 'url'
// import { Form } from 'react-router-dom'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    devSourcemap: true,
  },
  resolve:{
    alias:[
      {
        find:'@',
        replacement:fileURLToPath(new URL('./src',
        import.meta.url))
      },
     
    ]
  }
})
