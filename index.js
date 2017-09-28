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
        this.last30Sort = this.last30Sort.bind(this);
        this.allTimeSort = this.allTimeSort.bind(this);
      }

      last30Sort() {
        this.setState({ input: last30Arr });
        document.getElementById("stickle").innerHTML = "Points in last 30 days &#9660";
        document.getElementById("jarpFish").innerHTML = "All time points";
      }
      allTimeSort() {
        this.setState({ input: allTimeArr });
        document.getElementById("stickle").innerHTML = "Points in last 30 days";
        document.getElementById("jarpFish").innerHTML = "All time points &#9660";
      }
      render() {
        {/*In search of a way to not have to write out the whole HTML table and variables.
           This works except for a way to call fucntions and resort the table from the head of the
           table.
          {
           var tableHtml = "<table><thead><tr><th>#</th><th>Camper Name</th><th>Points in last 30 days</th><th>All time points</th></tr></thead><tbody>";
           for (var i = 0; i < this.state.input.length; i++) {
             tableHtml += "<tr><th scope='row'>" + (i + 1) + "</th><td>" + this.state.input[i].username + "</td><td>" + this.state.input[i].recent + "</td><td>" + this.state.input[i].alltime + "</td></tr>"
           }
           tableHtml += "</tbody></table>";
           document.getElementById("burgleSnap").innerHTML = tableHtml
          }
          */
        }
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "table",
              { className: "table table-striped table-inverse" },
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
                    { id: "stickle", onClick: this.last30Sort },
                    "Points in last 30 days \u25BC"
                  ),
                  React.createElement(
                    "th",
                    { id: "jarpFish", onClick: this.allTimeSort },
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
                    null,
                    this.state.input[0].username
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Otto"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "@mdo"
                  )
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
                    this.state.input[1].username
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