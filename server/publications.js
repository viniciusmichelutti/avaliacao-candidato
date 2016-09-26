Meteor.publish("applications", function() {
    return Applicant.find();
});