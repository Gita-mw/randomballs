/*==================================================

** RandomBalls.js 設定ファイル
==================================================*/

/*
** RandomBalls.js化するcanvasのID（必須）
--------------------------------------------------*/
const randomBalls_canvasID = 'randomBalls'; //<canvas>のIDを''内に記入

/*
** 共通設定（任意）
--------------------------------------------------*/
const randomBalls_canvasColor = 'rgba(255, 127, 80, 0.8)'; //canvas（描画範囲）の背景色
const randomBalls_canvasSize = false; //canvas（描画範囲）を親要素に合わせるか？ true/false（初期値、100vw, 100vh）
const randomBalls_ballsSpeed = 1; //ボールの動く速度
const randomBalls_ballsSize = 10; //ボールのランダムで決まる最大半径

/*
** 基本のボールの設定（任意）
--------------------------------------------------*/
const randomBalls_initialBalls = 20; //ボールの個数
const randomBalls_initialBallsColor = [255, 255, 255] //ボールの色（RGB）
const randomBalls_initialBallsOpacity = 3; //ボールのランダムで決まる透明度の最大値（1~9）

/*
** クリックして増えるボールの設定（任意）
--------------------------------------------------*/
const randomBalls_extraBallsMax = 10; //ボールの最大個数
const randomBalls_extraBallsColor = 'rgba(255,255,0,0.15)'; //ボールの色（RGBaじゃなくてもOK）