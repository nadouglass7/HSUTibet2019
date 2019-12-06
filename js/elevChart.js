window.onload = function () {
    
    var chart = new CanvasJS.Chart("chartContainer", {
        backgroundColor: "#f8f9fa",
        animationEnabled: true,
        // Boolean - whether or not the chart should be responsive and resize when the browser does.
	  // responsive: true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: false,
        title: {
            text: "Elevation Profile",
            fontFamily: "arial",
        },
        toolTip:{             
  	  	  content: "{indexData}: {y}"
		  },
        axisX: {
            title: "Date",
            minimum: new Date(2019, 05, 28),
            maximum: new Date(2019, 07, 07),
            valueFormatString: "MMM DD",
        },
        axisY: {
            title: "Elevation ft",
            titleFontColor: "#495057",
            suffix: " ft",
            maximum: 20000
        },
        data: [{
        	  indexLabelFontWeight: "bold",
            indexLabelFontColor: "#495057",
            indexLabelPlacement: "outside",
            name: "views",
            type: "area",
            yValueFormatString: "#,##0.0 ft",
            color: "#991bc6",
            lineColor:"#991bc6",
            fillOpacity: .3,
            dataPoints: [
            	   // indexLabel: "Highest", markerColor: "red" 
                { x: new Date(2019, 05, 28), y: 164.042, indexLabel: "Beijing", indexData: "Beijing"  },
                { x: new Date(2019, 06, 01), y: 1676.50924, indexData: "Chengdu"  },
                { x: new Date(2019, 06, 02), y: 8205.38084, indexData: "Dartsendo"  },
                { x: new Date(2019, 06, 03), y: 13061.02404, indexData: "Lithang"  },
                { x: new Date(2019, 06, 05), y: 13346.45712, indexData: "Mount Genyen", indexLabel: "Mount Genyen" },
                { x: new Date(2019, 06, 05), y: 12401.5752, indexData: "Rarikawa"  },
                { x: new Date(2019, 06, 08), y: 12851.05028, indexData: "Yading Nature Reserve"  },
                { x: new Date(2019, 06, 11), y: 8461.28636, indexData: "Bathang"  },
                { x: new Date(2019, 06, 13), y: 10026.24704, indexData: "Nyarong"  },
                { x: new Date(2019, 06, 14), y: 11053.14996, indexData: "Gandze"  },
                { x: new Date(2019, 06, 15), y: 10777.5594, indexData: "Derge"  },
                { x: new Date(2019, 06, 15), y: 11624.01612, indexData: "Dzongsar Monastery"  },
                { x: new Date(2019, 06, 16), y: 12933.07128, indexData: "Dzogchen"  },
                { x: new Date(2019, 06, 17), y: 13713.9112, indexData: "Sershul"  },
                { x: new Date(2019, 06, 18), y: 12040.6828, indexData: "Jyekundo"  },
                { x: new Date(2019, 06, 19), y: 12198.16312, indexData: "Maqen"  },
                { x: new Date(2019, 06, 20), y: 8182.41496, indexData: "Repkong"  },
                { x: new Date(2019, 06, 23), y: 7385.17084, indexData: "Xining"  },
                { x: new Date(2019, 06, 25), y: 14786.74588, indexData: "Nakchu"  },
                { x: new Date(2019, 06, 26), y: 13943.57, indexData: "Reting"  },
                { x: new Date(2019, 06, 27), y: 14553.80624, indexData: "Drigung"  },
                { x: new Date(2019, 06, 28), y: 9803.14992, indexData: "Baji"  },
                { x: new Date(2019, 06, 28), y: 9642.38876, indexData: "Milin"  },
                { x: new Date(2019, 06, 29), y: 11751.96888, indexData: "Samye"  },
                { x: new Date(2019, 07, 06), y: 11991.4702, indexLabel: "Lhasa", indexData: "Lhasa"  },
            ]
        }]
    });
    chart.render();
    
}
