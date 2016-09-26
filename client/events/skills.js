Template.skills.events({
    "submit form": function(e) {
        e.preventDefault();
        
        var register = {
            name: e.target.completeName.value,
            email: e.target.email.value,
            skills: []
        };
        
        $.each(Skills, function(k, v) {
            var skillValue = $("#" + v + "Range").data("ionRangeSlider");
            register.skills.push({
                skill: v,
                value: skillValue.result.from
            });
        });
        
        Meteor.call("addApplicant", register, function(e, id) {
            Router.go("success");
        });
    }
});