module.exports = {
  prompts: {
    name: {
      type: "string",
      required: true,
      label: "Project name"
    },
    description: {
      type: "string",
      required: true,
      label: "Project description",
      default: "A Vue.js project"
    },
    author: {
      type: "string",
      label: "Author"
    },
    license: {
      type: "string",
      label: "License",
      default: "MIT"
    },
    plugins: {
      type: "checkbox",
      message: "Select which Vue plugins to install"
    },
    style: {
      type: "list",
      message: "Select which style to install",
      choices: [
        {
          name: 'sass',
          value: 'sass',
        },
        {
          name: 'less',
          value: 'less',
        },
        {
          name: 'stylus',
          value: 'stylus',
        },
      ]
    },
    eslint: {
      type: 'confirm',
      require: true,
      message: 'Use linting with ESLint?',
      default: true
    },
    runner: {
      type: 'confirm',
      require: true,
      message: 'Use unit test?',
      default: true
    },
  },
  helper: {
    deps (plugins) {
      let output = ''

      if (Object.keys(plugins).length > 0) output += ',\n'

      Object.keys(plugins).forEach((p, i) => {
        output += `    "${p}": ""`
        if (i !== Object.keys(plugins).length - 1) output += ',\n'
      })

      return output
    },
  },
  completeMessage: "{{#inPlace}}To get started:\n\n  npm install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{/inPlace}}"
}