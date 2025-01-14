# "Gatling Grimoire" Website

**By Cezar Petreanu**

Multimedia Interaction Technologies class, Internet Technologies - taught in English. UNITBv, 2025.

# Purpose of this site

The purpose of this website is to promote an upcoming tabletop fantasy game created by myself.

The website contains general information about the game, including rules and bits of story, and a download link to the "Gatling Grimoire: Demo Rulebook" PDF.

People interested in the game can keep in touch with the development's progress and send their feedback on the contact page.

# Specifications

The structure and specifications of this project 

## General structure

**5 interconnected pages**: "Home", "The Grimoire", "How to Play", "Download", "Contact".
- **Home**: The landing page of the website. Contains a large title banner, a short description of the game and three links to points of interest: "The Grimoire", "How to Play", "Download".
- **The Grimoire**: Presents information about some core concepts and the required supplies to run the game.
- **How to play**: A step by step guide on setting up the game and quick rules presented alongside an image slide-show.
- **Download**: Users can download the "Gatling Grimoire: Demo Rulebook" PDF from here.
- **Contact**: Social media links and an email form for feedback.

All pages are interconnected through a **navigation bar** at the top of the website.

## Core web techonogies
HTML, CSS, TypeScript files are separated.
- **HTML**: Correct use of semantic tags (header, footer, main, section, article, nav, etc.)
- **CSS**: Besides basic styling including advenced selector styling (e.g. hover), pages contain responsive styling based on window size:

```
/* Example CSS code snippet for windows smaller than a set width.*/
@media (max-width: 1100px) {
    .section-2 {
        justify-content: flex-start; 
        padding: 0 10px;
    }

    .section-2 .content {
        text-align: left;
    }
}
```

- **Interactivity (TypeScript)**: Simple functionalities such as image and text changes (e.g. slide shows, check ```the-grimoire-page.component.ts```). Utility function to return to the top of the page on a link change.

## Connection with an external API
- **[Google Fonts](https://developers.google.com/fonts/docs/material_icons)**: used by the Angular framework to include icons.
- **[FormSubmit](https://formsubmit.co/)**: API for sending emails with informaton provided by a form.

## Additional criteria
- **[Angular v19](https://angular.dev/)**: Front-end framework used for developing **single-page web applications**. Angular also includes a library of pre-made web components (**[Angular Material](https://material.angular.io/)**).
- **[Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)**: hosting service for static websites.

## Testing and optimizations
- Angular is a framework used to create [single-page web applications](https://angular.dev/guide/routing/router-tutorial).
> In a Single Page Application (SPA), all of your application's functions exist in a single HTML page. As users access your application's features, the browser needs to render only the parts that matter to the user, instead of loading a new page. This pattern can significantly improve your application's user experience. (https://angular.dev/guide/routing/router-tutorial)

# Running instructions

The website is **hosted on GitHub Pages** and can be accessed here: https://cezarpetreanu.github.io/gatling-grimoire-site/home

To **run locally**:
1. Set up the environment for Angular: https://angular.dev/tools/cli/setup-local 
2. Clone the repository: ```git clone https://github.com/CezarPetreanu/gatling-grimoire-site.git```
3. Inside the project folder (```gatling-grimoire-site```), run ```ng serve -o```

# References used

## Documentation

- **Angular Material**: https://material.angular.io/
- **Angular v19 (Setting up the local environment and workspace)**: https://angular.dev/tools/cli/setup-local
- **Angular v19 (Using Angular routes in a single-page application)**: https://angular.dev/guide/routing/router-tutorial
- **FormSubmit**: https://formsubmit.co/
- **Google Fonts**: https://developers.google.com/fonts/docs/material_icons

## Images
Images included in the website are either creted by myself or have a **Creative Commons Zero licence** (https://creativecommons.org/publicdomain/zero/1.0/deed.en).
