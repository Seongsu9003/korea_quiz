# Vercel 배포 문제 해결 가이드

## 현재 설정된 배포 파일들
- `vercel.json` - 메인 배포 설정
- `build-vercel.js` - Vercel용 Vite 설정
- `vite.config.vercel.ts` - 대안 설정 파일

## Vercel 배포 단계별 설정

### 1. Vercel 대시보드 설정
```
Build Command: vite build --config build-vercel.js
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x
```

### 2. 일반적인 오류와 해결책

#### 빌드 오류 (Build Failed)
- 원인: 복잡한 의존성 또는 서버 코드 포함
- 해결: `build-vercel.js` 설정으로 client만 빌드

#### 라우팅 오류 (404 on refresh)
- 원인: SPA 라우팅 미지원
- 해결: `vercel.json`의 rewrites 설정 적용

#### Import 오류 (Module not found)
- 원인: 절대 경로 문제
- 해결: 별칭(alias) 설정으로 경로 해결

### 3. 대안 배포 방법

만약 현재 설정으로 문제가 계속되면:

1. **간단한 설정 사용**
   ```json
   {
     "rewrites": [{"source": "/(.*)", "destination": "/index.html"}]
   }
   ```

2. **수동 빌드 후 배포**
   - 로컬에서 빌드 생성
   - dist 폴더만 Vercel에 업로드

### 4. 디버깅 체크리스트
- [ ] 모든 import 경로가 올바른가?
- [ ] package.json에 필요한 의존성이 있는가?
- [ ] Vercel 빌드 로그에서 정확한 오류 확인
- [ ] 브라우저 개발자 도구에서 콘솔 오류 확인