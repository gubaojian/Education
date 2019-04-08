# Education

"数智教育"数据可视化创新大赛

- UI ： Angular代码
- WebAPI：WebAPI代码
- netcore-web-example.service : NetCore WebAPI的CentOS守护进程
- nginx.conf : Nginx服务配置 UI和WebAPI都需要配置
  - /usr/local/nginx/conf
  - ./nginx 启动 (/usr/local/nginx/sbin)
  - ./nginx -s reload (/usr/local/nginx/sbin)
- weather.py : 天气获得用代码

Host URL：<http://39.105.206.6>

Release Step:

- 0.common.ts 中代码需要修改一下

```typescript
let webapiurl = "http://39.105.206.6:8080/api/"
//let webapiurl = "http://localhost:5000/api/"
```

- 1.dotnet publish (WebApi目录下执行)

- 2.ng build --prod --build-optimizer (UI目录下执行)

- 3.upload (将前面的发布包上传到服务器即可)
  - education.service -> /etc/systemd/system/
  - Education\UI\dist\Angular -> Education\Angular
  - Education\WebAPI\bin\Debug\netcoreapp3.0\publish -> Education\publish

- 4.systemctl restart education.service (远程执行)

备忘录：

- 等第越小越好，ZScore和TScore越大越好
- 高一高二，高三，有不同的表示逻辑
- 不同课程的不同考试，总分都不同

TODO:

- 高优先级
  - 每次考试的总体平均分和方差等资料,排名TOP10的展示[DONE]
  - 研究一下5校和10校联考的人数。排名的时候，现在没有考虑到总考试人数，所以可能产生整体排名都上升的问题[DONE]
    - 等第和百分比同时表示，考虑了有效考试人数和无效考试等问题
  - 教师界面的美化[DONE]
  - 消费预警和消费排行榜的合并
  - 非链接的标签去除手型和特殊效果
  - 东部，白杨校区首页的开发
  - 学生成绩趋势图，增加一个按钮，弹出大图
  - 教师检索的按钮在低分辨率下出现换行的问题
  - 各种表格的排序问题，例如考试画面初始的时候没有按照班级进行排序

- 天气信息的活用，进行消费统计，进行考勤统计
- 寝室宿舍系的考虑：住宿学生的比例，同宿舍学生之间的关联等
- 教师按照课程进行统计（注意：通用技术和信息技术合并一下，英语选修9，英语2，1B模块总分过滤掉）
- IB的学生可能没有成绩的，同样对于某些学生没有考勤记录，也需要做特殊处理
- 首页标签群：白杨，东部校区人数；住校人数；
- 首页增加数据件数的表示
- 对于出生地是浙江宁波的可以进一步提取出来
- 关于天气：
    将天气分为上午和下午。如果没有破折号，则认为上下午都是一样的。  
    注意：转 也是一个区分符号。
- 宿舍视图
- 考虑一下下拉菜单可能操作性比较差。
- 个人考勤的地方，讨论一下按照分类进行统计
- 每个成绩段的学生分布情况（漏斗图）
- 年级的总体平均分等的表示
  
- 低优先度
  - 背景粒子效果 particles.js
  - 弹出框背景透明度设定
  - 生源的细粒度地图的实现
  - 数据导出到CSV

[官方答疑帖--0407更新](https://tianchi.aliyun.com/forum/postDetail?spm=5176.12586969.1002.3.2c9f6553QiG4t2&postId=53529)