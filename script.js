$(document).ready(function () {
  // $.ajax({
  //   type: "POST",
  //   url: "http://choreographersdanceinstitute.com/AndroidServices/videosbysubjectid",
  //   data: JSON.stringify({
  //     id: 1,
  //   }),
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "http://localhost:3000",
  //     "Access-Control-Allow-Credentials": "true",
  //   },
  //   success: function (res) {
  let res = {
    map: {
      videos: {
        myArrayList: [
          {
            map: {
              date: "14/08/2020",
              image: "  ",
              serialversionuid: 1234567,
              video_name: "Mee_Intiki_Mundhu_-_Julai_(2012)_HD_Telugu_Music_Videos_(English_Subtitles)(720p).mp4",
              subjectmster: {
                map: {
                  subject_id: 1,
                  subject_name: "level-1",
                  description: "Rs.1500",
                  coursemaste: {
                    map: {
                      image: "1597381263202.png",
                      course_id: 1,
                      course_name: "BOLLYWOOD ",
                      subject: {
                        myArrayList: [],
                      },
                      description: "BOLLYWOOD ",
                      addedOn: "26/07/2020",
                      status: 1,
                    },
                  },
                  addedOn: "15/08/2020",
                  status: 1,
                },
              },
              v_id: 1,
              video_path:
                "http://choreographersdanceinstitute.com/videos/Mee_Intiki_Mundhu_-_Julai_(2012)_HD_Telugu_Music_Videos_(English_Subtitles)(720p).mp4",
              description: "testing video",
              title: "Test",
              courseid: 1,
              status: "1",
            },
          },
          {
            map: {
              date: "14/08/2020",
              image: "  ",
              serialversionuid: 1234567,
              video_name: "Mee_Intiki_Mundhu_-_Julai_(2012)_HD_Telugu_Music_Videos_(English_Subtitles)(720p).mp4",
              subjectmster: {
                map: {
                  subject_id: 1,
                  subject_name: "level-1",
                  description: "Rs.1500",
                  coursemaste: {
                    map: {
                      image: "1597381263202.png",
                      course_id: 1,
                      course_name: "BOLLYWOOD ",
                      subject: {
                        myArrayList: [],
                      },
                      description: "BOLLYWOOD ",
                      addedOn: "26/07/2020",
                      status: 1,
                    },
                  },
                  addedOn: "15/08/2020",
                  status: 1,
                },
              },
              v_id: 2,
              video_path: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
              description: "testing video",
              title: "Test",
              courseid: 1,
              status: "1",
            },
          },
        ],
      },
    },
  };

  //for video list
  let videoList = res.map.videos.myArrayList;
  if (videoList && videoList.length > 0) {
    for (let video of videoList) {
      $("#video-list-items").append(
        '<div class="list-item">' +
          '<div class="video-img">' +
          '<img src="http://choreographersdanceinstitute.com/imageDisplay?image=' +
          video.map.subjectmster.map.coursemaste.map.image +
          '"/>' +
          "</div>" +
          '<input hidden value="http://choreographersdanceinstitute.com/videos/' +
          video.map.video_name +
          '"/>' +
          '<div class="video-header">' +
          '<div class="video-title">' +
          video.map.video_name +
          "</div>" +
          '<div class="video-desc">' +
          '<div class="video-likes">' +
          video.map.subjectmster.map.coursemaste.map.course_name +
          "</div>" +
          '<div class="video-date">Added On: ' +
          video.map.date +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>"
      );
    }
  }
  $(document).on("click", ".list-item", function () {
    let videoImg = $(this).find("img").attr("src");
    let videoPath = $(this).find("input").attr("value");

    if ($("#my-video").length > 0) {
      var video = videojs("my-video");

      if ($(".vjs-setting-control").length == 0) {
        var myButton = video.controlBar.addChild("button");

        var myButtonDom = myButton.el();
        myButtonDom.innerHTML =
          '<ul><li>720p</li><li>480p</li><li>360p</li><li>240p</li><li>144p</li></ul><span aria-hidden="true" class="vjs-icon-placeholder"></span>';
        myButton.addClass("vjs-setting-control");
      }

      video.src(videoPath);
    } else $("#played-video").html('<video id="my-video" class="video-js" controls preload="none" autoplay="true" seeking poster=' + videoImg + ' data-setup="{}">' + "<source src=" + videoPath + ' type="video/mp4" />' + '<p class="vjs-no-js">' + "To view this video please enable JavaScript, and consider upgrading to a" + "web browser that" + '<a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>' + "</p>" + "</video>" + '<div class="played-video-title">Video Title</div>');
    if ($(".vjs-setting-control").length == 0) {
      var video = videojs("my-video");
      var myButton = video.controlBar.addChild("button");

      var myButtonDom = myButton.el();
      myButtonDom.innerHTML =
        '<ul class="vjs-setting-option"><li>720p</li><li>480p</li><li>360p</li><li>240p</li><li>144p</li></ul><span aria-hidden="true" class="vjs-icon-placeholder"></span>';
      myButton.addClass("vjs-setting-control");
    }
  });
  if ($(".list-item").length > 0) {
    $(".list-item").first().trigger("click");
  } else {
    alert();
  }
  //   },
  // });

  $(document).on("click touchstart", ".vjs-setting-control", function () {
    $(".vjs-setting-option").toggle();
  });

  $(".vjs-setting-option li").click(function () {
    //quality setting option code here
  });

  $(window).keypress(function (e) {
    var myPlayer = videojs("my-video");

    if (e.which == 32) {
      e.preventDefault();
      if (myPlayer.paused()) {
        myPlayer.play();
      } else {
        myPlayer.pause();
      }
    }
    //forward
    else if (e.which == 39) {
      myPlayer.currentTime(myPlayer.currentTime() + 10);
    }
    //backward
    else if (e.which == 37) {
      myPlayer.currentTime(myPlayer.currentTime() - 10);
    }
  });
});
