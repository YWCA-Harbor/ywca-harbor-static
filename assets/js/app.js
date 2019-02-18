var today = new Date();
var matrix = {};
matrix[today.getFullYear()] = {};
matrix[today.getFullYear()][today.getMonth()] = {
    "5": [{
        displayname: "You can't miss this event",
    }],
    "12": [{
            displayname: "A very important meeting",
            at: new Date(today.getFullYear(), today.getMonth(), 12, 15, 30).getTime()
        },
        {
            displayname: "A somewhat important 2 hours meeting",
            at: new Date(today.getFullYear(), today.getMonth(), 12, 17, 30).getTime(),
            duration: 1000 * 60 * 60 * 2
        },
        {
            displayname: "This meeting is so important it's red",
            at: new Date(today.getFullYear(), today.getMonth(), 12, 21, 55).toString()
        }
    ],
    "15": [{
            displayname: "Something else to do here",
            at: new Date(0, 0, 0, 9, 30).toString()
        },
        {
            displayname: "Similar event",
            at: new Date(0, 0, 0, 9, 50).toString(),
            duration: 1000 * 60 * 10,
        }
    ],
    "16": [{
        displayname: "Something to do here"
    }],
    "17": [{
        at: new Date(0, 0, 0, 10, 25).getTime()
    }],
    "26": [{
        displayname: "An event by the end of the month",
        at: new Date(0, 0, 0, 9)
    }],
    "27": [{
        displayname: "Short monthly recap meeting",
        at: new Date(0, 0, 0, 15, 30),
        duration: 1000 * 60 * 30
    }]
};

var elem = document.getElementById("myCalendar");
var calendar = new JSCalendar(elem, {
    eventBackground: "rgb(250, 70, 22)"
});

calendar.on("dragging", function (calendar, extra) {
    var myURI = extra.position + '\/' + encodeURIComponent(extra.displayname.replace(/ /g, ''));
    window.location += myURI;
});

calendar
    .init()
    .setMatrix(matrix)
    .render();