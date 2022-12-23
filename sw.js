self.addEventListener("push", function (e) {
  var options = {
    icon: "./assets/icon.png",
    body: "Welcome to iTrust Wellness Group",
    image: "./assets/itrust_cover_photo.jpg",
    requireInteraction: true,
  };
  e.waitUntil(
    self.registration.showNotification("iTrust Wellness Group", options)
  );
});
