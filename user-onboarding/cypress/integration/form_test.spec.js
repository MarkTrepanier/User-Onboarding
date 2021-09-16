describe('Onboarding App', () =>{
 beforeEach(() =>{
     cy.visit('http://localhost:3000/')
 })
 const nameInput = () => cy.get('input[name=name]');
 const emailInput = () => cy.get('input[name=email]');
 const pwInput = () => cy.get('input[name=password]');
 const tosInput = () => cy.get('input[name=tos]');
 const submitBtn = () => cy.get('button[type=submit]');
 const errorDiv = () => cy.get('div[class=errors]');

describe('individual input', ()=>{
 it('Name input exists and takes input', ()=>{

     nameInput()
     .should('exist')
     .type('Hambo Durstflood')
     .should('have.value','Hambo Durstflood');
 })

 it('email input exists? and takes email input', ()=>{
    emailInput()
    .should('exist')
    .type('whenPigsCanFly@sbemail.com')
    .should('have.value', 'whenPigsCanFly@sbemail.com');
 })

 it('password input exists? and takes password input', ()=>{
    pwInput()
    .should('exist')
    .type('hamR4me!')
    .should('have.value', 'hamR4me!');
 })

 it('does Terms of service exist, check/uncheck/check',()=>{
     tosInput()
     .should('exist')
     .click()
     .should('be.checked')
     .click()
     .should('not.be.checked')
     .click()
     .should('be.checked');
 })
})

describe('Submit functionality',()=>{
    it('check submit button enable/disable',()=>{
        submitBtn().should('exist')
        .should('be.disabled');


        nameInput().type('Ra');
        emailInput().type('SunGuy@Gmail.com');
        pwInput().type('sunR4me!');
        tosInput().click();

        submitBtn().should('not.be.disabled');
    })

    it('error log exist/not exist',()=>{
        
        errorDiv().should('exist');
        nameInput().type('Sam');
        emailInput().type('samIam@Gmail.com');
        pwInput().type('eggR4me!');
        tosInput().click();
        errorDiv().should('not.be.visible');

        submitBtn().should('not.be.disabled');
        nameInput().clear().should('have.value','');
        errorDiv().should('be.visible');
    })
})
})//DANGER!, DANGER!, HIGH VOLTAGE!