const badge = (license) => {
  if (license !== "none") {
    return `![license badge](https://img.shields.io/badge/license-${license}-red)`
  }
}
// generate markdown for README
const generateMarkdown = projectArr => {
  return `
  ${projectArr
      .filter(({ feature }) => feature)
      .map(({ title, description, installation, usage, contribution, tests, license, questions }) => {
        return `
    
  # ${data.title}
  ## 
  ${badge(data.license)}

  # Description
  ${data.desctiption}

  # Table of Contents
  
  * [Installation](#installation) <br />

  * [Usage](#usage) <br />

  * [Contributing](#contributing) <br />

  * [Tests](#tests) <br />

  * [License](#license) <br />

  * [Questions](#questions) <br />

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

 
 
`;
      })
      .join('')}


      ${projectsArr
      .filter(({ feature }) => !feature)
      .map(({ title, description, installation, usage, contribution, tests, license, questions }) => {
        return `

        ## License
        ${license.join(', ')}

        ## Questions
        Please feel free to reach out to me directly with any questions @ ${data.email}. If you'd like to see my other projects, please checkout my GitHub page
        [${data.github}](https://github.com/${data.github}/)
        `;
      })
      .join('')}
      `;
};

module.exports = templateData => {
  //   //destructure page data by section
  const { desctiption, table, installation, usage, contributing, tests, license, questions } = templateData;

  return `
  ${generateMarkdown(projects)}

  # ${data.title}
  ## 
  ${badge(data.license)}

  # Description
  ${data.desctiption}

  # Table of Contents
  
  * [Installation](#installation) <br />

  * [Usage](#usage) <br />

  * [Contributing](#contributing) <br />

  * [Tests](#tests) <br />

  * [License](#license) <br />

  * [Questions](#questions) <br />

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## License
  ${license.join(', ')}

  ## Questions
  Please feel free to reach out to me directly with any questions @ ${data.email}. If you'd like to see my other projects, please checkout my GitHub page
  [${data.github}](https://github.com/${data.github}/)

 `;
};

//   return 

