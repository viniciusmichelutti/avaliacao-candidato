Template.admin.helpers({

    jobName: function(skills) {
        return Applicant.calculateJob(skills);
    }
    
});