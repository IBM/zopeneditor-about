$(document).foundation();

$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        if ($('.videoContainer').length) {
            $('.videoContainer').fadeOut(500, function () { $(this).remove(); });
        }
    }
});

function trackVideoPlay(file) {
    window.bluemixAnalytics.trackEvent("Custom Event", {
        productTitle: digitalData.page.pageInfo.productTitle,
        category: digitalData.page.pageInfo.analytics.category,
        action: "View video",
        customName1: "source",
        customValue1: "Landing page",
        objectType: "Video",
        object: file
    });
}


function trackDownload(file) {
    window.bluemixAnalytics.trackEvent("Downloaded Hybrid Solution", {
        productTitle: digitalData.page.pageInfo.productTitle,
        category: digitalData.page.pageInfo.analytics.category,
        productVersion: "latest",
        customName2: "fileName",
        customName1: "source",
        customValue1: "Landing page",
        customValue2: file
    });
}

$(document).ready(function () {
    $(".trackdownload").on("click", function (e) {
        var file = $(this).attr('href');
        trackDownload(file);
    });

    // track embeded video play
    $(".embeded-video").on('play', function () {
        var file = $(this).children("source").attr("src");
        trackVideoPlay(file);
    });

    // track intro video play
    $("video").on('play', function () {
        var file = $(this).attr("src");
        trackVideoPlay(file);
    });

    $(".showVideo").on("click", function (e) {
        e.preventDefault();
        var file = $(this).data("video");
        trackVideoPlay(file);

        var htmlTemplate = '<div class="videoContainer"><div class="videoPlayer"><div style="display: block; padding-top:56%; width: 100%;">'
            + '</div><button class="closeBtn">X</button><video class="video-iframe" width="100%" height="100%" autobuffer controls autoplay>'
            + '<source id="mp4" src="'
            + file
            + '" type="video/mp4">'
            + '</video></div><div/>';
        $player = $(htmlTemplate);
        $player.find('.closeBtn').on(
            'click',
            function () {
                $(this).off().closest(
                    '.videoContainer')
                    .fadeOut(500, function () { $(this).remove(); });
            });
        $player.appendTo('body').addClass(
            'dark-bg').fadeIn();
        return false;

    });


});