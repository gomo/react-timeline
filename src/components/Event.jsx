import React from 'react';
import classNames from 'classnames';
import TimeSpan from '../classes/TimeSpan';
import {DragSource} from 'react-dnd';
import EventBase from './EventBase';
import EventActions from '../classes/EventActions';

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
      resizable: false,
      draggingDisplay: ''
    }

    this.actions = new EventActions(this);

    this.lineId = this.props.lineId;
    this.timeSpan = this.props.timeSpan;
    this.draggingPosition = null;
    this.resizableTimeSpan = null;

    //resizableでドラッグ中はtrue。mouseupでclickイベントが発生してしまうので。
    this.handling = false;

    this.props.timeline.addEventComponent(this);
  }

  get currentTimeSpan(){
    return this.resizableTimeSpan || this.timeSpan;
  }

  getDraggingPosition(){
    if(this.draggingPosition){
      return {
        lineId: this.draggingPosition.lineId,
        timeSpan: this.timeSpan.shiftStartTime(this.draggingPosition.time)
      }
    } else if(this.resizableTimeSpan){
      return{
        lineId: this.lineId,
        timeSpan: this.resizableTimeSpan
      }
    }

    return null;
  }

  moveTo(top, left){
    this.setState({top: top, left: left});
  }

  onClick(){
    if(this.state.draggable){
      this.props.onClickFlexibleEvent(this);
    } else if(this.state.resizable && !this.handling){
      this.props.onClickFlexibleEvent(this);
    } else {
      this.props.onClickEvent(this);
    }
  }

  dragging(time, lineId){
    this.draggingPosition = {time: time, lineId: lineId};
    this.setState({draggingDisplay: time.getDisplayTime()});
  }

  handleUp(e){
    this.handling = true;
    this.props.timeline.frameComponent.resizeTop(this, e.clientY);
  }

  handleDown(e){
    this.handling = true;
    this.props.timeline.frameComponent.resizeDown(this, e.clientY);
  }

  endResizing(){
    this.setState({
      draggingDisplay: null,
      draggingDisplayTop: null,
      top: this.props.timeline.timeToTop(this.resizableTimeSpan.getStartTime()),
      height: this.props.timeline.timeSpanToHeight(this.resizableTimeSpan)
    });

    setTimeout(() => this.handling = false, 100);
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
      <div on className={classNames('tlEventView', {tlDraggingEvent: this.state.draggable, tlFlexibleEvent: this.state.resizable})} style={style} onClick={e => this.onClick(e)}>
        {(() => {
          if(this.state.resizable){
            return (
              <div className="tlRisezeHandle" onTouchstart={e => this.handleUp(e)} onMouseDown={e => this.handleUp(e)}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>
            )
          }
        })()}
        <EventBase
          draggingDisplay={this.state.draggingDisplay}
          draggingDisplayTop={this.state.draggingDisplayTop}
        />
        {(() => {
          if(this.state.resizable){
            return (
              <div className="tlRisezeHandle tlBottom" onTouchstart={e => this.handleDown(e)} onMouseDown={e => this.handleDown(e)}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>
            )
          }
        })()}

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
