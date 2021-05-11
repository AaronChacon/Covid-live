import { Component, OnInit, Inject, NgZone, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-map-bubbles',
  templateUrl: './map-bubbles.component.html',
  styleUrls: ['./map-bubbles.component.scss']
})
export class MapBubblesComponent implements OnInit {

  @Input() mapValue:any;
  private chart: am4maps.MapChart;
  

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) { }

  ngOnInit(): void {
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv", am4maps.MapChart);

      let mapData = this.mapValue; 

      // Set map definition
      chart.geodata = am4geodata_worldLow;

      // Set projection
      chart.projection = new am4maps.projections.Miller();

      // Create map polygon series
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.exclude = ["AQ"];
      polygonSeries.useGeodata = true;
      polygonSeries.nonScalingStroke = true;
      polygonSeries.strokeWidth = 0.5;
      polygonSeries.calculateVisualCenter = true;

      let imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.data = mapData;
      imageSeries.dataFields.value = "value";

      let imageTemplate = imageSeries.mapImages.template;
      imageTemplate.nonScaling = true

      let circle = imageTemplate.createChild(am4core.Circle);
      circle.fillOpacity = 0.45;
      circle.propertyFields.fill = "color";
      circle.tooltipText = "{name}: [bold]{value}[/]";


      imageSeries.heatRules.push({
        "target": circle,
        "property": "radius",
        "min": 5,
        "max": 50,
        "dataField": "value"
      })

      imageTemplate.adapter.add("latitude", function(latitude, target: any) {
        let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
        if(polygon){
          return polygon.visualLatitude;
        }
        return latitude;
      })

      imageTemplate.adapter.add("longitude", function(longitude, target: any) {
        let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
        if(polygon){
          return polygon.visualLongitude;
        }
        return longitude;
      })


      
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  

}
