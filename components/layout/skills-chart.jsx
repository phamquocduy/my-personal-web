import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const SkillsChart = () => {
  useLayoutEffect(() => {
    am5.ready(function () {
      // Define data for each year
      let chartData = {
        1995: [
          { sector: "ASP.NET Web Forms", size: 6.6 },
          { sector: "JavaScript", size: 0.6 },
          { sector: "HTML", size: 23.2 },
          { sector: "CSS", size: 2.2 },
          { sector: "jQuery", size: 4.5 },
          { sector: "ReactJS", size: 14.6 },
          { sector: "C# WPF", size: 9.3 },
          { sector: "OracleDB", size: 22.5 },
        ],
        1996: [
          { sector: "ASP.NET Web Forms", size: 6.4 },
          { sector: "JavaScript", size: 0.5 },
          { sector: "HTML", size: 22.4 },
          { sector: "CSS", size: 2 },
          { sector: "jQuery", size: 4.2 },
          { sector: "ReactJS", size: 14.8 },
          { sector: "C# WPF", size: 9.7 },
          { sector: "OracleDB", size: 22 },
        ],
        1997: [
          { sector: "ASP.NET Web Forms", size: 6.1 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 20.9 },
          { sector: "CSS", size: 1.8 },
          { sector: "jQuery", size: 4.2 },
          { sector: "ReactJS", size: 13.7 },
          { sector: "C# WPF", size: 9.4 },
          { sector: "OracleDB", size: 22.1 },
        ],
        1998: [
          { sector: "ASP.NET Web Forms", size: 6.2 },
          { sector: "JavaScript", size: 0.3 },
          { sector: "HTML", size: 21.4 },
          { sector: "CSS", size: 1.9 },
          { sector: "jQuery", size: 4.2 },
          { sector: "ReactJS", size: 14.5 },
          { sector: "C# WPF", size: 10.6 },
          { sector: "OracleDB", size: 23 },
        ],
        1999: [
          { sector: "ASP.NET Web Forms", size: 5.7 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 20 },
          { sector: "CSS", size: 1.8 },
          { sector: "jQuery", size: 4.4 },
          { sector: "ReactJS", size: 15.2 },
          { sector: "C# WPF", size: 10.5 },
          { sector: "OracleDB", size: 24.7 },
        ],
        2000: [
          { sector: "ASP.NET Web Forms", size: 5.1 },
          { sector: "JavaScript", size: 0.3 },
          { sector: "HTML", size: 20.4 },
          { sector: "CSS", size: 1.7 },
          { sector: "jQuery", size: 4 },
          { sector: "ReactJS", size: 16.3 },
          { sector: "C# WPF", size: 10.7 },
          { sector: "OracleDB", size: 24.6 },
        ],
        2001: [
          { sector: "ASP.NET Web Forms", size: 5.5 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 20.3 },
          { sector: "CSS", size: 1.6 },
          { sector: "jQuery", size: 3.1 },
          { sector: "ReactJS", size: 16.3 },
          { sector: "C# WPF", size: 10.7 },
          { sector: "OracleDB", size: 25.8 },
        ],
        2002: [
          { sector: "ASP.NET Web Forms", size: 5.7 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 20.5 },
          { sector: "CSS", size: 1.6 },
          { sector: "jQuery", size: 3.6 },
          { sector: "ReactJS", size: 16.1 },
          { sector: "C# WPF", size: 10.7 },
          { sector: "OracleDB", size: 26 },
        ],
        2003: [
          { sector: "ASP.NET Web Forms", size: 4.9 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 19.4 },
          { sector: "CSS", size: 1.5 },
          { sector: "jQuery", size: 3.3 },
          { sector: "ReactJS", size: 16.2 },
          { sector: "C# WPF", size: 11 },
          { sector: "OracleDB", size: 27.5 },
        ],
        2004: [
          { sector: "ASP.NET Web Forms", size: 4.7 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 18.4 },
          { sector: "CSS", size: 1.4 },
          { sector: "jQuery", size: 3.3 },
          { sector: "ReactJS", size: 16.9 },
          { sector: "C# WPF", size: 10.6 },
          { sector: "OracleDB", size: 28.1 },
        ],
        2005: [
          { sector: "ASP.NET Web Forms", size: 4.3 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 18.1 },
          { sector: "CSS", size: 1.4 },
          { sector: "jQuery", size: 3.9 },
          { sector: "ReactJS", size: 15.7 },
          { sector: "C# WPF", size: 10.6 },
          { sector: "OracleDB", size: 29.1 },
        ],
        2006: [
          { sector: "ASP.NET Web Forms", size: 4 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 16.5 },
          { sector: "CSS", size: 1.3 },
          { sector: "jQuery", size: 3.7 },
          { sector: "ReactJS", size: 14.2 },
          { sector: "C# WPF", size: 12.1 },
          { sector: "OracleDB", size: 29.1 },
        ],
        2007: [
          { sector: "ASP.NET Web Forms", size: 4.7 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 16.2 },
          { sector: "CSS", size: 1.2 },
          { sector: "jQuery", size: 4.1 },
          { sector: "ReactJS", size: 15.6 },
          { sector: "C# WPF", size: 11.2 },
          { sector: "OracleDB", size: 30.4 },
        ],
        2008: [
          { sector: "ASP.NET Web Forms", size: 4.9 },
          { sector: "JavaScript", size: 0.3 },
          { sector: "HTML", size: 17.2 },
          { sector: "CSS", size: 1.4 },
          { sector: "jQuery", size: 5.1 },
          { sector: "ReactJS", size: 15.4 },
          { sector: "C# WPF", size: 11.1 },
          { sector: "OracleDB", size: 28.4 },
        ],
        2009: [
          { sector: "ASP.NET Web Forms", size: 4.7 },
          { sector: "JavaScript", size: 0.3 },
          { sector: "HTML", size: 16.4 },
          { sector: "CSS", size: 1.9 },
          { sector: "jQuery", size: 4.9 },
          { sector: "ReactJS", size: 15.5 },
          { sector: "C# WPF", size: 10.9 },
          { sector: "OracleDB", size: 27.9 },
        ],
        2010: [
          { sector: "ASP.NET Web Forms", size: 4.2 },
          { sector: "JavaScript", size: 0.3 },
          { sector: "HTML", size: 16.2 },
          { sector: "CSS", size: 2.2 },
          { sector: "jQuery", size: 4.3 },
          { sector: "ReactJS", size: 15.7 },
          { sector: "C# WPF", size: 10.2 },
          { sector: "OracleDB", size: 28.8 },
        ],
        2011: [
          { sector: "ASP.NET Web Forms", size: 4.1 },
          { sector: "JavaScript", size: 0.3 },
          { sector: "HTML", size: 14.9 },
          { sector: "CSS", size: 2.3 },
          { sector: "jQuery", size: 5 },
          { sector: "ReactJS", size: 17.3 },
          { sector: "C# WPF", size: 10.2 },
          { sector: "OracleDB", size: 27.2 },
        ],
        2012: [
          { sector: "ASP.NET Web Forms", size: 3.8 },
          { sector: "JavaScript", size: 0.3 },
          { sector: "HTML", size: 14.9 },
          { sector: "CSS", size: 2.6 },
          { sector: "jQuery", size: 5.1 },
          { sector: "ReactJS", size: 15.8 },
          { sector: "C# WPF", size: 10.7 },
          { sector: "OracleDB", size: 28 },
        ],
        2013: [
          { sector: "ASP.NET Web Forms", size: 3.7 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 14.9 },
          { sector: "CSS", size: 2.7 },
          { sector: "jQuery", size: 5.7 },
          { sector: "ReactJS", size: 16.5 },
          { sector: "C# WPF", size: 10.5 },
          { sector: "OracleDB", size: 26.6 },
        ],
        2014: [
          { sector: "ASP.NET Web Forms", size: 3.9 },
          { sector: "JavaScript", size: 0.2 },
          { sector: "HTML", size: 14.5 },
          { sector: "CSS", size: 2.7 },
          { sector: "jQuery", size: 5.6 },
          { sector: "ReactJS", size: 16.6 },
          { sector: "C# WPF", size: 10.5 },
          { sector: "OracleDB", size: 26.5 },
        ],
      };

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      let root = am5.Root.new("chartdiv");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([am5themes_Animated.new(root)]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      let chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          innerRadius: 100,
          layout: root.verticalLayout,
        })
      );

      // Create series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      let series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "size",
          categoryField: "sector",
          alignLabels: false,
        })
      );

      series.ticks.template.set("visible", false);
      series.labels.template.set("forceHidden", true);

      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      series.data.setAll([
        { sector: "ASP.NET Web Forms", size: 6.6 },
        { sector: "JavaScript", size: 0.6 },
        { sector: "HTML", size: 23.2 },
        { sector: "CSS", size: 2.2 },
        { sector: "jQuery", size: 4.5 },
        { sector: "ReactJS", size: 14.6 },
        { sector: "C# WPF", size: 9.3 },
        { sector: "OracleDB", size: 22.5 },
      ]);

      // Play initial series animation
      // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
      series.appear(1000, 100);

      // Add label
      let label = root.tooltipContainer.children.push(
        am5.Label.new(root, {
          x: am5.p50,
          y: am5.p50,
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0x000000),
          fontSize: 50,
        })
      );

      let legend = chart.children.push(
        am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          layout: root.horizontalLayout,
        })
      );

      legend.data.setAll(series.dataItems);

      // Animate chart data
      let currentYear = 1995;
      function getCurrentData() {
        let data = chartData[currentYear];
        currentYear++;
        if (currentYear > 2014) currentYear = 1995;
        return data;
      }

      let data = getCurrentData();
      label.set("text", currentYear);
      series.data.setIndex(0, data[0]);
      // function loop() {
      //   label.set("text", currentYear);
      //   let data = getCurrentData();
      //   for (let i = 0; i < data.length; i++) {
      //     series.data.setIndex(i, data[i]);
      //   }
      //   chart.setTimeout(loop, 4000);
      // }

      // loop();
    }); // end am5.ready()
  }, []);

  return <div id="chartdiv" className="w-full h-[500px]"></div>;
};

export default SkillsChart;
