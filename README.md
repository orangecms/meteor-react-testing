# About
This is quick demo of testing an app stack with Meteor and React with Chimp, Cucumber and Jasmine.

Check out [Xolv.io's example](https://github.com/xolvio/automated-testing-best-practices) for reference.

## Quick installation
```
cd src && meteor npm i && meteor npm start
```

## Original project setup
Building up the stack is easily done in a few steps:

1. Create my-project
```bash
mkdir my-project
cd my-project
npm init
npm i --save --dev chimp cucumber
meteor create src
cd src
```

2. Remove insecure stuff and other useless junk we don't want
```bash
meteor remove autopublish insecure blaze-html-templates mobile-experience
```

3. Remove scaffolding files from the client
```bash
rm client/*.*
```

4. Kick off npm for Meteor and add React to the stack
```bash
meteor npm init
meteor npm i
meteor npm i --save react react-dom
```

## Go for it!
```
meteor npm start
```
