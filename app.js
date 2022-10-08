const unreadNotifications = Array.from(
  document.querySelectorAll(".notificationUnread")
);
const dots = Array.from(document.querySelectorAll(".dot"));
const markAsRead = document.querySelector("#markAsRead");

unreadNotifications.map((ele, index) => {
  ele.addEventListener("click", () => {
    ele.classList.remove("notificationUnread");
    ele.classList.add("notificationUnread-whiteBg");
    dots[index].remove();
  });
});

markAsRead.addEventListener("click", () => {
  for (const notification of unreadNotifications) {
    notification.classList.remove("notificationUnread");
    notification.classList.add("notificationUnread-whiteBg");
  }
  for (const dot of dots) {
    dot.remove();
  }
});
