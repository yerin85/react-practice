# nginx 이미지를 사용합니다. 뒤에 tag가 없으면 latest 를 사용합니다.
FROM nginx:alpine

# root 에 app 폴더를 생성.
RUN mkdir /app

# work dir 고정
WORKDIR /app

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/*

# host pc 의 default.conf 를 아래 경로에 복사
COPY default.conf /etc/nginx/conf.d

# 8082 포트 오픈
EXPOSE 8082

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]
