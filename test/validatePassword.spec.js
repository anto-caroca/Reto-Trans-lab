global.window = global;
const assert = require("chai").assert; 
 require('../src/js/validatePassword.js');

describe('validar contraseña', ()=>{
    it('debería devolver la cantidad de carácteres de la contraseña', ()=>{
        assert.equal(validatePassword('12345678'), true);
        assert.equal(validatePassword('123456789'), false);
    });
    
});