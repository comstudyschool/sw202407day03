const http = require('http');
const express = require('express');
const app = express()

const port = 8000;

// 뷰 템플릿 상용을 위한 설정
app.set('views', 'views');
app.set('view engine', 'ejs');

// /public/index.html을 보여주기 위한 static 폴더 지정.
app.use(express.static('public'));

// 사람 데이터 목록 선언
const saraList = [
    {no:102, name:'홍길동', email:'hong@saram.com'},
    {no:103, name:'이길동', email:'lee@saram.com'},
    {no:103, name:'김길순', email:'kim@saram.com'},
    {no:104, name:'박길순', email:'park@saram.com'}
];

// localhost:8000/saram
app.get('/saram', function(req, res) {
    // ejs 페이지로 렌더링 
    // - views/saram.ejs 페이지의 코드를 읽어와서 res.end()에 적용한다.

    var message = "사람 정보 관리 페이지";
    req.app.render('saram', {message, saraList}, function(err, html) {
        res.end(html);
    });
});

const server = http.createServer(app);
server.listen(port, function() {
    console.log("서버 실행 중 >>> http://localhost:"+port);
});

// 실제 웹 서버 구축에서는 Nodejs만 사용하지 않고 express를 더 많이 사용합니다.