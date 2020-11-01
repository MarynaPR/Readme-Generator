const badge = (license) => {
  if (license !== "none") {
    return `![license badge](https://img.shields.io/badge/license-${license}-red)`
  }
};

function generateMarkdown(data) {
  return `
  # ${data.title}

  ${badge(data.license)}

  ## Description
  ${data.desctiption}

  ### Table of Contents
  * [Installation](#installation) 
  * [Usage](#usage) 
  * [Contributing](#contributing) 
  * [Tests](#tests) 
  * [License](#license) 
  * [Questions](#questions) 
   
  ### :electric_plug: Installation 

  * If you'd like to install *dependencies*, run the following command:

  ${data.installation}

  ### 	:desktop_computer: Usage
  ${data.usage}

  ### 	:heavy_plus_sign: Contribution

  * If you wish to *contribute*, please make sure to refer to the **Code of Conduct** guidelines found [here] (https://www.contributor-covenant.org)

  ${data.contribution}

  ### :wrench: Test

  *If you'd like to *test* this code, please enter the following command:

  ${data.test}

  ### :id: License
  ${data.license}

  ### :question: Questions
  Feel free to contact me with any questions via email  @ :e-mail: ${data.email}. 
  
  If you'd like to see my other projects, please checkout my GitHub page 	:octocat:
   [${data.github}](https://github.com/${data.github})
   `;
};

module.exports = { generateMarkdown };

