#!/bin/bash

FILE=song-lyrics.md
PRE_SCRIPT_PATH=pre-generage-lyric.sh

if ! [[ -f "$FILE" ]]; then
	"$PRE_SCRIPT_PATH"
fi

echo -e "신나는 아기염소들\n" >> $FILE

git add $FILE && git commit -m "아홉번째 아기염소 노래 줄"

echo "# 제목 과수원 길" >> $FILE

git add $FILE && git commit -m "타이틀"

echo -e "동구 밖 과수원길 아카시아 꽃이 활짝 폈네\n" >> $FILE

git add $FILE && git commit -m "첫 과수원 길 노래 줄"

echo -e "하얀 꽃 이파리 눈송이처럼 날리네\n" >> $FILE

git add $FILE && git commit -m "두번째 과수원 길 노래 줄"

echo -e "향긋한 꽃냄새가 실바람타고 솔솔\n" >> $FILE

git add $FILE && git commit -m "세번째 과수원 길 노래 줄"

echo -e "둘이서 말이 없네 얼굴 마주 보며 생긋\n" >> $FILE

git add $FILE && git commit -m "네번째 과수원 길 노래 줄"

echo -e "아카시아꽃 하얗게 핀 먼옛날의 과수원길\n" >> $FILE

git add $FILE && git commit -m "다섯번째 과수원 길 노래 줄"

echo -e "과수원길\n" >> $FILE

git add $FILE && git commit -m "여섯번째 과수원 길 노래 줄"