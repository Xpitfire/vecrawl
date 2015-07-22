var titles = ["Abstract Art"];

$(function () {
    $('#kenburns-slideshow').Kenburns({
        images: [
            "/images/image0.jpg",
            "/images/image1.jpg",
            "/images/image2.jpg",
            "/images/image3.jpg",
            "/images/image4.jpg"
        ],
        scale: 0.75,
        duration: 8000,
        fadeSpeed: 1200,
        ease3d: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
        onSlideComplete: function () {
            $('#slide-title').html(titles[this.getSlideIndex()]);
        },
        onLoadingComplete: function () {
            $('#status').html("Loading Complete");
            $('#status').fadeToggle(900);
        }
    });
});