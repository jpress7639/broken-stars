# Broken Stars
Broken Stars 

# PROJECT 4 README <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

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
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

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
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._   |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ App.js
      |__ MainMenu.jsx
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
          |__AddSymptoms.jsx
          |__EditStory.jsx
|__ services/
      |__ ApiHelper.js
      |__ stories.js
      |__ symptoms.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App    | functional |   n   |   y   | _The App will contain the route paths for each of the component screens._  |
|  MainMenu  | functional |   n   |   y   | The MainMenu will navigation to direct the user to a mental health disorder or story of an artist._  |
|   Layout    |   functional    |   n   |   y   | _The layout will contain the general layout for each page of the app._      |
| Header  | functional |   n   |   n   | _The header will have the logo of the app with a direct link returning one to the MainMenu_                 |
|    View Story    | functional |   y   |   y   | _The view story page will go through an an entire set from the data, viewing the artist and their story with a certain mental health disorder. It will be used in a slide presentation mode._ |
| Edit Story  | functional |   y   |   y   |    _The edit story component will be where the user may edit or delete the story altogether_                 |
| Add Symptoms | functional | y    |   y    |     _This component will give the user ability to add any symptoms onto a certain disorder_                   |
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

[https://app.diagrams.net/#G15RjMsnQrM-A0pLUjIN2alwGlY85jWyR8]

<br>

***

## Post-MVP

- Animation using paintings segments as the focus on the background 
- Creating a user into the database, so they can keep track of the artists that they relate to the most 



***
