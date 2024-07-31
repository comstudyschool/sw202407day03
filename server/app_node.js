const http = require('http');

const server = http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
});

server.listen(3000, function() {
    console.log("서버 실행 중 >>> http://localhost:3000");
});

// 실제 웹 서버 구축에서는 Nodejs만 사용하지 않고 express를 더 많이 사용합니다.