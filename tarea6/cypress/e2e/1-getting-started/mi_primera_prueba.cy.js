describe('Test de tarea 11', () => {
    beforeEach(() => { //Antes de cada prueba, se ejecuta esta función
        cy.visit('http://127.0.0.1:8080');
    });

    it('Acepta números válidos', () => {
        cy.get('#numero-integrantes').type('10'); //Prueba con un número cualquiera, en este caso 10, para ver que acepte un numero valido el campo 
        cy.get('#numero-integrantes').should('have.value', '10'); //Asegura que el campo tenga el valor 10. Dice que "debería" tener el valor 10, pero prueba si el campo tiene ese valor, que no hay a error en la lectura del campo. AL decir have.value se encarga de verificar que se acepta ese valor
    });

    it('Acepta el valor mínimo permitido', () => {
        cy.get('#numero-integrantes').should('exist').clear().type('1'); //Clear: borra lo que había anteriormente en el campo y vuelve a escribir (type) el numero 1. Prueba con un número cualquiera, en este caso 1, para ver que acepte un numero valido el campo. Un numero entero positivo y menor 
        cy.get('#numero-integrantes').should('have.value', '1'); //Debería aceptar el valor 1 sin dar error
    });

    it('No acepta números negativos', () => {
        cy.get('#numero-integrantes').clear().type('-5'); //Prueba con un número cualquiera, en este caso -5, para ver que no acepte un numero entero negativo.
            cy.get('#numero-integrantes').should('not.have.value', '-5')//Debería no aceptar el valor -5 
    });

    it('No acepta letras', () => {
        cy.get('#numero-integrantes').clear().type('abc');//Prueba con letras cualquiera  
        cy.get('#numero-integrantes').should('not.have.value', 'abc');// Debería no aceptar el valor abc
    });

    it('No acepta caracteres especiales', () => {
        cy.get('#numero-integrantes').clear().type('@#$');
        cy.get('#numero-integrantes').should('not.have.value', '@#$');
    });

    it('No acepta espacios en blanco', () => {
        cy.get('#numero-integrantes').clear().type('  ');
        cy.get('#numero-integrantes').should('have.value', '');
    });

    it('Valida campo requerido', () => { //NO se puede avanzar hasta completar el campo
        cy.get('#numero-integrantes').clear();
        cy.get('#numero-integrantes').should('have.attr', 'required');
    });
});


/*
it('testea la funcionalidad de la tarea 6', () => {
    cy.get('#numero-integrantes').type('1');
    cy.get('#siguiente-paso').click();
    cy.get('.integrantes input').type('20'); // agarramos el input de la clase integrantes y le ponemos el valor 20
    cy.get('#calcular').click();

    ////Para controlar mayor edad, menor edad, promedio, etc.
    cy.get('#promedio-edad').should('have.text', '20.00');
    cy.get('#menor-edad').should('have.text', '20');
    cy.get('#mayor-edad').should('have.text', '20');
});
*/
