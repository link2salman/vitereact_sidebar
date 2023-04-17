import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'Components': path.resolve(__dirname, 'src/components/'),
      'Pages': path.resolve(__dirname, 'src/pages/'),
      'Assets': path.resolve(__dirname, 'src/assets/'),
      'Styles': path.resolve(__dirname, 'src/styles/'),
    },
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.scss'],

  },
  server: {
    port: '3000',
  },
})
