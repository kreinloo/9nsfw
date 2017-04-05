function is404(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status === 404;
}

function getPictureInnerHTML(id) {
  var str = `
    <a href="javascript: void(0);" class="badge-post-zoom zoomable">
      <div class="image-post">
        <img class="badge-item-img" src="https://img-9gag-fun.9cache.com/photo/VIDID_700b.jpg"/>
       </div>
    </a>
    <div class="post-text-container badge-item-description"></div>
  `;
  return str.replace(/VIDID/g, id);
}

function getVideoInnerHTML(id) {
  var str = `
    <a href="/gag/VIDID"
      class="badge-animated-cover badge-track badge-track-no-follow"
      data-track="post,p,,,d,VIDID,p"
      data-web-post="1">
      <div class="badge-animated-container-animated post-view gif-post"
        data-image="https://img-9gag-fun.9cache.com/photo/VIDID_460sa.gif"
        data-mp4="https://img-9gag-fun.9cache.com/photo/VIDID_460sv.mp4"
        data-webm="https://img-9gag-fun.9cache.com/photo/VIDID_460svwm.webm"">
        <video preload="auto"
          poster="https://img-9gag-fun.9cache.com/photo/VIDID_460s.jpg"
          width="600" loop muted autoplay>
            <source src="https://img-9gag-fun.9cache.com/photo/VIDID_460sv.mp4" type="video/mp4">
            <source src="https://img-9gag-fun.9cache.com/photo/VIDID_460svwm.webm" type="video/webm">
            <div class="badge-item-animated-img"></div>
        </video>
        <div class="badge-animated-container-static hide">
          <img class="badge-item-img hide" src="https://img-9gag-fun.9cache.com/photo/VIDID_460s.jpg" />
          <span class="play">GIF</span>
        </div>
      </div>
    </a>
    <div class="post-text-container badge-item-description"></div>
  `;
  return str.replace(/VIDID/g, id);
}

var nsfw = document.getElementsByClassName("nsfw-post");

if (nsfw.length !== 0) {
  var id = window.location.pathname.split("/")[2];
  var vid = "https://img-9gag-fun.9cache.com/photo/ID_460sv.mp4".replace("ID", id);
  var pic = "https://img-9gag-fun.9cache.com/photo/ID_700b.jpg".replace("ID", id);
  var d = document.getElementsByClassName("badge-post-container badge-entry-content post-container")[0];
  if (!is404(vid)) {
    d.innerHTML = getVideoInnerHTML(id);
  } else {
    d.innerHTML = getPictureInnerHTML(id);
  }
}



