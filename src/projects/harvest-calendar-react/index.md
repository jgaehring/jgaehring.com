---
title: "Harvest Calendar Generator"
path: "/harvest-calendar-react"
date: "2018-09-06"
cover: "./screenshot.png"
thumb: "./thumnail.png"
---

For small farms and local farmers markets, a harvest calendar can be an effective marketing visualization. It shows customers when their favorite fruits and vegetables will be in season, or it can simply be used to browse what is currently available. However, for highly diversified farms and markets, with specialized growing practices and storage techniques, the harvest window and season of availability can vary tremendously between farmers, and vary year to year based on changes to one's crop plan. Those differences can be precisely what give those farms their competitive edge, and so those differences should be reflected in marketing materials.

This project started out as an effort to generate a customized harvest calendar for Norwich Meadows Farm ([preview](https://jgaehring.com/harvest-calendar)), by importing a specially formatted CSV file directly into the farm's website for display. While that method worked well for one farm, I wanted to create a more generic solution which would be accessible to other farmers and market organizers.

The current implementation is a work in progress, but the goal is for the user to be able to create their own harvest calendars according to their own particular crop plan. The calendars will be generated and exported in SVG format. Some other useful export formats would be PNG, or as embed code for a website.

## Development Notes
While it borrows ideas from the original project, which was written with [D3](https://d3js.org/), this is a complete rewrite, replacing all of D3's data visualization logic with pure [React](https://reactjs.org/). This reimplementation is not as complicated as it sounds, and in fact simplifies a lot of the data manipulation, particularly where data is bound to the input fields. While D3 is quite useful and declarative when dealing with static datasets, it starts to feel very imperative when you have a constantly changing dataset, as determined by the user. This, of course, is where React truly excels, by moving that dataset to the component state, and updating the DOM as a function of that state. The rest of the declarative nature of D3's rendering API's can easily be replicated with React's render methods.