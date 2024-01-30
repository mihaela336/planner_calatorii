/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your Help ViewModel code goes here
 */
define(['../accUtils'],

// define(['../accUtils',"knockout",
// "ojs/ojknockout", "ojs/ojcheckboxset"],
 function(accUtils) {
    function HelpViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
 
        // this.checkValue = ko.observableArray();
        // this.dircolumn = ko.pureComputed(() => {
        //     return !!(typeof this.checkValue()[0] !== "undefined" &&
        //         this.checkValue()[0] != null &&
        //         this.checkValue()[0] === "dirColumn");
        // });
    

      this.connected = () => {
        accUtils.announce('Help page loaded.', 'assertive');
        document.title = "Help";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return HelpViewModel;
  }
);
