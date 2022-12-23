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

let sub = {
  endpoint:
    "https://wns2-ln2p.notify.windows.com/w/?token=BQYAAABapu67JI6qMTcISUYmbqItdyRDFYXyTPO1%2fAYdE32Kz8khSmRYXmK7DgAfgjar5kQKSGLDoRWgUUmf2aPGSt65rtmVbSeR%2bAKYRSaRGdsuo1AWwGg9ZDoN3ww3hfVDD4rLaD%2bzFm07SHANsebbkWeDoD391pIhREmTnpRelYQvzN0DmkMnt7G%2fa86as%2foQb0Bk%2b60kmsVNjNyxGyVD9gCJp%2bT0fGNDAye8irtIYYErj%2bwZTrZWp0qfKCmDxAfDJJwq%2faozdEbNNUFgL8KvUs8vC2vNLA7B9WiNAKytR3t6Frcf7Y%2bzruoH%2bdkbrXbIA3pihMnoZJ7guO6a7enaBGie",
  expirationTime: null,
  keys: {
    p256dh:
      "BBFJoqT83s9IEWtoUZu4MCuwUBLbukjfPRR6myIF6VaqI4XbFWK1cSI78uF-CouybI9r8og0vDqZJn8c9usgcl4",
    auth: "cgI2GF5aVPjL37u_i9WM0A",
  },
};

push.sendNotification(sub, "test message");
