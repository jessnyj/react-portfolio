# react-portfolio

![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
* [Title](#title)
* [Deployed Link](#deployed-link)
* [Site Picture](#site-gif)
* [Technologies Used](#technologies-used)
* [Description](#description)
* [Work Involved](#work-involved)
* [Code Snippet](#code-snippet)
* [License](#license)
* [Authors](#authors)
* [Questions](#questions)
* [Acknowledgments](#acknowledgments)

## Deployed Link
* Click this link to view the site.
[Deployed Link](https://react-portfolio29.herokuapp.com/)

## Site Gif
![Site]()

## Technologies Used
* React
* animate.css
* javascript
* formspree
* bulma
* CSS
* HTML
* Github
* Heroku

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
* [Github](https://github.com/jessnyj)
* [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

## Acknowledgments
Trilogy Education Services

