# Contributing to react-page-animations

Thank you for your interest in contributing to the react-page-animations project.  Anyone and everyone is welcome to contribute to this project.  The best way to start contributing to this repository is by opening, or completing an issue.  To open an issue, go to [Open Issues](https://github.com/ThePlugJumbo/react-page-animations/issues) and click "new".  To complete an issue, follow the guided steps below.

## How complete an issue / make a pull request

Find an open issue that you can complete, and check to make sure it has not been assigned in the comments.  If there are no comments yet, you are ready to tackle the issue.

- Ask to be assigned to the issue in the comments of the issue.
- Create a personal fork of the project on Github.
- Clone the forked reposity to your local machine.
- Make all necessary changes to complete the issue.
- Create a new branch with git branch -c branch_name.
- Switch to the new branch with git checkout branch_name.
- Add your changes to git with git add -A.
- Commit your changes with git commit -m "fixed #231 Describe changes".
- Push your changes Git push --set-upstream origin branch_name.
- Now, from Github, click "pull and merge" from your local repository.
- Congrats! Your pull request is live.
- Save the personal fork until your changes are approved, then it can be deleted.
 
## Scripts used while contributing

There are some scripts in node package manager which is used while making a contribution in a project

- npm run build 
 
  It creates a build directory with a production build of your app. Inside the build/static
  directory will be your JavaScript and CSS files.Each filename inside of build/static will contain a unique hash of file contents.This hash in a file name enables long term caching techniques. 

- npm run publish

  Publishes a package to the registry so that it can be installed by name.By default npm will publish to the public registry. This can be overridden by specifying a different default registry or using a scope in the name, combined with a scope-configured registry

- npm run 

  This runs an arbitrary command from a package's "scripts" object. If no "command" is provided, it will list the available scripts.run[-script] is used by the test, start, restart, and stop commands, but can be called directly, as well. When the scripts in the package are printed out, they're separated into lifecycle (test, start, restart) and directly-run scripts. 
