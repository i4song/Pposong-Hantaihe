#!/bin/bash

FILE=song-lyrics.md

if [[ -f "$FILE" ]]; then
	rm $FILE
fi

touch $FILE

echo "# 제목 아기염소" >> $FILE

git add $FILE && git commit -m "타이틀"

echo -e "![아기염소 그림](./baby-goat.PNG)\n" >> $FILE

git add $FILE && git commit -m "그림"

echo -e "파란하늘 파란하늘 꿈이 드리운 푸른 언덕에\n" >> $FILE

git add $FILE && git commit -m "첫 아기염소 노래 줄"

echo -e "아기염소 여럿이 풀을 뜯고 놀아요\n" >> $FILE

git add $FILE && git commit -m "두번째 아기염소 노래 줄"

echo -e "해처럼 밝은 얼굴로\n" >> $FILE

git add $FILE && git commit -m "세번째 아기염소 노래 줄"

echo -e "빗방울이 뚝뚝뚝뚝 떨어지는 날에는\n" >> $FILE

git add $FILE && git commit -m "네번째 아기염소 노래 줄"

echo -e "잔뜩 찡그린 얼굴로\n" >> $FILE

git add $FILE && git commit -m "다섯번째 아기염소 노래 줄"

echo -e "엄마찾아 음메 아빠찾아 음메 울상을 짓다가\n" >> $FILE

git add $FILE && git commit -m "여섯번째 아기염소 노래 줄"

echo -e "해가반짝 곱게피어나면 너무나 기다렸나봐\n" >> $FILE

git add $FILE && git commit -m "일곱번째 아기염소 노래 줄"

echo -e "폴짝폴짝 콩콩콩 흔들흔들 콩콩콩\n" >> $FILE

git add $FILE && git commit -m "여덟번째 아기염소 노래 줄"