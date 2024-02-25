import { addDays, format } from "date-fns";

describe("get invoices and show drawer to edit", () => {
  it("exists", () => {
    cy.visit("/");
  });

  it("open invoice card to edit or delete with invoice data", () => {
    cy.visit("/");
    cy.getByData("invoice-card").click();
    cy.getByData("drawer").should("be.visible");
    cy.url().then((url) => {
      const match = url.match(/id=([^&]*)/);
      const id = match ? match[1] : null;
      cy.log("invoice ID:", id);

      cy.request("GET", `http://localhost:8000/api/invoices/${id}`).then(
        (res) => {
          expect(res.status).to.eq(200);
          cy.getByData("client_name_field")
            .should("exist")
            .should("have.value", res.body.client_name);
        }
      );
    });
  });

  it("edit invoice data", () => {
    cy.visit("/");
    cy.getByData("invoice-card").click();
    cy.getByData("drawer").should("be.visible");

    cy.getByData("client_name_field").clear().type("new text sample");
    cy.getByData("submit-btn").click();

    cy.getByData("invoice-card-title").each(($title) =>
      cy.wrap($title).should("exist").contains("new text sample")
    );
  });
});

describe("create new invoice", () => {
  it("open drawer invoice to add", () => {
    cy.visit("/");
    cy.getByData("btn").click();
    cy.getByData("drawer").should("be.visible");
  });

  it("show errors if fields are invalid", () => {
    cy.visit("/");
    cy.getByData("btn").click();

    cy.getByData("client_name_field").type("2");
    cy.getByData("client_email_field").type("pruebasinemailvalido");
    cy.getByData("total_amount_field").should("exist");

    cy.getByData("submit-btn").click();

    cy.getByData("error-client_name")
      .should("exist")
      .contains("Client name must be at least 3 characters");
    cy.getByData("error-client_email")
      .should("exist")
      .contains("Email must be valid");
    cy.getByData("error-total_amount")
      .should("exist")
      .contains("Must be greater than 1");
  });

  it("create new invoice", () => {
    const today = new Date();
    const due_date_test = format(addDays(today, 3), "yyyy-MM-dd");

    cy.visit("/");
    cy.getByData("btn").click();

    cy.getByData("client_name_field").type("toni goeminne");
    cy.getByData("client_email_field").type("testtoni@gmail.com");
    cy.getByData("total_amount_field").clear().type("1200");
    cy.getByData("due_date_field").type(due_date_test);

    cy.getByData("submit-btn").click();

    cy.getByData("invoice-card").each(($card) => {
      cy.wrap($card).contains("toni goeminne");
    });
  });
});

describe("delete invoice", () => {
  it("open invoice card to delete by id", () => {
    let invoice_client_name: string;

    cy.visit("/");
    cy.getByData("invoice-card").click();
    cy.getByData("invoice-card-title")
      .invoke("text")
      .then((txt) => {
        invoice_client_name = txt;
      });
    cy.getByData("drawer").should("be.visible");
    cy.url().then((url) => {
      const match = url.match(/id=([^&]*)/);
      const id = match ? match[1] : null;
      cy.log("invoice ID:", id);
      cy.request("DELETE", `http://localhost:8000/api/invoices/${id}`).then(
        (res) => {
          expect(res.status).to.eq(200);
        }
      );
    });
    cy.getByData("invoice-card-title").each(($card) => {
      cy.wrap($card).should("not.contain", invoice_client_name);
    });
  });
});
