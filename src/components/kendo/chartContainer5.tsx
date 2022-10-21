
import {
  Chart, ChartPane, ChartPaneDefaults, ChartPaneDefaultsTitle, ChartPanes, ChartSeries,
  ChartSeriesItem, ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';

const seriesData = [[1, 2, 3, 5], [1, 1, 8, 1]];

const ChartContainer5 = () => (
  <Chart>
    <ChartPaneDefaults margin={10}>
      <ChartPaneDefaultsTitle font="700 18px sans-serif" position="center" />
    </ChartPaneDefaults>
    <ChartPanes>
      <ChartPane name="top" title="Sales" />
      <ChartPane name="bottom" title="Inventory" />
    </ChartPanes>
    <ChartValueAxis>
      <ChartValueAxisItem name="top" />
      <ChartValueAxisItem name="bottom" pane="bottom" />
    </ChartValueAxis>
    <ChartSeries>
      <ChartSeriesItem data={seriesData[0]} tooltip={{ visible: true }} />
      <ChartSeriesItem type="line" data={seriesData[1]} axis="bottom" tooltip={{ visible: true }} />
    </ChartSeries>
  </Chart>
)

export default ChartContainer5;