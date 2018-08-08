global.window = global;
const assert = require("chai").assert; 
const validatePassword = require('../src/js/validatePassword');
require('../src/js/validatePassword');

describe('validar contraseña', ()=>{
    it('debería devolver la cantidad de carácteres de la contraseña', ()=>{
        assert.equal(validatePassword('12345678'), true);
        assert.equal(validatePassword('123456789'), false);
    });
    
});