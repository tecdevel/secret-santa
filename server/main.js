import '/imports/startup/server';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  smtp = {
    username: Meteor.settings.private.email.mailgun.username,
    password: Meteor.settings.private.email.mailgun.password,
    server: Meteor.settings.private.email.mailgun.host,
    port: Meteor.settings.private.email.mailgun.port
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;


  if ( Date.now() > new Date('December 11, 2016 10:10:10') || Meteor.settings.private.testMode) {
    SyncedCron.start();
  }

});
