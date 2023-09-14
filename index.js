const like = document.getElementById("like");

like.addEventListener("click", function () {
  if (like.classList.contains("bi-heart")) {
    like.classList.remove("bi-heart");
    like.classList.add("bi-heart-fill");
  } else {
    like.classList.remove("bi-heart-fill");
    like.classList.add("bi-heart");
  }
});

const comment = document.getElementById("comment");

comment.addEventListener("click", function () {
  if (comment.classList.contains("bi-chat")) {
    comment.classList.remove("bi-chat");
    comment.classList.add("bi-chat-fill");
  } else {
    comment.classList.remove("bi-chat-fill");
    comment.classList.add("bi-chat");
  }
});
