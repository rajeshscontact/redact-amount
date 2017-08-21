'use strict';
  var AccountSummaryFD = require('../sampleData/AccountSummary.json');
  var AccountSummaryData = AccountSummaryFD;


var Promise = require('bluebird');
var paginationService = require('../services/pagination.js');


exports.getAccountSummary = function(args, roles, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(AccountSummaryData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, AccountSummaryData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        if(roles.indexOf('manager') > -1){
          res.end(JSON.stringify(result.pagedData));
        }else{
          var slicedResult = (JSON.parse(JSON.stringify(result.pagedData))).slice();
          var responseResult = slicedResult.map(function(val){
            var accounts = val.accounts.map(function(value){
              var returnValue = value;
              returnValue.netWorth = 'hidden';
              return returnValue;
            });
            var returnVal = val;
            returnVal.accounts = accounts;
            return returnVal;
          });
          res.end(JSON.stringify(responseResult));
        }
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}




exports.postAccountSummary = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AccountSummaryData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AccountSummaryData[Object.keys(AccountSummaryData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}




exports.putAccountSummary = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AccountSummaryData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AccountSummaryData[Object.keys(AccountSummaryData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}

exports.patchAccountSummary = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AccountSummaryData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AccountSummaryData[Object.keys(AccountSummaryData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteAccountSummary = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(AccountSummaryData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(AccountSummaryData[Object.keys(AccountSummaryData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}
