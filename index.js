Chart.register(ChartDataLabels);

Chart.defaults.set("plugins.tooltip", {
    enabled: false
});

Chart.defaults.set("plugins.legend", {
    display: false
});

Chart.defaults.set("plugins.title", {
    display: true,
    font: {
        size: 24,
        weight: "bold"
    }
});

Chart.defaults.set("plugins.datalabels", {
    color: "#FFF",
    font: {
        size: 14,
        weight: "bold"
    }
});

for (let year in data) {
    let button = document.createElement("div");
    button.innerHTML = year;
    button.className = 'button';
    button.setAttribute('data-value', year);
    button.addEventListener('click', function() {
        const yearValue = this.attributes.getNamedItem('data-value').value;
        let divsToHide = document.querySelectorAll('[data-year]:not([data-year="' + yearValue + '"])');
        let divsToShow = document.querySelectorAll('[data-year="'+ yearValue +'"]');

        divsToHide.forEach(function (div) {
            div.classList.add('hidden');
        });
        divsToShow.forEach(function (div) {
            div.classList.remove('hidden');
        });
    });
    document.querySelector('#buttons').appendChild(button);


    let playerTotal = {};
    let months = data[year];

    for (let month in months) {
        let players = months[month];

        let canvas = document.createElement("canvas");
        canvas.id = "canvas-" + month + "-" + year;
        let div = document.createElement("div");
        div.id = "div-" + month + "-" + year;
        div.setAttribute('data-year', year);
        div.className = "pie";
        if (year != (new Date().getFullYear())) {
            div.classList.add('hidden');
        }
        document.body.appendChild(div);
        document.getElementById(div.id).appendChild(canvas);

        for (let player in players) {
            if (player in playerTotal) {
                playerTotal[player] = playerTotal[player] + players[player];
            } else {
                playerTotal[player] = players[player];
            }
        }

        let ctx = document.getElementById(canvas.id).getContext("2d");
        let chart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: Object.keys(players),
                datasets: [
                    {
                        label: month + " " + year,
                        data: Object.values(players),
                        backgroundColor: getColor(players)
                    }
                ]
            },
            options: {
                plugins: {
                    datalabels: {
                        formatter: function (value, context) {
                            return (
                                context.chart.legend.legendItems[
                                    context.dataIndex
                                    ].text +
                                ": " +
                                value
                            );
                        }
                    },
                    title: {
                        text: translateMonth(month) + " " + year
                    }
                }
            }
        });
    }

    playerTotal = sortHighest(playerTotal);

    let canvas = document.createElement("canvas");
    canvas.id = "canvas-" + year;
    canvas.className = "bar";
    let div = document.createElement("div");
    div.id = "div-" + year;
    div.className = "bar";
    if (year != (new Date().getFullYear())) {
        div.classList.add('hidden');
    }
    div.setAttribute('data-year', year);
    document.body.appendChild(div);
    document.getElementById(div.id).appendChild(canvas);

    let ctx = document.getElementById(canvas.id).getContext("2d");
    let chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(playerTotal),
            datasets: [
                {
                    label: "Kruipkoning " + year,
                    data: Object.values(playerTotal),
                    backgroundColor: getColor(playerTotal),
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                    },
                },
            },
            plugins: {
                title: {
                    text: "Kruipkoning " + year,
                },
            },
        },
    });
}

function getColor(players) {
    var values = [];

    for (player in players) {
        values.push(colors[player]);
    }

    return values;
}

function sortHighest(playerScores) {
    return Object.keys(playerScores)
        .sort((a, b) => (playerScores[a] > playerScores[b] ? 1 : -1))
        .reduce((a, b) => {
            a[b] = playerScores[b];
            return a;
        }, {}); // sorteren https://stackoverflow.com/a/62818764
}

const sortObject = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {});

function translateMonth(month) {
    var months = {
        01: "januari",
        02: "februari",
        03: "maart",
        04: "april",
        05: "mei",
        06: "juni",
        07: "juli",
        08: "augustus",
        09: "september",
        10: "oktober",
        11: "november",
        12: "december",
        weigeraars: "Kruipweigeraars",
};

    return months[month];
}
