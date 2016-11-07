import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating'
import { Modal } from 'meteor/peppelg:bootstrap-3-modal';
import { Questionnaires } from '../../api/questionnaires/questionnaires.js';

import './assigned_questionnaire.html';

Template.assignedQuestionnaire.onCreated(function() {
  this.subscribe("MyAssignedQuestionnaire");
});


Template.assignedQuestionnaire.helpers({
  questionnaire: function(){
    return Questionnaires.findOne({'secret_buddy.id': Meteor.userId() });
  }
});

Template.assignedQuestionnaire.events({
  "click #reportUser": function(event, template){
    Modal.show('reportUserModal', this);
  },
  "click #giftConfirmation": function(event, template){
    console.log(this);
  }
});
