window.validatePassword = function(password){
    
    if(password.length > 5 && password.length < 9){
        return true;
    }

    return false;
};
module.exports = validatePassword;