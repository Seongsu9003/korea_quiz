# Vercel 배포 가이드 - 한국생활 적응 퀴즈

## Vercel 배포 설정

### 1단계: Vercel 프로젝트 설정
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 2단계: 환경 변수 (필요시)
- NODE_ENV = `production`

### Vercel에서 발생할 수 있는 오류와 해결방법

#### 1. Build 오류 해결
- `vite.config.vercel.ts` 파일 사용
- 더 간단한 의존성 구조로 빌드

#### 2. 라우팅 오류 해결
- `vercel.json`에서 rewrites 설정으로 SPA 라우팅 지원

#### 3. Import 오류 해결
- 절대 경로 대신 상대 경로 사용
- Node.js 호환성 개선

### 배포 파일들
- `vercel.json` - Vercel 설정
- `vite.config.vercel.ts` - Vercel용 Vite 설정
- `package-vercel.json` - 최소화된 의존성

### 배포 후 확인사항
1. 페이지 로딩 확인
2. 언어 선택 기능 확인  
3. 퀴즈 진행 확인
4. 결과 표시 확인