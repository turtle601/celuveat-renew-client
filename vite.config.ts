import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  server: {
    proxy: {
      '/api': {
        // 요청 전달 대상 서버 주소 설정
        target: 'https://n.api.celuveat.com/',
        // 요청 헤더 host 필드 값을 대상 서버의 호스트 이름으로 변경
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api' 제거 후 실제 API 경로로 변환
      },
    },
  },
});
