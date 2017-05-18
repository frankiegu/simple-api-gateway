import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

new Vue({
    el: '#content',
    data: {
        "contents": [{
            "request": {
                "path": "/api/QACenterContacts/CallForAnswer",
                "method": "GET",
                "query": {
                    "operateType": "more",
                    "status": "1",
                    "pageIndex": "1",
                    "createDateTime": "2016-12-25",
                    "pageSize": "10"
                },
                "body": {},
                "request_id": "d190b7efea134e4a9445e985156cd8b0",
                "headers": {
                    "connection": "keep-alive",
                    "accept": "*/*",
                    "userpwd": "passwd789",
                    "cache-control": "no-cache",
                    "postman-token": "44144507-6746-43de-b4ef-ea8cb7beaf34",
                    "accept-encoding": "gzip, deflate",
                    "host": "192.168.8.211:8000",
                    "userid": "80000055",
                    "user-agent": "PostmanRuntime/3.0.11-hotfix.2"
                }
            },
            "response": {
                "status": 200,
                "body": {
                    "timeFlag": "2016-12-25 00:00:00.000",
                    "NewTotalGold": "0",
                    "status": "0",
                    "RecordCount": "0",
                    "message": "无相关信息!",
                    "userInfo": {}
                },
                "headers": {
                    "Date": "Mon, 15 May 2017 09:39:12 GMT",
                    "Content-Type": "text/plain; charset=utf-8",
                    "X-AspNet-Version": "4.0.30319",
                    "Pragma": "no-cache",
                    "X-DJT-JSONFormat": "norm",
                    "X-Powered-By": "ASP.NET",
                    "Content-Length": "184",
                    "Cache-Control": "no-cache",
                    "Expires": "-1",
                    "Server": "Microsoft-IIS/8.5"
                }
            }
        }, {
            "request": {
                "path": "/api/QACenterContacts/CallForAnswer",
                "method": "GET",
                "query": {
                    "operateType": "more",
                    "status": "1",
                    "pageIndex": "1",
                    "createDateTime": "2016-12-25",
                    "pageSize": "10"
                },
                "body": {},
                "request_id": "d190b7efea134e4a9445e985156cd8b0",
                "headers": {
                    "connection": "keep-alive",
                    "accept": "*/*",
                    "userpwd": "passwd789",
                    "cache-control": "no-cache",
                    "postman-token": "44144507-6746-43de-b4ef-ea8cb7beaf34",
                    "accept-encoding": "gzip, deflate",
                    "host": "192.168.8.211:8000",
                    "userid": "80000055",
                    "user-agent": "PostmanRuntime/3.0.11-hotfix.2"
                }
            },
            "response": {
                "status": 200,
                "body": {
                    "timeFlag": "2016-12-25 00:00:00.000",
                    "NewTotalGold": "0",
                    "status": "0",
                    "RecordCount": "0",
                    "message": "无相关信息!",
                    "userInfo": {}
                },
                "headers": {
                    "Date": "Mon, 15 May 2017 09:39:12 GMT",
                    "Content-Type": "text/plain; charset=utf-8",
                    "X-AspNet-Version": "4.0.30319",
                    "Pragma": "no-cache",
                    "X-DJT-JSONFormat": "norm",
                    "X-Powered-By": "ASP.NET",
                    "Content-Length": "184",
                    "Cache-Control": "no-cache",
                    "Expires": "-1",
                    "Server": "Microsoft-IIS/8.5"
                }
            }
        }]
    },
    render: h => h(App)
})
