const {spawn} = require('child_process');
const request = require('request');

const serverProcess = spawn('node', ['-r','dotenv/config', 'server.js'], {cwd: __dirname + '/../'});

serverProcess.stdout.on('data', data => {
  console.log(`Server says: ${data}`);
});

serverProcess.stderr.on('data', data => {
  console.log(`Server error: ${data}`);
});

serverProcess.on('close', code => {
  console.log(`Server closed with code ${code}`);
});

const testServerAuth = () => {
  request('http://localhost:8080/add_examiner', {}, (error, req, body) => {
    if(req.statusCode === 200 && req.request.path === "/login"){
      console.log("Auth test passed!")
    } else {
      console.error("Auth test failed!!!")
    }
  });
};

setTimeout(testServerAuth, 5000);

setTimeout(() => {serverProcess.kill()}, 10000);

