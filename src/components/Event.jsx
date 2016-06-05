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
      display: this.props.display,
      draggable: false,
      resizable: false,
      draggingDisplay: ''
    }

    this.actions = new EventActions(this);

    this.lineId = this.props.lineId;
    this.timeSpan = this.props.timeSpan;
    this.draggingPosition = null;
    this.resizingTimeSpan = null;
    this.resizing = false;
    this.props.timeline.addEventComponent(this);
  }

  get currentTimeSpan(){
    return this.resizingTimeSpan || this.timeSpan;
  }

  get nextPosition(){
    if(this.draggingPosition){
      return {
        lineId: this.draggingPosition.lineId,
        timeSpan: this.timeSpan.shiftStartTime(this.draggingPosition.time)
      }
    } else if(this.resizingTimeSpan){
      return{
        lineId: this.lineId,
        timeSpan: this.resizingTimeSpan
      }
    }

    return null;
  }

  get prevPosition(){
    if(!this.draggingPosition && !this.resizingTimeSpan){
      return null;
    } else {
      return{
        lineId: this.lineId,
        timeSpan: this.timeSpan
      }
    }
  }

  /**
   * 他のEventと重なっていないかチェックする
   * @param  {object}  position {lineId: ***, timeSpan: ***}
   * @return {Boolean}
   */
  isFreePosition(position){
    for (var i = 0; i < this.props.timeline.eventComponents.length; i++) {
      let ev = this.props.timeline.eventComponents[i];
      if(ev === this) continue;
      if(ev.lineId != position.lineId) continue;
      if(ev.currentTimeSpan.overlaps(position.timeSpan)){
        return false;
      }
    }

    return true;
  }

  moveTo(top, left){
    this.setState({top: top, left: left});
  }

  onClick(e){
    if(this.props.timeline.props.onClickEvent){
      if(this.resizing){
        return ;
      }
      this.props.timeline.props.onClickEvent({
        component: this,
        event: e
      });
    }
  }

  dragging(time, lineId){
    this.draggingPosition = {time: time, lineId: lineId};
    this.setState({draggingDisplay: time.getDisplayTime()});
  }

  resizeUp(e){
    this.props.timeline.frameComponent.resizeUp(this, e.clientY);
  }

  resizeDown(e){
    this.props.timeline.frameComponent.resizeDown(this, e.clientY);
  }

  endResizing(e){
    if(this.resizingTimeSpan){
      const newState = {
        draggingDisplay: null,
        draggingDisplayTop: null
      };

      if(this.resizingTimeSpan){
        newState.top = this.props.timeline.timeToTop(this.resizingTimeSpan.getStartTime());
        newState.height = this.props.timeline.timeSpanToHeight(this.resizingTimeSpan);
      }

      this.setState(newState);
    } else {
      this.onClick();
    }

    //onClickよりendResizingの先に発生してしまう。
    setTimeout(() => this.resizing = false, 100);
  }

  onContextMenu(e){
    if(this.props.timeline.props.onRightClickEvent){
      this.props.timeline.props.onRightClickEvent({
        component: this,
        event: e
      });
    }
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
      <div onContextMenu={e => this.onContextMenu(e)} className={classNames('tlEventView', {tlDraggingEvent: this.state.draggable, tlFlexibleEvent: this.state.resizable})} style={style} onClick={e => this.onClick(e)}>
        {(() => {
          if(this.state.resizable){
            return (
              <div className="tlRisezeHandle" onTouchstart={e => this.resizeUp(e)} onMouseDown={e => this.resizeUp(e)}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>
            )
          }
        })()}
        <EventBase
          draggingDisplay={this.state.draggingDisplay}
          draggingDisplayTop={this.state.draggingDisplayTop}
          display={this.state.display}
        />
        {(() => {
          if(this.state.resizable){
            return (
              <div className="tlRisezeHandle tlBottom" onTouchstart={e => this.resizeDown(e)} onMouseDown={e => this.resizeDown(e)}>
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
