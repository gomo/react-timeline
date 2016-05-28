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
    const draggable = props.timeline.actions.findEventById(props.id).state.draggable;
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
      height: this.props.timeline.actions.timeSpanToHeight(this.props.timeSpan),
      top: this.props.timeline.actions.timeToTop(this.props.timeSpan.getStartTime()),
      left: this.props.timeline.actions.getLineLeft(this.props.lineId),
      color: this.props.color,
      draggable: false,
      draggingDisplay: ''
    }

    this.lineId = this.props.lineId;
    this.timeSpan = this.props.timeSpan;

    this.props.timeline.actions.addEventComponent(this);
  }

  toFloat(){
    this.setState({
      draggable: true,
      draggingDisplay: this.timeSpan.getStartTime().getDisplayTime()
    });
  }

  moveTo(top, left){
    this.setState({top: top, left: left});
  }

  onClick(){
    this.props.onClickEvent(this);
  }

  draggingDisplay(time){
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
