# react-portfolio

![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
||||
|:-:|:-:|:-:|
|[Table of Contents](#table-of-contents)|[Deployed Link](#deployed-link)|[Technologies Used](#technologies-used)
|[Description](#description)|[Work Involved](#work-involved)|[Code Snippet](#code-snippet)
|[License](#license)|[Authors](#authors)|[Acknowledgments](#acknowledgments)

## Deployed Link
[Deployed Link](https://react-portfolio29.herokuapp.com/)

## Site Gif
![Site](src/images/reactfolio.gif)

## Technologies Used
|||||
|:-:|:-:|:-:|:-:|
|React|Animate.css|Formspree|Bulma|
|CSS|Javascript|HTML|Github
|Heroku|Express|Node|

## Description
This is a React portfolio that includes my top 6 projects, an about me page, and contact me.

## Work Involved
For this portfolio, I utilized React and bulma in order to design the website. I utilized animate.css for all effects, and formspree for the contact me page.

## Code Snippet
* This code snippet highlights how I was able to get my animations on my home page to work.
```
class Home extends Component {
    componentDidMount() {
        setTimeout(function() {
            var element = document.getElementById("desc");
            element.style.visibility = "visible";
            element.classList.add("animate__animated", "animate__fadeInDown")
        }, 1000);
    }
```

## License
This project is covered under MIT.

## Authors
**Jessny Joseph** 

## Questions 
[Github](https://github.com/jessnyj) | [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

## Acknowledgments
Thankful for the mentors and friends who are a continuous source of project inspiration and learning opportunities.

