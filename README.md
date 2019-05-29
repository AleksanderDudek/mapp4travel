# mapp4travel

Travel mApp
Implement a small app, in which we will be able to see all Countries, mark countries you've visited and the ones you would like to visit.

What we need:
    Country listing with the possibility of searching and sorting by various attributes (name, code, capital city etc.)
    Retrieve countries from https://restcountries.eu/
    <!-- retrieved on app start up and stored in local store -->
    Each country can be previewed to get more information
    <!-- todo -->
    Each country can be marked by user as “visited" or “want to visit”, 
    <!-- done -->
    plus user can add some notes for each
    <!-- todo -->
    Form to add notes (with all necessary fields) and  “visited”, “want to visit” marker
    Listing of all “visited" or “want to visit” countries
    <!-- done -->
    Markers and notes should be saved in local application store 
    <!-- used vuex -->
Please:
    Use Vue.js 
    <!-- done -->
    You can use existing design framework if you want
    <!-- tested vuetify -->
    Use Webpack
    <!-- used vue-cli instead -->
    Consider possibility to make PWA in the future
    <!-- focused on app to have side-navigation common in, tested with: iPhone x/6/7/8, pixel 2/2 xl  -->
    Document project - how to run project and work with it in the future
    <!-- this document does this -->
    Avoid using over-complex solutions and boilerplate code
    <!-- used vue-cli to generate project structure,  -->

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
