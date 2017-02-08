import React from 'react';
import classNames from 'classnames';
import TimeSpan from '../classes/TimeSpan';
import {DragSource} from 'react-dnd';
import EventBase from './EventBase';
import Timeline from './Timeline';
import assign from 'object-assign'

const source = {
  beginDrag: function (props, monitor, component) {
    return assign({}, props, {draggingComponent: component});
  },
  canDrag: function(props, monitor, component){
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
      top: props.float === undefined ? this.props.timeline.timeToTop(this.props.timeSpan.getStartTime()) : props.float.top,
      left: props.float === undefined ? this.props.timeline.getLineLeft(this.props.lineId) : props.float.left,
      color: this.props.color,
      draggable: props.float === undefined ? false : true,
      resizable: false,
      draggingDisplay: '',
      display: props.display,
    }

    this.lineId = this.props.lineId;//TODO これはpropsにあるのでメンバー変数に持たせるの冗長なのでやめる？
    this.timeSpan = this.props.timeSpan;//TODO これはpropsにあるのでメンバー変数に持たせるの冗長なのでやめる？
    this.draggingPosition = null;
    this.resizingTimeSpan = null;
    this.resizing = false;
    this.vars = this.props.vars ? this.props.vars : {};
    this.element = null;

    if(this.props.float){
      const lineId = this.props.timeline.findLineByLeft(this.state.left).props.id;
      const time = this.props.timeline.topToTime(this.state.top);
      this.draggingPosition = {time: time, lineId: lineId};
      this.state.draggingDisplay = time.getDisplayTime();
      this.state.height = this.props.timeline.minuteToHeight(this.props.float.minute);
    } else {
      this.state.height = this.props.timeline.timeSpanToHeight(this.props.timeSpan);
    }
  }

  toJson(){
    return {
      id: this.props.id,
      lineId: this.lineId,
      timeSpan: this.timeSpan,
      vars: JSON.parse(JSON.stringify(this.vars)),
      color: this.state.color,
      display: this.props.display,
      position: {
        top: this.state.top,
        left: this.state.left,
      }
    }
  }

  update(values){
    const newState = {};
    if(values.timeSpan){
      newState.height = this.props.timeline.timeSpanToHeight(values.timeSpan);
      newState.top = this.props.timeline.timeToTop(values.timeSpan.getStartTime());
      this.timeSpan = values.timeSpan;
    }

    if(values.color){
      newState.color = values.color;
    }

    if(values.display){
      newState.display = values.display;
    }

    if(values.vars){
      this.vars = values.vars;
    }

    this.setState(newState);
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
    if(this.props.timeline.props.eventDidClick){
      if(this.resizing){
        return ;
      }

      this.props.timeline.props.eventDidClick({
        position: {
          scrollTop: this.props.timeline.frameComponent.refs.linesWrapper.scrollTop,
          scrollLeft: this.props.timeline.frameComponent.element.scrollLeft,
          top: e.clientY,
          left: e.clientX,
        },
        component: this,
        lineComponent: this.props.timeline.lineComponents.find(lineComponent => lineComponent.props.id == this.lineId)
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
    if(this.props.timeline.props.eventDidRightClick){
      this.props.timeline.props.eventDidRightClick({
        event: e,
        component: this
      });
    }
  }

  getDraggingStyle(){
    return {
      height: this.state.height,
      width: this.props.width,
      top: this.state.top,
      left: this.state.left,
      backgroundColor: this.state.color,
    }
  }

  getOffset(){
    return {
      top: this.state.top,
      left: this.state.left
    }
  }

  setColor(color){
    this.setState({color: color});
  }

  setDisplay(display){
    this.setState({display: display});
  }

  resize(){
    this.setState({
      resizable: true
    });
  }

  float(){
    this.setState({
      draggable: true,
      draggingDisplay: this.timeSpan.getStartTime().getDisplayTime()
    });
  }

  isFixed(){
    return !this.state.draggable && !this.state.resizable;
  }

  isFixable(){
    var newPosition = this.nextPosition;
    if(!newPosition){
      return true;
    }

    return this.isFreePosition(newPosition);
  }

  isCancelable(){
    var newPosition = this.prevPosition;
    if(!newPosition){
      return true;
    }

    return this.isFreePosition(newPosition);
  }

  cancel(){
    if(this.draggingPosition){
      const left = this.props.timeline.getLineLeft(this.lineId);
      const top = this.props.timeline.timeToTop(this.timeSpan.getStartTime());
      this.draggingPosition = null;
      this.setState({
        draggable: false,
        draggingDisplay: '',
        top: top,
        left: left
      });
    } else if(this.resizingTimeSpan){
      const top = this.props.timeline.timeToTop(this.timeSpan.getStartTime());
      const height = this.props.timeline.timeSpanToHeight(this.timeSpan);
      this.resizingTimeSpan = null;
      this.setState({
        resizable: false,
        draggingDisplay: '',
        top: top,
        height: height
      });
    } else {
      this.setState({
        draggable: false,
        resizable: false,
        draggingDisplay: ''
      });
    }

    this.props.timeline.clearDraggingOver();
  }

  remove(){
    this.props.timeline.removeEvent(this.props.id);
    this.props.timeline.clearDraggingOver();
  }

  getMinute(){
    if(this.props.timeSpan){
      return this.props.timeSpan.getDistance();
    } else if(this.props.float){
      return parseInt(this.props.float.minute, 10);
    }
  }

  fix(){
    if(this.draggingPosition){
      const state = {
        top: this.props.timeline.timeToTop(this.draggingPosition.time),
        left: this.props.timeline.getLineLeft(this.draggingPosition.lineId),
        draggable: false,
        draggingDisplay: ''
      };
      const newTimeSpan = this.timeSpan.shiftStartTime(this.draggingPosition.time);
      if(this.props.timeline.props.eventWillFix){
        this.props.timeline.props.eventWillFix({
          component: this,
          state: state,
          lineId: this.draggingPosition.lineId,
          timeSpan: newTimeSpan
        })
      }
      this.setState(state);
      this.lineId = this.draggingPosition.lineId;
      this.timeSpan = newTimeSpan;
      this.draggingPosition = null;
    } else if(this.resizingTimeSpan){
      const state = {
        resizable: false,
        draggingDisplay: ''
      }
      if(this.props.timeline.props.eventWillFix){
        this.props.timeline.props.eventWillFix({
          component: this,
          state: state,
          lineId: this.lineId,
          timeSpan: this.resizingTimeSpan
        })
      }
      this.setState(state);
      this.timeSpan = this.resizingTimeSpan;
      this.resizingTimeSpan = null;
    } else {
      this.setState({
        draggable: false,
        resizable: false,
        draggingDisplay: ''
      });
    }

    this.props.timeline.clearDraggingOver();
    if(this.props.timeline.props.eventDidFix){
      this.props.timeline.props.eventDidFix({
        component: this
      })
    }
  }

  setVar(key, value){
    this.vars[key] = value;
  }

  getVar(key){
    return this.vars[key];
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
      <div ref={elem => this.element = elem} onContextMenu={e => this.onContextMenu(e)} className={classNames('tlEventView', {tlDraggingEvent: this.state.draggable, tlResizableEvent: this.state.resizable})} style={style} onClick={e => this.onClick(e)}>
        {(() => {
          if(this.state.resizable){
            return (
              <div className="tlResizeHandle" onTouchStart={e => this.resizeUp(e)} onMouseDown={e => this.resizeUp(e)}>
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
              <div className="tlResizeHandle tlBottom" onTouchStart={e => this.resizeDown(e)} onMouseDown={e => this.resizeDown(e)}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>
            )
          }
        })()}
      </div>
    );
  }
}

// Event.propTypes = {
//   id: React.PropTypes.string.isRequired,
//   timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
//   color: React.PropTypes.string.isRequired,
//   //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
//   timeline: React.PropTypes.any.isRequired,
//   lineId: React.PropTypes.string.isRequired
// }

export default DragSource("Event", source, collect)(Event);
