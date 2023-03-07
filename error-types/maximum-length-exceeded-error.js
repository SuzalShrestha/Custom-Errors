const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError{
  constructor(excessLength,message="Maximum length exceeded"){
    super(message);
    if(excessLength!==undefined){
    message=`Maximum length exceeded by ${excessLength}`;
    }
    this.message=message;
    if(Error.captureStackTrace){
      Error.captureStackTrace(this, MaximumLengthExceededError);
    }    
    this.name = "MaximumLengthExceededError";
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}