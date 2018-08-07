window.validatePassword = function(password){
   
    if(password.value.length > 5 && password.value.length < 9){
        return true;
    }

    return false;
};
module.exports = validatePassword;