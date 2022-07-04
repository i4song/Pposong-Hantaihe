# Final-Project-Idea

## Comment with Reactions

제출 형식: 깃허브 액션  
설명: issue나 PR에 간단한 단어를 comment로 남기면 github-actions(bot)가 그에 맞는 이미지를 올리는 깃허브 액션

- 간단한 comment만 남기는 경우 딱딱하고 성의 없어 보일 수 있기 때문에, comment에 어울리는 이미지를 자동적으로 올림으로써 유쾌한 소통을 이어나가기 위해

1. Thanks, DIY, LGTM, PLZ 등 몇 가지 단어를 정해둔다.
2. issue나 PR에 comment가 올라오면 comment 내용을 입력값으로 받는다.
3. Comment 내용에 미리 정해둔 단어가 있으면 그에 맞는 이미지를 찾는다.
4. 해당 issue나 PR에 comment로 준비한 이미지를 올린다.

필요한 테크 스택: Github Actions, Bash script, JavaScript

## Ncloud에 Express 서버 자동 배포하기

제출 형식: 깃허브 액션  
설명: 네이버 클라우드 플랫폼인 Ncloud에 Express 서버를 자동적으로 배포할 수 있는 깃허브 액션

- 서버를 배포하는 데 걸리는 시간을 최소화하여 효과적인 배포를 실현하기 위해

1. 사용자가 ncloud에서 ACG 생성과 서버 생성을 진행한다.
2. 사용자가 깃허브 repository secrets에 서버과 관련된 민감한 정보들을 저장한다.
3. 깃허브 액션에서 secrets에 저장한 값을 사용하여 ssh 접속을 진행한다.
4. 접속한 서버에서 필요한 것들을 install한다.(node, npm, pm2 등)
5. pm2로 배포를 진행한다.

필요한 테크 스택: Github Actions, Node.js, 깃허브 소스코드

## Contribution Analysis

제출 형식: 깃허브 CLI extension  
설명: Contributors들이 깃허브 repository에 얼마나 기여했는지 통계치를 나타내는 깃허브 CLI extension

- Contributors들의 기여도를 한눈에 비교하여 본인이 부족한 점이 있다면 동기부여를 받으면서 프로젝트에 더욱 기여할 수 있도록 만들기 위해

1. github insights에 있는 commit 횟수와 코드 수정 통계치를 가지고 온다.
2. 지금까지 만들어진 PR에서 각 Contributors의 총 PR 횟수, Comment 횟수 등을 구한다.
3. 앞선 과정에서 모은 통계치들을 테이블 형식으로 만들어 각 Contributors의 통계치를 한눈에 볼 수 있도록 만든다.  

필요한 테크 스택: GitHub CLI, Bash script, Go  

## Copy/paste detector for programming source code (jscpd)

제출 형식: 깃허브 액션  
설명: [jscpd](https://github.com/kucherenko/jscpd)를 사용해서 코드의 중복정도를 검사하는 github action을 제작

- 중복된 코드는 대부분의 프로젝트에서 공통적인 기술부채이다. 이를 push나 pr마다 체크해서 항상 경각심을 유지할 수 있게끔 한다.

1. jscpd를 이용해서 해당 branch의 코드중복 정도를 가져온다.
2. 해당 통계를 통해서 그래프를 생성한다.
3. 생성된 그래프와 통계를 사용해서 PR의 comment로 첨부하거나 레포지토리의 특정 파일에 저장한다.

필요한 테크 스택: Github Actions, Bash Scripts, d3.js
