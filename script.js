var projects = [
{
  project: "mycryptoportfolio.io",
  alt: "MyCryptoPortfolio.io",
  description: "A cryptocurrency portfolio website where you can track your assets in real-time.",
  image: "https://i.imgur.com/txl4Ds5.png" },

{
  project: "survey-form",
  alt: "Survey Page",
  description: "A survey form about X made with HTML and CSS",
  image: "https://i.imgur.com/XVdI3lN.png" },

{
  project: "product-landing-page",
  alt: "Product Landing Page",
  description: "A product landing page for X product",
  image: "https://i.imgur.com/O3tQkcS.png" }];



/* For loop to create projects */
for (let i = 0; i < projects.length; i++) {

  const { project, alt, description, image } = projects[i];

  const projectsContainer = document.getElementById("projects-container");

  const projectTile = document.createElement("figure");
  projectTile.className = "project-figure";

  const projectFigCaptionTag = document.createElement("figcaption");
  projectFigCaptionTag.className = "project-caption flex-row";

  const projectTitle = document.createElement("h2");
  projectTitle.className = "project-title";
  projectTitle.innerHTML = alt;
  projectFigCaptionTag.appendChild(projectTitle);

  const projectDescription = document.createElement("p");
  projectDescription.className = "project-paragraph";
  projectDescription.innerHTML = description;
  projectFigCaptionTag.appendChild(projectDescription);

  const projectButton = document.createElement("a");
  projectButton.setAttribute("href", "/" + project);
  projectButton.setAttribute("target", "_blank");
  projectButton.className = "btn btn-outline-light btn-small project-btn";
  projectButton.innerHTML = `<span>Visit Website</span>
  <span class="arrow-right"><i class="fas fa-chevron-right"></i></span>`;
  projectFigCaptionTag.appendChild(projectButton);

  const projectImageTag = document.createElement("img");
  projectImageTag.setAttribute("src", image);
  projectImageTag.setAttribute("alt", alt);
  projectImageTag.className = "project-image";



  projectTile.appendChild(projectImageTag);
  projectTile.appendChild(projectFigCaptionTag);
  projectsContainer.appendChild(projectTile);
}



function createForm(inputList, formDeliveryDiv) {

  const deployDiv = document.getElementById(formDeliveryDiv);
  const form = document.createElement("form");
  form.className = "flex-row form";

  for (let i = 0; inputList.length > i; i++) {

    const item = inputList[i];
    const inputType = item.inputType;
    const inputName = item.inputName;
    const labelText = item.labelText;

    const inputContainer = document.createElement("div");

    var isTextArea = false;

    if (inputType === "textarea") {
      isTextArea = true;
    }
    var input = "";

    if (isTextArea) {
      input = document.createElement("textarea");
      input.setAttribute("rows", "5");
      inputContainer.className = "textarea-container";
    } else {
      input = document.createElement("input");
      inputContainer.className = "input-container";
    }
    input.setAttribute("id", inputName);
    input.setAttribute("name", inputName);
    input.setAttribute("type", inputType);
    input.setAttribute("required", true);

    if (inputType === "submit") {
      input.className = "btn btn-lg btn-custom submit";
      input.setAttribute("value", labelText);
      inputContainer.className = "flex-row center w100";
      inputContainer.appendChild(input);

    } else {
      input.setAttribute("placeholder", " ");

      if (isTextArea) {
        input.className = "input textarea";
      } else {
        input.className = "input";
      }

      inputContainer.appendChild(input);

      /* Div below is used to contain the label after the input is in focus */

      const cutDiv = document.createElement("div");
      if (labelText.length < 7 && labelText.length >= 5) {
        cutDiv.className = "label short-label";
      } else if (labelText.length >= 7 && labelText.length <= 10) {
        cutDiv.className = "label medium-label";
      } else if (labelText.length < 5) {
        cutDiv.className = "label shorter-label";
      } else if (isTextArea) {
        cutDiv.className = "label textarea-label";
      } else {
        cutDiv.className = " label";
      }


      inputContainer.appendChild(cutDiv);

      const label = document.createElement("label");
      label.setAttribute("for", inputName);
      label.innerHTML = labelText;

      if (isTextArea) {
        label.className = "placeholder textarea-placeholder";
      } else {
        label.className = "placeholder";
      }
      inputContainer.appendChild(label);
    }
    form.appendChild(inputContainer);
  }
  deployDiv.appendChild(form);
}

var contactForm = [
{
  inputType: "email",
  inputName: "email",
  labelText: "E-mail" },

{
  inputType: "text",
  inputName: "name",
  labelText: "Name" },

{
  inputType: "textarea",
  inputName: "details",
  labelText: "Additional details" },

{
  inputType: "submit",
  inputName: "submit",
  labelText: "Submit" }];



var contactFormDeployDiv = "formDeployDiv";

createForm(contactForm, contactFormDeployDiv);
