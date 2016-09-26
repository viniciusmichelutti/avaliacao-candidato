Meteor.methods({

    addApplicant: function(application) {
        var job = Applicant.calculateJob(application.skills);
        
        SSR.compileTemplate('emailTemplate', Assets.getText('email-template.html'));
        var emailData = {
          name: job
        };
        console.log("##### ENVIANDO EMAIL");
        console.log(SSR.render('emailTemplate', emailData));

        // FUNÇÃO DE ENVIAR EMAIL DESATIVADA, POIS NÃO HÁ SERVIDOR SMTP
        /*Email.send({
          to: application.email,
          from: "from@email.com",
          subject: "Obrigado por se candidatar",
          html: SSR.render('emailTemplate', emailData)
        });*/
        
        return Applicant.add(application);   
    }
    
});