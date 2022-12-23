var push = require("web-push");

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
  publicKey:
    "BBEfNgzD34yqRYWjBiZHo7iLIgWxlaoJ9kmXavYhx_2lSuTaXakkYgGoHFPJ8hQzqUKdmCVX_5QU3gOPJkrn2WA",
  privateKey: "V20jlZ82K4w8drCBvbMqAsqI2RpNaQ2HAvD5j6vvbPE",
};

push.setVapidDetails(
  "mailto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {};

push.sendNotification(sub, "test message");
