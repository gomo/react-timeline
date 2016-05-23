import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import Line from './Line';
import Ruler from './Ruler';
import classNames from 'classnames';
import { DragDropContext } from 'react-dnd';
import DndBackend from 'react-dnd-touch-backend';
import EventPreview from './EventPreview';
import Actions from '../classes/Actions';
import Event from './Event';

class Frame extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      labels: [],
      events: [],
      wrapperHeight: 0
    }

    this.props.timeline.actions.frame = this;

    const rulerInterval = 4;

    //TODO 後から追加できる様にメソッドに抽出
    props.lineData.forEach((data, index) => {
      const labelClass = {tlLabel: true, tlHasRuler: false, tlPrevRuler: false}
      const currentKey = index % rulerInterval;
      if(currentKey === 0){
        this.state.lines.push(
          <Ruler
            key={'ruler_' + index}
            minHeight={this.props.minHeight}
            timeSpan={this.props.timeSpan}
          />
        );

        this.props.timeline.actions.addWidth(index, Ruler.width);

        labelClass.tlHasRuler = true;
      } else if(currentKey === rulerInterval - 1) {
        labelClass.tlPrevRuler = true;
      }

      //一番最後はラベルの右側の角を丸める
      if(index == props.lineData.length - 1){
        labelClass.tlPrevRuler = true;
      }

      this.state.labels.push(
        <div style={{width: this.props.lineWidth, marginLeft: labelClass.tlHasRuler ? Ruler.width + 'px' : 0}} className={classNames(labelClass)} key={index}>{data.label}</div>
      );

      this.state.lines.push(
        <Line
          label={data.label}
          key={data.id}
          lineId={data.id}
          width={this.props.lineWidth}
          height={this.props.timeline.actions.lineHeight}
          minHeight={this.props.minHeight}
          timeSpan={this.props.timeSpan}
          onClick={this.props.onClick}
          even={index % 2 !== 0}
          timeline={this.props.timeline}
        />
      );

      this.props.timeline.actions.addWidth(index, this.props.lineWidth);
    })
  }

  addEvents(events){
    var current = this.state.events;
    events.forEach(event => current.push(event));
    this.setState({events: current});
  }

  fitToWindow(){
    const wrapperBounds = this.refs.linesWrapper.getBoundingClientRect();
    const windowSize = Actions.windowSize;
    this.setState({wrapperHeight: windowSize.height - wrapperBounds.top});
  }

  componentDidMount(){
    this.fitToWindow();
    window.addEventListener('resize', event => {
      this.fitToWindow();
    });
  }

  render(){
    return (
      <div className="tlFrameView" style={{width: this.props.timeline.actions.getTotalWidth() + 'px'}}>
        <div className="tlLabelView">{this.state.labels}</div>
        <div ref="linesWrapper" className="tlLinesWrapper" style={{height: this.state.wrapperHeight}}>
          {this.state.lines}
          {this.state.events.map(event => {
            return (
              <Event
                key={event.lineId + event.timeSpan.toString()}
                color={event.color}
                timeSpan={event.timeSpan}
                display={event.display}
                lineId={event.lineId}
                timeline={this.props.timeline}
              />
            )
          })}
        </div>
        <EventPreview />
      </div>
    );
  }
}

Frame.propTypes = {
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
  lineData: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  })).isRequired,
  lineWidth: React.PropTypes.number.isRequired,
  minHeight: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func,
  timeline: React.PropTypes.any.isRequired
}

export default DragDropContext(DndBackend({ enableMouseEvents: true }))(Frame);
