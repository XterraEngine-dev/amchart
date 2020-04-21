

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartGeneroDefault", am4charts.XYChart);
chart.colors.saturation = 0.4;

chart.data = [{
  "genero": "MUJERES",
  "conteo": 150,
  "color": am4core.color("#FF4A6E")
}, {
  "genero": "HOMBRES",
  "conteo": 130,
  "color": am4core.color("#30ACEA")
}, {
  "genero": "ND",
  "conteo": 5,
  "color": am4core.color("#F0C755")
}]


var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "genero";
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.minWidth = 120;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.maxLabelPosition = 0.98;  

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "genero";
series.dataFields.valueX = "conteo";
series.tooltipText = "{valueX.value}";
series.sequencedInterpolation = true;
series.defaultState.transitionDuration = 1000;
series.sequencedInterpolationDelay = 100;
series.columns.template.strokeOpacity = 0;
series.columns.template.background.fillOpacity = 0.9;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

series.columns.template.adapter.add("fill", function(fill, target) {
  var pattern = new am4core.LinePattern();
  
  

  pattern.stroke = target.dataItem.dataContext.color;
  
  return pattern;
});

series.columns.template.background.adapter.add("fill", function(fill, target) {
  return target.dataItem ? target.dataItem.dataContext.color : fill;
});