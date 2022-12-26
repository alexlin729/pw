var push = require("web-push");

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
  publicKey:
    "BBsRMW9b_dQDD5r0qnldpvlL0bygRSEebg_4TS8_N_0-55GhLAyTEAqSfZSRWXpTeU3DaASTh9V0k9qqUDv_AEw",
  privateKey: "ikV_DE4apv3zXGxU6sArmLRw5NlBEX5woDuQz1hTfdQ",
};

push.setVapidDetails(
  "mailto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
let sub = {};
// let sub = {
//   endpoint:
//     "https://fcm.googleapis.com/fcm/send/dbDvkiZ6q-U:APA91bHcZkv5FuvmgboRCaUcpDgueenj-fM9ATHRx_bfKP4J_KamW319KBgLPNc0zAPQBJdCtR2BfzUTUgGpLKpfZ9o2bN43NDNH_eZbxCiOK9MXXQ0OGGKnw8rICZ_2tfO2NPQR3Nmv",
//   expirationTime: null,
//   keys: {
//     p256dh:
//       "BMxNCKPux2P5FyzzSUFE_CTYsdJzpFLHjijoKj11HSdVrA_WWK3q2-E-whOfHuD2InTffCI8paaMXmQ9yp5Cx-k",
//     auth: "7vjvjaxslWoFvV4puFE2WA",
//   },
// };

push.sendNotification(sub, "test message");
