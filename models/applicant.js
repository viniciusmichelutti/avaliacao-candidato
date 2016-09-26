Applicant = new Mongo.Collection('applicant');

Applicant.add = function(application) {
    application.createdAt = new Date();
    return this.insert(application);
};

Applicant.calculateJob = function(skills) {
    var arrMap = {};
    skills.forEach(function(obj, inx) {
        arrMap[obj.skill] = obj.value
    });
    
    var job = "";
    
    // Front
    if (arrMap['html'] >= 7 && arrMap['css'] >= 7 && arrMap['javascript'] >= 7) {
        job = "Front-End";
    }
    
    // Back
    if (arrMap['python'] >= 7 && arrMap['django'] >= 7) {
        job = "Back-End";
    }
    
    // Mobile
    if (arrMap['ios'] >= 7 && arrMap['android'] >= 7) {
        job = "Mobile";
    }
    
    return job;
}