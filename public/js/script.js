$(document).ready(function(){
    function getId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
    
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }
    

    var regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    var url = "https://www.youtube.com/watch?v=9v_rtaye2yY";
    alert(regex.test(url));
    var videoId = getId(url);
    
    $("#iframe").attr("src","//www.youtube.com/embed/" + videoId + "?autoplay=1&showinfo=0&controls=0");
    var iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
        + videoId + '" frameborder="0" allowfullscreen></iframe>';
});