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
    
    var jobs = [];
    
    // Front
    if (arrMap['html'] >= 7 && arrMap['css'] >= 7 && arrMap['javascript'] >= 7) {
        jobs.push("Front-End");
    }
    
    // Back
    if (arrMap['python'] >= 7 && arrMap['django'] >= 7) {
        jobs.push("Back-End");
    }
    
    // Mobile
    if (arrMap['ios'] >= 7 && arrMap['android'] >= 7) {
        jobs.push("Mobile");
    }
    
    return jobs;
}

Applicant.isValid = function(application) {
    if (application.name == '' || application.name.length <= 3) {
        throw new Meteor.Error(500, 'Error 500', 'Nome não pode ser vazio e menor que 3 caracteres!');
    }
    
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(application.email)) {
        throw new Meteor.Error(500, 'Error 500', 'Email inválido!');
    }
}