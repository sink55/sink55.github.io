var posts=["2024/11/09/hello-world/","2024/11/09/My-New-Post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };