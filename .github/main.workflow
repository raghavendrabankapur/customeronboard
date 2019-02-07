workflow "New workflow" {
  on = "push"
  resolves = ["Run tests"]
}

action "Install npm Packages" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "npm install"
}

action "start server" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Install npm Packages"]
  runs = "npm start"
}

action "Run tests" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["start server"]
  runs = "npm test"
}
