var last30 = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
var allTime = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
var last30Arr = [];
var allTimeArr = [];

$(document).ready(function () {
  $.getJSON(last30, function (object) {
    last30Arr = object;

    $.getJSON(allTime, function (object2) {
      allTimeArr = object2;
    });
    class LeaderBoard extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          input: last30Arr
        };
        this.test1 = this.test1.bind(this);
        this.test2 = this.test2.bind(this);
      }

      test1() {
        this.setState({ input: last30Arr });
      }
      test2() {
        this.setState({ input: allTimeArr });
      }
      render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "button",
            { onClick: this.test1 },
            "test"
          ),
          React.createElement(
            "button",
            { onClick: this.test2 },
            "test2"
          ),
          React.createElement(
            "div",
            { "class": "container" },
            React.createElement(
              "table",
              { "class": "table table-striped table-inverse" },
              React.createElement(
                "thead",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    null,
                    "#"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "Camper Name"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "Points in last 30 days"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "All time points"
                  )
                )
              ),
              React.createElement(
                "tbody",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    { scope: "row" },
                    "1"
                  ),
                  React.createElement(
                    "td",
                    { id: "user-1" },
                    this.state.input[1].username
                  ),
                  React.createElement("td", { id: "last30-1" }),
                  React.createElement("td", { id: "allTime-1" })
                ),
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    { scope: "row" },
                    "2"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Jacob"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Thornton"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "@fat"
                  )
                ),
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    { scope: "row" },
                    "3"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Larry"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "the Bird"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "@twitter"
                  )
                )
              )
            )
          )
        );
      }
    }
    ReactDOM.render(React.createElement(LeaderBoard, null), document.getElementById("leaderTable"));
  });
});