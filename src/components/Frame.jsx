import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import Line from './Line';
import classNames from 'classnames';
import { DragDropContext } from 'react-dnd';
import DndBackend from 'react-dnd-touch-backend';
import EventPreview from './EventPreview';
import Event from './Event';
import Ruler from './Ruler';
import LineLabel from './LineLabel';
import { DropTarget } from 'react-dnd';


const target = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const eventComponent = item.timeline.findEventById(item.id);
    const delta = monitor.getDifferenceFromInitialOffset();
    const top = Math.round(eventComponent.state.top + delta.y);
    const left = Math.round(eventComponent.state.left + delta.x);

    eventComponent.moveTo(top, left);
  },
  hover(props, monitor, component){
    const clientOffset = monitor.getSourceClientOffset();
    if(clientOffset){
      const eventComponent = props.timeline.findEventById(monitor.getItem().id);
      const lineWrapperBounds = props.timeline.frameComponent.refs.linesWrapper.getBoundingClientRect();
      const lineComponent = props.timeline.draggingOver(clientOffset.x - lineWrapperBounds.left + (eventComponent.props.width / 2/*eventの真ん中を基準にする*/));
      const time = props.timeline.topToTime(clientOffset.y + props.timeline.frameComponent.refs.linesWrapper.scrollTop - lineWrapperBounds.top);
      eventComponent.dragging(time, lineComponent.props.lineId);
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

    this.props.timeline.frameComponent = this;

    const rulerInterval = 4;

    const lines = [];
    const labels = [];
    this.props.lineData.forEach(data => {
      this.createLineComponent(data, lines, labels);
    })

    this.state = {
      lines: lines,
      labels: labels,
      events: this.props.events,
      minWidth: 0
    }

    this.resizingEvent = null;
  }

  resizeUp(eventComponent, clickedTop){
    const initialHeight = eventComponent.state.height;
    const prevBottom = this.props.timeline.getPrevBottom(eventComponent);
    const mouseMoveEvent = (moveEvent) => {
      eventComponent.resizing = true;
      const targetHeight = initialHeight + clickedTop - moveEvent.clientY;
      if(targetHeight > 36){
        let targetTop = eventComponent.state.top - (targetHeight - eventComponent.state.height);
        if(targetTop <= prevBottom){
          targetTop = prevBottom;
        }

        eventComponent.resizingTimeSpan = new TimeSpan(this.props.timeline.topToTime(targetTop), eventComponent.currentTimeSpan.getEndTime());
        eventComponent.setState({
          height: this.props.timeline.timeSpanToHeight(eventComponent.resizingTimeSpan),
          top: this.props.timeline.timeToTop(eventComponent.resizingTimeSpan.getStartTime()),
          draggingDisplay: eventComponent.resizingTimeSpan.getStartTime().getDisplayTime()
        });
      }
    };

    const stopMoveEvent = (mouseEvent) => {
      this.refs.linesWrapper.removeEventListener('mousemove', mouseMoveEvent);
      this.refs.linesWrapper.removeEventListener('mouseup', stopMoveEvent);
      this.refs.linesWrapper.removeEventListener('mouseleave', stopMoveEvent);
      eventComponent.endResizing(mouseEvent);
    };

    this.refs.linesWrapper.addEventListener('mousemove', mouseMoveEvent);
    this.refs.linesWrapper.addEventListener('mouseup', stopMoveEvent);
    this.refs.linesWrapper.addEventListener('mouseleave', stopMoveEvent);
  }

  resizeDown(eventComponent, clickedTop){
    const initialHeight = eventComponent.state.height;
    const nextTop = this.props.timeline.getNextTop(eventComponent);
    const mouseMoveEvent = (moveEvent) => {
      eventComponent.resizing = true;
      const targetHeight = initialHeight + moveEvent.clientY - clickedTop;
      if(targetHeight > 36){
        let targetBottom = eventComponent.state.top + targetHeight;
        if(targetBottom >= nextTop){
          targetBottom = nextTop;
        }

        eventComponent.resizingTimeSpan = new TimeSpan(eventComponent.currentTimeSpan.getStartTime(), this.props.timeline.topToTime(targetBottom));
        eventComponent.setState({
          height: this.props.timeline.timeSpanToHeight(eventComponent.resizingTimeSpan),
          draggingDisplay: eventComponent.resizingTimeSpan.getEndTime().getDisplayTime(),
          draggingDisplayTop: targetHeight - 10
        });
      }
    };

    const stopMoveEvent = (mouseEvent) => {
      this.refs.linesWrapper.removeEventListener('mousemove', mouseMoveEvent);
      this.refs.linesWrapper.removeEventListener('mouseup', stopMoveEvent);
      this.refs.linesWrapper.removeEventListener('mouseleave', stopMoveEvent);
      eventComponent.endResizing(mouseEvent);
    };

    this.refs.linesWrapper.addEventListener('mousemove', mouseMoveEvent);
    this.refs.linesWrapper.addEventListener('mouseup', stopMoveEvent);
    this.refs.linesWrapper.addEventListener('mouseleave', stopMoveEvent);
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
        minHeight={this.props.minHeight}
        timeSpan={this.props.timeSpan}
        even={lines.length % 2 === 0}
        timeline={this.props.timeline}
      />
    );
  }

  removeEvent(eventComponent){
    var current = this.state.events;
    var events = [];
    current.forEach(ev => {
      if(ev.id != eventComponent.props.id){
        events.push(ev);
      }
    });
    this.setState({events: events});
  }

  addEvents(events){
    return new Promise(resolve => {
      var current = this.state.events;
      var eventIds = [];
      events.forEach(event => {
        if(!event.id){
          event.id = this.props.timeline.createEventId();
        }
        eventIds.push(event.id);
        current.push(event)
      });
      this.setState({events: current}, () => {
        var results = this.props.timeline.eventComponents.filter(eventComponent => {
          return eventIds.indexOf(eventComponent.props.id) !== -1;
        });
        resolve(results);
      });
    });

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

  componentDidMount(){
    this.setState({
      minWidth: this.props.timeline.getTotalWidth() + 'px'
    });
  }

  render(){
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="tlFrameView" style={{minWidth: this.state.minWidth}}>
        <div className="tlLabelView" style={{height: LineLabel.height}}>{this.state.labels}</div>
        <div ref="linesWrapper" className="tlLinesWrapper" style={{height: this.props.height - LineLabel.height}}>
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
                width={this.props.timeline.props.lineWidth - 2 - (Line.sidePadding * 2)}
              />
            )
          })}
          {this.props.children}
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
