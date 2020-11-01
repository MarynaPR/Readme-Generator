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
  ${data.installation}

  ### 	:desktop_computer: Usage
  ${data.usage}

  ### Contribution
  ${data.contribution}

  ### Test
  ${data.test}

  ### License
  ${data.license}

  ### Questions
  Feel free to contact me with any questions via email  @ :e-mail: ${data.email}.If you'd like to see my other projects, please checkout my GitHub page :mag:
   [${data.github}](https://github.com/${data.github})
   `;
};

module.exports = { generateMarkdown };

