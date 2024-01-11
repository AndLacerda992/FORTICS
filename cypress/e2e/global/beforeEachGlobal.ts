export const bfg = {
    beforeEachGlobal
}

function beforeEachGlobal() {
   beforeEach(() => {
        cy.viewport(1280, 720)
    })
}
