# Broken Stars
Broken Stars 

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)

<br>

## Overview

_**Broken Stars** is a resource for people to find insights on certain mental disorders that they can then eventually seek out the help they need. A artist can also be a user with the ability to add their own story of mental health to the list and share resources that have helped them.


<br>

## MVP

The **Broken Stars** MVP will consist of:
- a working back-end database using Ruby on Rails and SQL with three different tables (symptoms, mental disorders(joining), and artists) that will be rendered to the front-end and will be able to have functional CRUD 
- a React front-end app with eight functional/class components that will showcase artist's stories with mental illnesses along with the rescources they used to overcome them 



<br>

### Goals

- To be able to effectively give mental health resources through storytelling from artists.
- To provide ease and functionality for a user to effectively receive the knowledge they need. 
- To allow users to add their own stories, edit, and delete their own stories.

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                  |
| :--------------: | :-----------------------------------------   |
|      React       | to serve as the front end for the project    |
|   React Router   | to implement links to each page and for CRUD |
|     Rails        |  To provide support to the database.         |
|     Axios        | To be able to make calls from the backend to the frontend    |
|     Rack Cors    | To making AJAX Cross Sharing Able           |
|     Ruby      | The language used to develop the back-end  |


<br>

### Client (Front End)

#### Wireframes

https://wireframepro.mockflow.com/view/Mac049ca95b55e404cfcc572d6e79357d1597065568717


#### Component Tree

https://drive.google.com/file/d/14LKB4AAhKwI-FiQ8imYJ5X0wgGhPvGqO/view?usp=sharing

#### Component Hierarchy


``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ App.js
      |__ Main.jsx
      |__ Home.jsx
      |__ Disclaimer.jsx
      |__ Layout
          |__Layout.jsx
          |__Layout.css
          |__ Header.jsx
          |__ Header.css
          |__ Footer.jsx
          |__ Footer.css
      |__ Story
          |__ViewStory.jsx
          |__AddStory.jsx
          |__AddResources.jsx
          |__EditStory.jsx
          |__Add Symptoms.jsx
|__ services/
      |__ ApiHelper.js
      |__ artists.js
      |__ symptoms.js
      |__ resources.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App    | functional |   n   |   y   | _To host the app and be rendered into the HTML._  |
|   Home     | class      |   y    |   y    | _The home page will map the different stories for each user to perform CRUD._ |
|  Main      | functional |   n   |   y   | _The MainMenu will navigation to direct the user to a mental health disorder or story of an artist._  |
|   Layout    |   functional    |   n   |   y   | _The layout will contain the general layout for each page of the app._      |
| Header  | functional |   n   |   n   | _The header will have the logo of the app with a direct link returning one to the MainMenu_                 |
|    View Story    | functional |   y   |   y   | _The view story page will go through an an entire set from the data, viewing the artist and their story with a certain mental health disorder. It will be used in a slide presentation mode._ |
| Edit Story  | functional |   y   |   y   |    _The edit story component will be where the user may edit or delete the story altogether_                 |
| Add Resources | functional | y    |   y    |     _This component will give the user ability to add or delete any resources onto a certain disorder_                   |
| Add Symptoms | functional |  y   |   y     | _This component will give the user access to updating symptoms to a story before the finish creating it._ |
| Footer   |   functional   | n    |  y     |  _This component will be where the resource will be displayed                                       |
| Disclaimer | class        |  n    |   n    | _Mainly just a disclaimer about if the user is experiencing more dire symptoms to call emergency services_ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Constructing Rails Data (Creating Models, Migrating, Controllers)|    H     |     3 hrs      |        |    TBD    |
| Create CRUD Actions Back End |    H     |     2 hrs      |        |     TBD     |
| Rendering Data to React |     H    |    3 hrs    |       |     TBD     |
| Constructing Viewing Functionality | M  |  2 hrs |       |    TBD     |
| CRUD Functionality in React | H    | 4 hrs    |      |      TBD    |
| Implementing State and Props Through Components | H  | 4 hrs |     |   TBD   |
| Routing through React |   M    |  3 hrs      |      |     TBD      |
| Structuring React Components |    H    |    5 hrs    |         |     TBD     |
| Basic CSS Styling | M | 2 hrs |      |     TBD     |
| Media Queries (Phone, Tablet, Computer)  |   M  |  2 hrs |      |  TBD      |
| TOTAL               |          |     30 hrs      |       |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[https://drive.google.com/file/d/15RjMsnQrM-A0pLUjIN2alwGlY85jWyR8/view?usp=sharing]

<br>

***

## Post-MVP

- Animation using paintings segments as the focus on the background 
- Creating a user into the database, so they can keep track of the artists that they relate to the most 



***
