import JUI from 'juijs-chart'
import BarBrush from 'juijs-chart/src/brush/bar.js'
import StackBarBrush from 'juijs-chart/src/brush/stackbar.js'
import FullStackBarBrush from 'juijs-chart/src/brush/fullstackbar.js'
import RangeBarBrush from 'juijs-chart/src/brush/rangebar.js'
import ColumnBrush from 'juijs-chart/src/brush/column.js'
import StackColumnBrush from 'juijs-chart/src/brush/stackcolumn.js'
import FullStackColumnBrush from 'juijs-chart/src/brush/fullstackcolumn.js'
import RangeColumnBrush from 'juijs-chart/src/brush/rangecolumn.js'
import LineBrush from 'juijs-chart/src/brush/line.js'
import AreaBrush from 'juijs-chart/src/brush/area.js'
import StackAreaBrush from 'juijs-chart/src/brush/stackarea.js'
import RangeAreaBrush from 'juijs-chart/src/brush/rangearea.js'
import ScatterBrush from 'juijs-chart/src/brush/scatter.js'
import BubbleBrush from 'juijs-chart/src/brush/bubble.js'
import PieBrush from 'juijs-chart/src/brush/pie.js'
import DonutBrush from 'juijs-chart/src/brush/donut.js'
import Column3dBrush from 'juijs-chart/src/brush/polygon/column3d.js'
import Line3dBrush from 'juijs-chart/src/brush/polygon/line3d.js'
import CrossWidget from 'juijs-chart/src/widget/cross.js'
import TitleWidget from 'juijs-chart/src/widget/title.js'
import LegendWidget from 'juijs-chart/src/widget/legend.js'
import TooltipWidget from 'juijs-chart/src/widget/tooltip.js'
import Rotate3dWidget from 'juijs-chart/src/widget/polygon/rotate3d.js'

import GraphBar from './components/bar.js'
import GraphBar3d from './components/bar3d.js'
import GraphStackBar from './components/stackbar.js'
import GraphRangeBar from './components/rangebar.js'
import GraphLine from './components/line.js'
import GraphLine3d from './components/line3d.js'
import GraphLineForDateBlock from './components/line-dateblock.js'
import GraphLineForTimeRange from './components/line-timerange.js'
import GraphScatter from './components/scatter.js'
import GraphBubble from './components/bubble.js'
import GraphArea from './components/area.js'
import GraphAreaForDateBlock from './components/area-dateblock.js'
import GraphAreaForTimeRange from './components/area-timerange.js'
import GraphRangeArea from './components/rangearea.js'
import GraphRangeAreaForDateBlock from './components/rangearea-dateblock.js'
import GraphRangeAreaForTimeRange from './components/rangearea-timerange.js'
import GraphPie from './components/pie.js'
import GraphComparisonBar from './components/comparisonbar.js'
import WidgetNote from './components/widgets/note.js'
import WidgetTooltip from './components/widgets/tooltip.js'
import WidgetGuideline from './components/widgets/guideline.js'
import WidgetLegends from './components/widgets/legends.js'
import WidgetRotate3d from './components/widgets/rotate3d.js'

export default {
    install: function(Vue, options) {
        // 0. JUI 차트 모듈 추가 영역
        JUI.use([
            BarBrush,
            StackBarBrush,
            FullStackBarBrush,
            RangeBarBrush,
            ColumnBrush,
            StackColumnBrush,
            FullStackColumnBrush,
            RangeColumnBrush,
            LineBrush,
            AreaBrush,
            StackAreaBrush,
            RangeAreaBrush,
            ScatterBrush,
            BubbleBrush,
            PieBrush,
            DonutBrush,
            Column3dBrush,
            Line3dBrush,
            CrossWidget,
            LegendWidget,
            TitleWidget,
            TooltipWidget,
            Rotate3dWidget
        ]);

        // 1. 브러쉬 추가 영역
        Vue.component(GraphBar.name, GraphBar);
        Vue.component(GraphBar3d.name, GraphBar3d);
        Vue.component(GraphStackBar.name, GraphStackBar);
        Vue.component(GraphRangeBar.name, GraphRangeBar);
        Vue.component(GraphLine.name, GraphLine);
        Vue.component(GraphLine3d.name, GraphLine3d);
        Vue.component(GraphLineForDateBlock.name, GraphLineForDateBlock);
        Vue.component(GraphLineForTimeRange.name, GraphLineForTimeRange);
        Vue.component(GraphScatter.name, GraphScatter);
        Vue.component(GraphBubble.name, GraphBubble);
        Vue.component(GraphArea.name, GraphArea);
        Vue.component(GraphAreaForDateBlock.name, GraphAreaForDateBlock);
        Vue.component(GraphAreaForTimeRange.name, GraphAreaForTimeRange);
        Vue.component(GraphRangeArea.name, GraphRangeArea);
        Vue.component(GraphRangeAreaForDateBlock.name, GraphRangeAreaForDateBlock);
        Vue.component(GraphRangeAreaForTimeRange.name, GraphRangeAreaForTimeRange);
        Vue.component(GraphPie.name, GraphPie);
        Vue.component(GraphComparisonBar.name, GraphComparisonBar);

        // 2. 위젯 추가 영역
        Vue.component(WidgetNote.name, WidgetNote);
        Vue.component(WidgetTooltip.name, WidgetTooltip);
        Vue.component(WidgetGuideline.name, WidgetGuideline);
        Vue.component(WidgetLegends.name, WidgetLegends);
        Vue.component(WidgetRotate3d.name, WidgetRotate3d);
    }
};