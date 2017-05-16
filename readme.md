本版本使用JS编码实现  并使用Jasmine测试  实现源码位于src下的getBowlingScore.js  
## 写一个程序给保龄球比赛计分的程序
```
输入： 描述保龄球比赛成绩的字符串 (描述见下面)
输出： 整数分
```

### 计数规则
每一局保龄球比赛，也就是我们这里的一行， 都有 10 格。格被称之为“frame”。
在每一格里， 玩家有两次机会试图击倒全部 10 个瓶。

如果第一次就击倒了全部 10 个瓶，这称之为“strike”。这一格就结束了。
这一格的分数等于 10 加上接下来两球击倒的瓶数的总和。

如果一格中的第二个球击倒了全部 10 个瓶，称之为“spare”。这一格就结束了。
这一格的分数等于 10 加上接下来一个球击倒的瓶数。

如果两个球之后，仍然有瓶子没有被击倒，那么这一格的分数就是两次击倒的瓶数的总和。

如果你在最后一格（第 10 格）拿到一个 spare，你就会得到一次额外的发球机会。
如果你在最后一格拿到了 strike，你就会得到两次额外的机会。
如果额外的机会击倒了全部的球，不会重复之前的流程，额外机会的分数只用来计算最后一格的分数。

游戏的分数为所有格分数的总和。

### 举例
```
X 表示一个 strike
/ 表示一个 spare
- 表示一个 miss
| 表示一格的分界线
|| 之后的字符表示最后一格的额外机会
```
#### 实例 1
```
输入：X|X|X|X|X|X|X|X|X|X||XX
输出：300
```
10 格 10 个 strike，两个额外机会都是 strike。
* 每格的分数 = 10 + 接下来两球的分数 = 10 + 10 + 10 = 30
* 总共的分数 = 10 格 X 30 = 300

#### 实例 2
```
输入：9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||
输出：90
```
每格第一个球击倒了 9 个瓶，第二个球一个没击倒，全都 miss 了。
没有额外机会。
* 每一格 9 分
* 总共的分数 = 10 格 X 9 = 90 分

#### 实例 3
```
输入：5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5
输出：150
```
每格第一个球击倒了 5 个瓶，第二个球击倒了剩下的 5 个，得到了一个 spare。
一个额外机会，击倒了 5 个瓶。
* 每格的分数 = 10 + 下一个球的分数 = 10 + 5 = 15
* 总共的分数 = 10 格 * 15 = 150

#### 实例 4
```
输入：X|7/|9-|X|-8|8/|-6|X|X|X||81
输出：167
```

### 答题流程
1. 请用户仔细阅读题目描述
2. 使用`git clone`克隆模板仓库，或`fork`模板仓库到自己的`github`上
3. 请在 `src/main/java/BowlingGame.java` 完成 `getBowlingScore` 函数
4. 请使用**git提交(commit)，**并**上传(push)**代码，之后将github仓库地址(用户自建的) eg:（https://github.com/username/repo） 填入到**git仓库地址**一栏
5. 获取分支，填入到**git仓库分支**一栏
6. 提交
7. 等待结果


