const { exec } = require("shelljs");

const http = require("http");

// install with: npm install @octokit/webhooks
const { Webhooks } = require("@octokit/webhooks");
const webhooks = new Webhooks({
  secret: "el-psy-congroo",
});

webhooks.onAny(({ id, name, payload }) => {
  console.log(name, "event received");

  exec("git pull && yarn build");
});

const port = 7777;
http.createServer(webhooks.middleware).listen(port);
console.log(`Webhook listen: http://localhost:${port}`);
