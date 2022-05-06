describe('Docs / Carousel', () => {
  beforeEach(() => {
    cy.visit('/carousel');
    cy.injectAxe();
  });

  describe('The page', () => {
    it("shouldn't have any detectable a11y violations", () => {
      cy.checkA11y();
    });
  });

  describe('Default', () => {
    beforeEach(() => {
      cy.get('[data-testid=carousel').first().as('carousel');
      cy.get('@carousel').find('[data-testid=carousel-item]').as('items');
      cy.get('@carousel').find('[data-testid=carousel-indicator]').as('indicators');
    });

    it('should render first slide on page load', () => {
      cy.get('@items').first().should('have.attr', 'data-active', 'true');
      cy.get('@carousel').find('[data-active="true"]').should('have.length', 1);
    });

    it('should navigate forward via right control', () => {
      cy.get('@carousel').find('[data-testid=carousel-right-control]').click();
      cy.get('@items').eq(1).should('have.attr', 'data-active', 'true');
    });

    it('should navigate backward via left control', () => {
      cy.get('@carousel').find('[data-testid=carousel-left-control]').click();
      cy.get('@items').eq(4).should('have.attr', 'data-active', 'true');
    });

    it('should navigate slides via buttons', () => {
      cy.get('@indicators').eq(3).click();
      cy.get('@items').eq(3).should('have.attr', 'data-active', 'true');
    });

    it('should change slide every 3 s', () => {
      cy.wait(3000).get('@items').eq(1).should('have.attr', 'data-active', 'true');
    });
  });

  describe('Sliding interval', () => {
    it('should change slide every 5 s', () => {
      cy.get('[data-testid=carousel]').eq(1).find('[data-testid=carousel-item]').as('items');
      cy.wait(5000).get('@items').eq(1).should('have.attr', 'data-active', 'true');
    });
  });

  describe('Static', () => {
    it('should not automatically change slides', () => {
      cy.get('[data-testid=carousel]').eq(2).find('[data-testid=carousel-item]').as('items');
      cy.wait(3000).get('@items').first().should('have.attr', 'data-active', 'true');
    });
  });

  describe('Custom controls', () => {
    it('should display custom controls rather than defaults', () => {
      cy.get('[data-testid=carousel]').eq(3).as('carousel');
      cy.get('@carousel').find('[data-testid=carousel-left-control]').contains('left');
      cy.get('@carousel').find('[data-testid=carousel-right-control]').contains('right');
    });
  });

  describe('Indicators', () => {
    it('should display two carousels, where the second has no indicators', () => {
      cy.get('[data-testid=carousel]').eq(4).find('[data-testid=carousel-indicator]').should('have.length', 5);
      cy.get('[data-testid=carousel]').eq(5).find('[data-testid=carousel-indicator]').should('not.exist');
    });
  });

  describe('Slide as anything', () => {
    it('should display a carousel with itemes containing just text (no images)', () => {
      cy.get('[data-testid=carousel]')
        .eq(6)
        .find('[data-testid=carousel-item]')
        .each((item, i) => {
          cy.wrap(item).contains(`Slide ${i + 1}`);
        });
    });
  });
});

export {};
