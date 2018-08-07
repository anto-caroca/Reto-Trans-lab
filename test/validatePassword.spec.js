const assert = require("chai").assert; 
global.window = global;
const validatePassword = require('../src/js/validateEmail').validatePassword;
require('../src/js/validateEmail');

describe('validar contraseña', ()=>{
    it('debería devolver la cantidad de carácteres de la contraseña', ()=>{
        assert.equal(validatePassword(password.length >5 && password.length < 9), true);
        assert.equal(validatePassword(password.length <= 5 ), false);
        assert.equal(validatePassword(password.length >= 9), false);
        assert.equal(validatePassword(password.length === 0), false);
    });
    
});