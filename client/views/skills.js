Template.skills.onRendered(function() {
    var sliderOptions = {
        min: 0,
        max: 10,
        from: 0,
        grid: true,
        grid_num: 10
    };
    
    $.each(Skills, function(k, v) {
        $("#" + v + "Range").ionRangeSlider(sliderOptions);
    });
});