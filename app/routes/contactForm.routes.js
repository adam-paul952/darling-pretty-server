module.exports = (app) => {
  const contactForm = require("../controllers/contactForm.controller");

  // Send email
  app.post("/contact", contactForm.sendEmail);
};
