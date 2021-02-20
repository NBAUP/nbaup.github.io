const shell = require("shelljs");

const http = require("http");

// install with: npm install @octokit/webhooks
const { Webhooks } = require("@octokit/webhooks");
const handler = new Webhooks({
  secret: "el-psy-congroo",
});

handler.on("push", (event) => {
  console.info(
    `Received a push event for ${event.payload.repository.name} to ${event.payload.ref}`
  );

  // git pull repo
  if (shell.exec("git pull").code !== 0) {
    console.error("Git 拉取失败，请检查默认分支。");
  } else {
    console.info("安装依赖...");
    shell.exec("yarn");
    console.info("生成静态文件");
    shell.exec("yarn build");
  }
});

const port = 7777;
http.createServer(handler.middleware).listen(port);
console.log(`Webhook listen: http://localhost:${port}`);
