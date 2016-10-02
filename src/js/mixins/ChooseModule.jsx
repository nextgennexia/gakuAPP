// Libraries
import React from 'react';

const ChooseModule = {
  chooseModule: function(module) {
    this.context.router.push(`/${module}`);
  }
};

ChooseModule.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ChooseModule;