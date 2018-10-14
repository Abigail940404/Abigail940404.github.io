// 崩溃欺骗
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '日本Av无码免费观看视频，本站只提供注册会员浏览';
        clearTimeout(titleTime);
    }
    else {
        document.title = '(๐॔˃̶ᗜ˂̶๐॓) 你在看什么好东西';
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 3000);
    }
});