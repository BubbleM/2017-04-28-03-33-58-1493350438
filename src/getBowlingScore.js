function getBowlingScore(bowlingCode){
	var extraIndex = bowlingCode.indexOf("||");//返回||在字符串中首次出现的位置
	// print(extraIndex);
	var	extra1 = parseInt(judgeNum(bowlingCode.substring(extraIndex+2,extraIndex+3)));//额外第一球机会的击倒球数
	var extra2 = parseInt(judgeNum(bowlingCode.substring(extraIndex+3)));//额外第二球的击倒球数
	var bowling = bowlingCode.substring(0,extraIndex);//前10次的情况
	// print();
	// print(typeof(extra1));
	// print(extra2);
	// print(bowling);
	var bowlingArr = bowling.split('|');//将前10次的情况保存在数组中
	var i = [];
	var temp = [];
	// print(bowlingArr);
	for(var i=0;i<bowlingArr.length;i++){
		temp[i] = [];
		for(var j=0;j<2;j++){
			temp[i][j] = parseInt(judgeNum(bowlingArr[i][j]));//将前10次情况转换为数值成绩
		}
	}
	// print(temp);
	bowlingArr = temp; 
	// print(bowlingArr);
	// for(var i=0;i<bowlingArr.length;i++){
	// 	print(bowlingArr[i]);
	// }

	var scores = [0,0,0,0,0,0,0,0,0,0];//每局的得分
	var totalScore = 0;//总成绩
	var firstHit = true;//是否第一次击球


	var firstHit = 0;
	var secondHit = 0;
	for(var i=0;i<bowlingArr.length;i++){
		// print("=====第" + (i+1) +"回合=====");
		firstHit = bowlingArr[i][0];
		// print("第一次击中：" + firstHit);
		// throwTheBall(firstHit);
		if(firstHit < 10){
			secondHit = bowlingArr[i][1];
			// print("第二次击中：" + secondHit);
			// throwTheBall(secondHit);
		}
		if(i == bowlingArr.length-1){
			if(firstHit == 10 || firstHit+secondHit == 10){
				// print("额外加第一球: ");
				// print(extra1);
			}
			if(firstHit == 10){
				// print("额外加第二球：");
				// print(extra2);
			}
		}
	}
	calcScore();//计算成绩
	// print("总分：" + getTotalScore());

	function calcScore(){
		for(var i=0;i<bowlingArr.length-1;i++){//第1格到第9格
			if(bowlingArr[i][0] == 10){//strike 第一次就全中
				scores[i] += 10;
				if(bowlingArr[i+1][0] == 10){
					scores[i] += 10;
					if(i < 8){
						scores[i] += bowlingArr[i+2][0];
					}else{
						scores[i] += extra1; 
					}
				}else{
					scores[i] += bowlingArr[i+1][0] + bowlingArr[i+1][1];
				}
			}
			else if(bowlingArr[i][0] + bowlingArr[i][1] == 10){//spare 第二次全中 补中
				scores[i] += 10;
				scores[i] += bowlingArr[i+1][0];
			}else{
				scores[i] += bowlingArr[i][0] + bowlingArr[i][1];
			}
		}
		//最后一次成绩
		if(bowlingArr[9][0] == 10){
			scores[9] += 10;
			scores[9] += extra1 + extra2;
		}
		else if(bowlingArr[9][0] + bowlingArr[9][1] == 10){
			scores[9] += 10;
			scores[9] += extra1;
		}
		else{
			scores[9] += bowlingArr[9][0] + bowlingArr[9][1];
		}

	}

	function getTotalScore(){ //总成绩
		for(var i=0;i<scores.length;i++){
			// print(typeof(scores[i]));
			totalScore += scores[i];
		}
		return totalScore;
	}

	return getTotalScore();
}

function judgeNum(num){ //判断各种情况
	switch(num){
		case "X":
			return 10;
		case '/':
			return 10;
		case '-':
			return 0;
		default:
			return num;
	}
}

// getBowlingScore("X|7/|9-|X|-8|8/|-6|X|X|X||81");
