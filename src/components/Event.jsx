import React from 'react';
import classNames from 'classnames';
import TimeSpan from '../classes/TimeSpan';
import {DragSource} from 'react-dnd';
import EventBase from './EventBase';

const source = {
  beginDrag: function (props) {
    return props;
  },
  canDrag: function(props, monitor){
    const draggable = props.timeline.findEventById(props.id).state.draggable;
    return !!draggable;
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Event extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      height: this.props.timeline.timeSpanToHeight(this.props.timeSpan),
      top: this.props.timeline.timeToTop(this.props.timeSpan.getStartTime()),
      left: this.props.timeline.getLineLeft(this.props.lineId),
      color: this.props.color,
      draggable: false,
      draggingDisplay: ''
    }

    this.lineId = this.props.lineId;
    this.timeSpan = this.props.timeSpan;
    this.draggingPosition = null;

    this.props.timeline.addEventComponent(this);
  }

  float(){
    this.setState({
      draggable: true,
      draggingDisplay: this.timeSpan.getStartTime().getDisplayTime()
    });
  }

  fix(){
    if(this.draggingPosition){
      this.lineId = this.draggingPosition.lineId;
      this.timeSpan = this.timeSpan.shiftStartTime(this.draggingPosition.time);
      this.setState({
        top: this.props.timeline.timeToTop(this.draggingPosition.time),
        left: this.props.timeline.getLineLeft(this.draggingPosition.lineId),
        draggable: false,
        draggingDisplay: ''
      });
      this.draggingPosition = null;
    } else {
      this.setState({
        draggable: false,
        draggingDisplay: ''
      });
    }

    this.props.timeline.clearDraggingOver();
  }

  getDraggingPosition(){
    if(this.draggingPosition){
      return {
        lineId: this.draggingPosition.lineId,
        timeSpan: this.timeSpan.shiftStartTime(this.draggingPosition.time)
      }
    }

    return null;
  }

  moveTo(top, left){
    this.setState({top: top, left: left});
  }

  onClick(){
    if(this.state.draggable){
      this.props.onClickFloatingEvent(this);
    } else {
      this.props.onClickEvent(this);
    }
  }

  dragging(time, lineId){
    this.draggingPosition = {time: time, lineId: lineId};
    this.setState({draggingDisplay: time.getDisplayTime()});
  }

  render(){
    const style = {
      height: this.state.height,
      position: 'absolute',
      top: this.state.top + 'px',
      left: this.state.left + 'px',
      width: this.props.width + 'px',
      backgroundColor: this.state.color,
      display: this.props.isDragging ? 'none' : 'block'
    };

    return this.props.connectDragSource(
      <div className={classNames('tlEventView', {tlDraggingEvent: this.state.draggable})} style={style} onClick={e => this.onClick(e)}>
        <EventBase
          draggingDisplay={this.state.draggingDisplay}
        />
      </div>
    );
  }
}

Event.propTypes = {
  id: React.PropTypes.string.isRequired,
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
  color: React.PropTypes.string.isRequired,
  //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
  timeline: React.PropTypes.any.isRequired,
  lineId: React.PropTypes.string.isRequired
}

export default DragSource("Event", source, collect)(Event);
