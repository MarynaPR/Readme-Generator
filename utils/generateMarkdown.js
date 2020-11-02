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

  ${data.description}

  ### Table of Contents
  * [Installation](#installation) 
  * [Technology Used](#languages)
  * [Usage](#usage) 
  * [Contributing](#contributing) 
  * [Tests](#tests) 
  * [License](#license) 
  * [Questions](#questions) 
   
  ### Installation :electric_plug:

  * If you'd like to install *dependencies*, run the following command:

  ${data.installation}

  ### Technology Used :label: 

  ${data.languages}

  ### Usage :desktop_computer:

  * 

  ${data.usage}

  ### Contribution :heavy_plus_sign: 

  * If you wish to *contribute*, please make sure to refer to the **Code of Conduct** guidelines found [here](https://www.contributor-covenant.org)

  ${data.contribution}

  ### Test :wrench: 

  * If you'd like to *test* this code, please enter the following command:

  ${data.test}

  ### License :id:
  ${data.license}

  ### Questions :question: 
  Feel free to contact me with any questions via email  @ :e-mail: ${data.email}. 
  
  If you'd like to see my other projects, please checkout my GitHub page :octocat:
 [${data.github}](https://github.com/${data.github})
`;
};

module.exports = { generateMarkdown };

