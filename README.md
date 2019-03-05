# Education

"数智教育"数据可视化创新大赛

- UI ： Angular代码
- WebAPI：WebAPI代码
- netcore-web-example.service : NetCore WebAPI的CentOS守护进程
- nginx.conf : Nginx服务配置 UI和WebAPI都需要配置

Host URL：http://39.105.206.6

Release Step:
1.dotnet publish (发布webapi)
2.ng build --prod --build-optimizer
3.upload (将前面的发布包上传到服务器即可)
4.systemctl restart education.service (/etc/systemd/system/)