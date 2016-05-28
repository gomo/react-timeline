import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import Line from './Line';
import classNames from 'classnames';
import { DragDropContext } from 'react-dnd';
import DndBackend from 'react-dnd-touch-backend';
import EventPreview from './EventPreview';
import Actions from '../classes/Actions';
import Event from './Event';
import Ruler from './Ruler';
import LineLabel from './LineLabel';
import { DropTarget } from 'react-dnd';


const target = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const eventComponent = item.timeline.actions.findEventById(item.id);
    const delta = monitor.getDifferenceFromInitialOffset();
    const top = Math.round(eventComponent.state.top + delta.y);
    const left = Math.round(eventComponent.state.left + delta.x);

    eventComponent.moveTo(top, left);
  },
  hover(props, monitor, component){
    const clientOffset = monitor.getSourceClientOffset();
    if(clientOffset){
      const eventComponent = props.timeline.actions.findEventById(monitor.getItem().id);
      const lineWrapperBounds = props.timeline.actions.frameComponent.refs.linesWrapper.getBoundingClientRect();
      props.timeline.actions.draggingOver(clientOffset.x - lineWrapperBounds.left + (eventComponent.props.width / 2/*eventの真ん中を基準にする*/));

      const time = props.timeline.actions.topToTime(clientOffset.y - lineWrapperBounds.top);
      eventComponent.draggingDisplay(time);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Frame extends React.Component
{
  constructor(props) {
    super(props);

    this.props.timeline.actions.frameComponent = this;

    const rulerInterval = 4;

    const lines = [];
    const labels = [];
    this.props.lineData.forEach(data => {
      this.createLineComponent(data, lines, labels);
    })

    this.state = {
      lines: lines,
      labels: labels,
      events: [],
      height: this.props.height
    }

    this.LABEL_HEIGHT = 16;
  }

  createLineComponent(data, lines, labels){
    const hasRuler = lines.length % this.props.rulerInterval === 0;
    const prevRuler = (lines.length + 1) % this.props.rulerInterval === 0;

    labels.push(
      <LineLabel
        key={data.id}
        width={this.props.lineWidth}
        hasRuler={hasRuler}
        prevRuler={prevRuler}
        label={data.label}
        timeline={this.props.timeline}
      />
    );

    lines.push(
      <Line
        hasRuler={hasRuler}
        label={data.l}
        key={data.id}
        lineId={data.id}
        width={this.props.lineWidth}
        height={this.props.timeline.actions.lineHeight}
        minHeight={this.props.minHeight}
        timeSpan={this.props.timeSpan}
        onClickLine={this.props.onClickLine}
        even={lines.length % 2 === 0}
        timeline={this.props.timeline}
      />
    );
  }

  addEvents(events){
    var current = this.state.events;
    events.forEach(event => {
      if(!event.id){
        event.id = this.props.timeline.actions.createEventId();
      }
      current.push(event)
    });
    this.setState({events: current});
  }

  setHeight(height){
    this.setState({height: height});
  }

  getRelativePos(e){
    return {
      top: e.clientY - e.currentTarget.offsetTop + e.currentTarget.scrollTop,
      left: e.clientX - e.currentTarget.offsetLeft + e.currentTarget.scrollLeft
    };
  }

  render(){
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="tlFrameView" style={{width: this.props.timeline.actions.getTotalWidth() + 'px'}}>
        <div className="tlLabelView" style={{height: this.LABEL_HEIGHT}}>{this.state.labels}</div>
        <div ref="linesWrapper" className="tlLinesWrapper" style={{height: this.state.height - this.LABEL_HEIGHT}}>
          {this.state.lines}
          {this.state.events.map(event => {
            return (
              <Event
                key={event.id}
                id={event.id}
                color={event.color}
                timeSpan={event.timeSpan}
                display={event.display}
                lineId={event.lineId}
                timeline={this.props.timeline}
                width={this.props.timeline.actions.lineWidth - 2}
                onClickEvent={this.props.onClickEvent}
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
  timeline: React.PropTypes.any.isRequired,
  rulerInterval: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
}

export default DragDropContext(DndBackend({ enableMouseEvents: true }))(DropTarget("Event", target, collect)(Frame));
