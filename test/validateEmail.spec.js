const assert = require('chai').assert;
global.window = global;
require('../src/js/validateEmail').loginWithFirebase;
require('../src/js/validateEmail').registerWithFirebase;
; //Sólo enlaza el archivo, parecido al script de html

describe('Validar emails', ()=>{ //Describe lo que habrá dentro de cada función
    describe('Debería verificar si existe el arroba', ()=>{
        it('Debería el correo tener solo un arroba', ()=>{ //Caso de prueba
            assert.equal(validateEmail("asdf@asdf.com"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validateEmail("asdf@@asdf.com"), false);          
            assert.equal(validateEmail("asdf.com"), false);
            
        });
        it('Debería el correo tener un arroba antes del dominio', ()=>{
            assert.equal(validateEmail(".com@asdf"), false);
            assert.equal(validateEmail("fabian@laboratoria.la"), true);
        });
    });(
    describe('Debería verificar si tiene un dominio', ()=>{
        it('Tiene un punto y luego solo caracteres del alfabeto', ()=>{
            assert.equal(validateEmail('asdf@asdf'), false);
            assert.equal(validateEmail('asdf@asdf.'), false);
        });
    }));
    describe('Debería verificar que no tenga carácteres raros', ()=>{
        it('tiene letras, números, guiones', ()=>{
            assert.equal(validateEmail(',{}[]*+¨´/¿?¡!|°#$%&()=~^'), false);
            assert.equal(validateEmail('fabian@laboratoria.la'), true);
        })
    });(
    describe('Debería verificar que tenga al menos 1 caracter antes del arroba', ()=>{
        it('tiene al menos un carácter antes del arroba', ()=>{
            assert.equal(validateEmail("fas@asdf.com"), true); 
            assert.equal(validateEmail("@asdf.com"), false);
        })
    }));
});