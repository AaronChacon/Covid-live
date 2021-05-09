import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
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

     /*  let title = chart.titles.create();
      title.text = "[bold font-size: 20]Population of the World in 2011[/]\nsource: Gapminder";
      title.textAlign = "middle"; */

      let mapData = [
        { "id":"AF", "name":"Afghanistan", "value":32358260, "color": "#FF3E29" },
        { "id":"AL", "name":"Albania", "value":3215988, "color":"#FF3E29" },
        { "id":"DZ", "name":"Algeria", "value":35980193, "color":"#FF3E29" },
        { "id":"AO", "name":"Angola", "value":19618432, "color":"#FF3E29" },
        { "id":"AR", "name":"Argentina", "value":40764561, "color":"#FF3E29" },
        { "id":"AM", "name":"Armenia", "value":3100236, "color":"#FF3E29" },
        { "id":"AU", "name":"Australia", "value":22605732, "color":"#FF3E29" },
        { "id":"AT", "name":"Austria", "value":8413429, "color":"#FF3E29" },
        { "id":"AZ", "name":"Azerbaijan", "value":9306023, "color":"#FF3E29" },
        { "id":"BH", "name":"Bahrain", "value":1323535, "color": "#FF3E29" },
        { "id":"BD", "name":"Bangladesh", "value":150493658, "color": "#FF3E29" },
        { "id":"BY", "name":"Belarus", "value":9559441, "color":"#FF3E29" },
        { "id":"BE", "name":"Belgium", "value":10754056, "color":"#FF3E29" },
        { "id":"BJ", "name":"Benin", "value":9099922, "color":"#FF3E29" },
        { "id":"BT", "name":"Bhutan", "value":738267, "color": "#FF3E29" },
        { "id":"BO", "name":"Bolivia", "value":10088108, "color":"#FF3E29" },
        { "id":"BA", "name":"Bosnia and Herzegovina", "value":3752228, "color":"#FF3E29" },
        { "id":"BW", "name":"Botswana", "value":2030738, "color":"#FF3E29" },
        { "id":"BR", "name":"Brazil", "value":196655014, "color":"#FF3E29" },
        { "id":"BN", "name":"Brunei", "value":405938, "color": "#FF3E29" },
        { "id":"BG", "name":"Bulgaria", "value":7446135, "color":"#FF3E29" },
        { "id":"BF", "name":"Burkina Faso", "value":16967845, "color":"#FF3E29" },
        { "id":"BI", "name":"Burundi", "value":8575172, "color":"#FF3E29" },
        { "id":"KH", "name":"Cambodia", "value":14305183, "color": "#FF3E29" },
        { "id":"CM", "name":"Cameroon", "value":20030362, "color":"#FF3E29" },
        { "id":"CA", "name":"Canada", "value":34349561, "color":"#FF3E29" },
        { "id":"CV", "name":"Cape Verde", "value":500585, "color":"#FF3E29" },
        { "id":"CF", "name":"Central African Rep.", "value":4486837, "color":"#FF3E29" },
        { "id":"TD", "name":"Chad", "value":11525496, "color":"#FF3E29" },
        { "id":"CL", "name":"Chile", "value":17269525, "color":"#FF3E29" },
        { "id":"CN", "name":"China", "value":1347565324, "color": "#FF3E29" },
        { "id":"CO", "name":"Colombia", "value":46927125, "color":"#FF3E29" },
        { "id":"KM", "name":"Comoros", "value":753943, "color":"#FF3E29" },
        { "id":"CD", "name":"Congo, Dem. Rep.", "value":67757577, "color":"#FF3E29" },
        { "id":"CG", "name":"Congo, Rep.", "value":4139748, "color":"#FF3E29" },
        { "id":"CR", "name":"Costa Rica", "value":4726575, "color":"#FF3E29" },
        { "id":"CI", "name":"Cote d'Ivoire", "value":20152894, "color":"#FF3E29" },
        { "id":"HR", "name":"Croatia", "value":4395560, "color":"#FF3E29" },
        { "id":"CU", "name":"Cuba", "value":11253665, "color":"#FF3E29" },
        { "id":"CY", "name":"Cyprus", "value":1116564, "color":"#FF3E29" },
        { "id":"CZ", "name":"Czech Rep.", "value":10534293, "color":"#FF3E29" },
        { "id":"DK", "name":"Denmark", "value":5572594, "color":"#FF3E29" },
        { "id":"DJ", "name":"Djibouti", "value":905564, "color":"#FF3E29" },
        { "id":"DO", "name":"Dominican Rep.", "value":10056181, "color":"#FF3E29" },
        { "id":"EC", "name":"Ecuador", "value":14666055, "color":"#FF3E29" },
        { "id":"EG", "name":"Egypt", "value":82536770, "color":"#FF3E29" },
        { "id":"SV", "name":"El Salvador", "value":6227491, "color":"#FF3E29" },
        { "id":"GQ", "name":"Equatorial Guinea", "value":720213, "color":"#FF3E29" },
        { "id":"ER", "name":"Eritrea", "value":5415280, "color":"#FF3E29" },
        { "id":"EE", "name":"Estonia", "value":1340537, "color":"#FF3E29" },
        { "id":"ET", "name":"Ethiopia", "value":84734262, "color":"#FF3E29" },
        { "id":"FJ", "name":"Fiji", "value":868406, "color":"#FF3E29" },
        { "id":"FI", "name":"Finland", "value":5384770, "color":"#FF3E29" },
        { "id":"FR", "name":"France", "value":63125894, "color":"#FF3E29" },
        { "id":"GA", "name":"Gabon", "value":1534262, "color":"#FF3E29" },
        { "id":"GM", "name":"Gambia", "value":1776103, "color":"#FF3E29" },
        { "id":"GE", "name":"Georgia", "value":4329026, "color":"#FF3E29" },
        { "id":"DE", "name":"Germany", "value":82162512, "color":"#FF3E29" },
        { "id":"GH", "name":"Ghana", "value":24965816, "color":"#FF3E29" },
        { "id":"GR", "name":"Greece", "value":11390031, "color":"#FF3E29" },
        { "id":"GT", "name":"Guatemala", "value":14757316, "color":"#FF3E29" },
        { "id":"GN", "name":"Guinea", "value":10221808, "color":"#FF3E29" },
        { "id":"GW", "name":"Guinea-Bissau", "value":1547061, "color":"#FF3E29" },
        { "id":"GY", "name":"Guyana", "value":756040, "color":"#FF3E29" },
        { "id":"HT", "name":"Haiti", "value":10123787, "color":"#FF3E29" },
        { "id":"HN", "name":"Honduras", "value":7754687, "color":"#FF3E29" },
        { "id":"HK", "name":"Hong Kong, China", "value":7122187, "color": "#FF3E29" },
        { "id":"HU", "name":"Hungary", "value":9966116, "color":"#FF3E29" },
        { "id":"IS", "name":"Iceland", "value":324366, "color":"#FF3E29" },
        { "id":"IN", "name":"India", "value":1241491960, "color": "#FF3E29" },
        { "id":"ID", "name":"Indonesia", "value":242325638, "color": "#FF3E29" },
        { "id":"IR", "name":"Iran", "value":74798599, "color": "#FF3E29" },
        { "id":"IQ", "name":"Iraq", "value":32664942, "color": "#FF3E29" },
        { "id":"IE", "name":"Ireland", "value":4525802, "color":"#FF3E29" },
        { "id":"IL", "name":"Israel", "value":7562194, "color": "#FF3E29" },
        { "id":"IT", "name":"Italy", "value":60788694, "color":"#FF3E29" },
        { "id":"JM", "name":"Jamaica", "value":2751273, "color":"#FF3E29" },
        { "id":"JP", "name":"Japan", "value":126497241, "color": "#FF3E29" },
        { "id":"JO", "name":"Jordan", "value":6330169, "color": "#FF3E29" },
        { "id":"KZ", "name":"Kazakhstan", "value":16206750, "color": "#FF3E29" },
        { "id":"KE", "name":"Kenya", "value":41609728, "color":"#FF3E29" },
        { "id":"KP", "name":"Korea, Dem. Rep.", "value":24451285, "color": "#FF3E29" },
        { "id":"KR", "name":"Korea, Rep.", "value":48391343, "color": "#FF3E29" },
        { "id":"KW", "name":"Kuwait", "value":2818042, "color": "#FF3E29" },
        { "id":"KG", "name":"Kyrgyzstan", "value":5392580, "color": "#FF3E29" },
        { "id":"LA", "name":"Laos", "value":6288037, "color": "#FF3E29" },
        { "id":"LV", "name":"Latvia", "value":2243142, "color":"#FF3E29" },
        { "id":"LB", "name":"Lebanon", "value":4259405, "color": "#FF3E29" },
        { "id":"LS", "name":"Lesotho", "value":2193843, "color":"#FF3E29" },
        { "id":"LR", "name":"Liberia", "value":4128572, "color":"#FF3E29" },
        { "id":"LY", "name":"Libya", "value":6422772, "color":"#FF3E29" },
        { "id":"LT", "name":"Lithuania", "value":3307481, "color":"#FF3E29" },
        { "id":"LU", "name":"Luxembourg", "value":515941, "color":"#FF3E29" },
        { "id":"MK", "name":"Macedonia, FYR", "value":2063893, "color":"#FF3E29" },
        { "id":"MG", "name":"Madagascar", "value":21315135, "color":"#FF3E29" },
        { "id":"MW", "name":"Malawi", "value":15380888, "color":"#FF3E29" },
        { "id":"MY", "name":"Malaysia", "value":28859154, "color": "#FF3E29" },
        { "id":"ML", "name":"Mali", "value":15839538, "color":"#FF3E29" },
        { "id":"MR", "name":"Mauritania", "value":3541540, "color":"#FF3E29" },
        { "id":"MU", "name":"Mauritius", "value":1306593, "color":"#FF3E29" },
        { "id":"MX", "name":"Mexico", "value":114793341, "color":"#FF3E29" },
        { "id":"MD", "name":"Moldova", "value":3544864, "color":"#FF3E29" },
        { "id":"MN", "name":"Mongolia", "value":2800114, "color": "#FF3E29" },
        { "id":"ME", "name":"Montenegro", "value":632261, "color":"#FF3E29" },
        { "id":"MA", "name":"Morocco", "value":32272974, "color":"#FF3E29" },
        { "id":"MZ", "name":"Mozambique", "value":23929708, "color":"#FF3E29" },
        { "id":"MM", "name":"Myanmar", "value":48336763, "color": "#FF3E29" },
        { "id":"NA", "name":"Namibia", "value":2324004, "color":"#FF3E29" },
        { "id":"NP", "name":"Nepal", "value":30485798, "color": "#FF3E29" },
        { "id":"NL", "name":"Netherlands", "value":16664746, "color":"#FF3E29" },
        { "id":"NZ", "name":"New Zealand", "value":4414509, "color":"#FF3E29" },
        { "id":"NI", "name":"Nicaragua", "value":5869859, "color":"#FF3E29" },
        { "id":"NE", "name":"Niger", "value":16068994, "color":"#FF3E29" },
        { "id":"NG", "name":"Nigeria", "value":162470737, "color":"#FF3E29" },
        { "id":"NO", "name":"Norway", "value":4924848, "color":"#FF3E29" },
        { "id":"OM", "name":"Oman", "value":2846145, "color": "#FF3E29" },
        { "id":"PK", "name":"Pakistan", "value":176745364, "color": "#FF3E29" },
        { "id":"PA", "name":"Panama", "value":3571185, "color":"#FF3E29" },
        { "id":"PG", "name":"Papua New Guinea", "value":7013829, "color":"#FF3E29" },
        { "id":"PY", "name":"Paraguay", "value":6568290, "color":"#FF3E29" },
        { "id":"PE", "name":"Peru", "value":29399817, "color":"#FF3E29" },
        { "id":"PH", "name":"Philippines", "value":94852030, "color": "#FF3E29" },
        { "id":"PL", "name":"Poland", "value":38298949, "color":"#FF3E29" },
        { "id":"PT", "name":"Portugal", "value":10689663, "color":"#FF3E29" },
        { "id":"PR", "name":"Puerto Rico", "value":3745526, "color":"#FF3E29" },
        { "id":"QA", "name":"Qatar", "value":1870041, "color": "#FF3E29" },
        { "id":"RO", "name":"Romania", "value":21436495, "color":"#FF3E29" },
        { "id":"RU", "name":"Russia", "value":142835555, "color":"#FF3E29" },
        { "id":"RW", "name":"Rwanda", "value":10942950, "color":"#FF3E29" },
        { "id":"SA", "name":"Saudi Arabia", "value":28082541, "color": "#FF3E29" },
        { "id":"SN", "name":"Senegal", "value":12767556, "color":"#FF3E29" },
        { "id":"RS", "name":"Serbia", "value":9853969, "color":"#FF3E29" },
        { "id":"SL", "name":"Sierra Leone", "value":5997486, "color":"#FF3E29" },
        { "id":"SG", "name":"Singapore", "value":5187933, "color": "#FF3E29" },
        { "id":"SK", "name":"Slovak Republic", "value":5471502, "color":"#FF3E29" },
        { "id":"SI", "name":"Slovenia", "value":2035012, "color":"#FF3E29" },
        { "id":"SB", "name":"Solomon Islands", "value":552267, "color":"#FF3E29" },
        { "id":"SO", "name":"Somalia", "value":9556873, "color":"#FF3E29" },
        { "id":"ZA", "name":"South Africa", "value":50459978, "color":"#FF3E29" },
        { "id":"ES", "name":"Spain", "value":46454895, "color":"#FF3E29" },
        { "id":"LK", "name":"Sri Lanka", "value":21045394, "color": "#FF3E29" },
        { "id":"SD", "name":"Sudan", "value":34735288, "color":"#FF3E29" },
        { "id":"SR", "name":"Suriname", "value":529419, "color":"#FF3E29" },
        { "id":"SZ", "name":"Swaziland", "value":1203330, "color":"#FF3E29" },
        { "id":"SE", "name":"Sweden", "value":9440747, "color":"#FF3E29" },
        { "id":"CH", "name":"Switzerland", "value":7701690, "color":"#FF3E29" },
        { "id":"SY", "name":"Syria", "value":20766037, "color": "#FF3E29" },
        { "id":"TW", "name":"Taiwan", "value":23072000, "color": "#FF3E29" },
        { "id":"TJ", "name":"Tajikistan", "value":6976958, "color": "#FF3E29" },
        { "id":"TZ", "name":"Tanzania", "value":46218486, "color":"#FF3E29" },
        { "id":"TH", "name":"Thailand", "value":69518555, "color": "#FF3E29" },
        { "id":"TG", "name":"Togo", "value":6154813, "color":"#FF3E29" },
        { "id":"TT", "name":"Trinidad and Tobago", "value":1346350, "color":"#FF3E29" },
        { "id":"TN", "name":"Tunisia", "value":10594057, "color":"#FF3E29" },
        { "id":"TR", "name":"Turkey", "value":73639596, "color":"#FF3E29" },
        { "id":"TM", "name":"Turkmenistan", "value":5105301, "color": "#FF3E29" },
        { "id":"UG", "name":"Uganda", "value":34509205, "color":"#FF3E29" },
        { "id":"UA", "name":"Ukraine", "value":45190180, "color":"#FF3E29" },
        { "id":"AE", "name":"United Arab Emirates", "value":7890924, "color": "#FF3E29" },
        { "id":"GB", "name":"United Kingdom", "value":62417431, "color":"#FF3E29" },
        { "id":"US", "name":"United States", "value":313085380, "color":"#FF3E29" },
        { "id":"UY", "name":"Uruguay", "value":3380008, "color":"#FF3E29" },
        { "id":"UZ", "name":"Uzbekistan", "value":27760267, "color": "#FF3E29" },
        { "id":"VE", "name":"Venezuela", "value":29436891, "color":"#FF3E29" },
        { "id":"PS", "name":"West Bank and Gaza", "value":4152369, "color": "#FF3E29" },
        { "id":"VN", "name":"Vietnam", "value":88791996, "color": "#FF3E29" },
        { "id":"YE", "name":"Yemen, Rep.", "value":24799880, "color": "#FF3E29" },
        { "id":"ZM", "name":"Zambia", "value":13474959, "color":"#FF3E29" },
        { "id":"ZW", "name":"Zimbabwe", "value":12754378, "color":"#FF3E29" }
      ];

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
      circle.fillOpacity = 0.5;
      circle.propertyFields.fill = "color";
      circle.tooltipText = "{name}: [bold]{value}[/]";


      imageSeries.heatRules.push({
        "target": circle,
        "property": "radius",
        "min": 4,
        "max": 30,
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
