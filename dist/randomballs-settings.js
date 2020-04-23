"use strict";

/*==================================================

** RandomBalls.js 設定ファイル
==================================================*/

/*
** RandomBalls.js化するcanvasのID（必須）
--------------------------------------------------*/
var randomBalls_canvasID = 'randomBalls'; //<canvas>のIDを''内に記入

/*
** 共通設定（任意）
--------------------------------------------------*/
var randomBalls_canvasColor = 'rgba(255, 127, 80, 0.8)'; //canvas（描画範囲）の背景色
var randomBalls_canvasSize = false; //canvas（描画範囲）を親要素に合わせるか？ true/false（初期値、100vw, 100vh）
var randomBalls_ballsSpeed = 1; //ボールの動く速度
var randomBalls_ballsSize = 23; //ボールのランダムで決まる最大半径

/*
** 基本のボールの設定（任意）
--------------------------------------------------*/
var randomBalls_initialBalls = 20; //ボールの個数
var randomBalls_initialBallsColor = [255, 255, 255]; //ボールの色（RGB）
var randomBalls_initialBallsOpacity = 4; //ボールのランダムで決まる透明度の最大値（1~9）

/*
** クリックして増えるボールの設定（任意）
--------------------------------------------------*/
var randomBalls_extraBallsMax = 10; //ボールの最大個数
var randomBalls_extraBallsColor = 'rgba(255,255,0,0.15)'; //ボールの色（RGBaじゃなくてもOK）