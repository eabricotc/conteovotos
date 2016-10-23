import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplate } from 'meteor/useraccounts:core';

// Import para cargar los js de los templates que utilizara el router
import '../../ui/pages/mainapp.js';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('mainapp', {appbody: 'formcolegios'});
  }
});
