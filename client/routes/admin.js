Router.route("/admin", {
    name: "admin",
    waitOn: function() {
        return Meteor.subscribe("applications");
    },
    action: function() {
        this.render("admin", {
            data: function() {
                return { applications: Applicant.find() }
            }
        });
    }
});