"use strict";

var Projects = React.createClass({
  displayName: "Projects",

  getInitialState: function getInitialState() {
    return {
      data: [{
        title: "D3.js",
        description: "Examples using D3.js to present data effectively. The graph to the left offers an example of D3's force graph layout, where patterns in data can be readily identified. The latter tracks the USA's GDP over the last 65 years.",
        imageLeft: "img/screen/d3force.png",
        imageRight: "img/screen/d3bar.png",
        imageLeftLink: "http://codepen.io/AndrewGHC/pen/mPXjKr",
        imageRightLink: "http://codepen.io/AndrewGHC/pen/QNOKbe"
      }, {
        title: "jQuery & React",
        description: "With the left example providing instant search on Wikipedia, the other is an app built with react allowing recipes to be stored in local storage. Both use Bootstrap 3.",
        imageLeft: "img/screen/jssearch.png",
        imageRight: "img/screen/reactrecipe.png",
        imageLeftLink: "http://codepen.io/AndrewGHC/pen/YymzJm",
        imageRightLink: "http://codepen.io/AndrewGHC/pen/grgWgZ"
      }, {
        title: "Microservice APIs",
        description: "Both of these apps use Node.js and the Express framework to provide an API. The first takes a search parameter, alongside an optional pagination parameter, and returns image data scraped from Google Images. The second accepts a URL and provides a shortened redirectable link, in a similar manner to sites such as bit.ly.",
        imageLeft: "img/screen/apiimage.png",
        imageRight: "img/screen/apiurl.png",
        imageLeftLink: "https://github.com/AndrewGHC/Image-Search-Abstraction-Layer",
        imageRightLink: "https://github.com/AndrewGHC/URL-Shortener-Microservice"
      }]
    };
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      this.state.data.map(function (d) {
        return React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "slide" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-xs-6" },
                React.createElement(
                  "a",
                  { href: d.imageLeftLink, target: "_blank" },
                  React.createElement("img", { className: "project-img img-responsive", src: d.imageLeft, alt: "" })
                )
              ),
              React.createElement(
                "div",
                { className: "col-xs-6" },
                React.createElement(
                  "a",
                  { href: d.imageRightLink, target: "_blank" },
                  React.createElement("img", { className: "project-img img-responsive", src: d.imageRight, alt: "" })
                )
              )
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "project-text" },
                React.createElement(
                  "h4",
                  null,
                  React.createElement(
                    "strong",
                    null,
                    d.title
                  )
                ),
                React.createElement(
                  "p",
                  { className: "col-xs-8 col-xs-offset-2" },
                  d.description
                )
              )
            )
          )
        );
      }, this)
    );
  }
});

ReactDOM.render(React.createElement(Projects, null), document.getElementById('projects'));
