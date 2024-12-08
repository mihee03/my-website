import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 검색 API 프록시 설정
      '/api/search-local': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/search-local/, '/v1/search/local.json'),
        secure: true,
      },
      // 지도 API 프록시 설정
      '/api/maps': {
        target: 'https://naveropenapi.apigw.ntruss.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/maps/, ''),
        secure: true,
      },
    },
  },
});
