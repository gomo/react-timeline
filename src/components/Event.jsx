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

    // ドラッグ&ドロップのパフォーマンスを上げるため、見た目に関係のないstateはメンバー変数にしてます。
    this.lineId = this.props.initialLineId;
    this.timeSpan = this.props.initialTimeSpan;
    this.draggingPosition = null;
    this.resizingTimeSpan = null;
    this.resizing = false;
    this.vars = this.props.vars || {};
    this.element = null;
    // 初期フロートのイベントはlineIdを持っていません。これはキャンセルした時にフローとした状態に戻したいからです。
    // 代わりにfloatの値を保持し、そこにフロートのまま戻すようにしています。
    this.initialFloat = this.props.float

    this.state = {
      top: props.float === undefined ? this.props.timeline.timeToTop(this.timeSpan.getStartTime()) : props.float.top,
      left: props.float === undefined ? this.props.timeline.getLineLeft(this.lineId) : props.float.left,
      color: this.props.initialColor,
      draggable: this.props.float === undefined ? false : true,
      resizable: false,
      draggingDisplay: '',
      display: this.props.initialDisplay || [],
    }

    if(this.props.float){
      // 高さを設定
      this.state.height = this.props.timeline.minuteToHeight(this.props.float.minute);
      const time = this.props.timeline.topToTime(this.state.top);
      this.draggingPosition = {time: time, lineId: undefined};
      this.state.draggingDisplay = time.getDisplayTime();
      this.timeSpan = new TimeSpan(time, time.addMin(this.props.float.minute));
    } else {
      this.state.height = this.props.timeline.timeSpanToHeight(this.timeSpan);
    }
  }

  toJson(){
    const json = {
      id: this.props.id,
      vars: {...this.vars},
      color: this.state.color,
      display: this.state.display
    }

    if(this.state.draggable){
      json.float = {
        top: this.state.top,
        left: this.state.left,
        minute: this.timeSpan.getDistance()
      }
    } else {
      json.position = {
        top: this.state.top,
        left: this.state.left,
      }
      json.lineId = this.lineId
      json.timeSpan = this.timeSpan
    }

    return json
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
      Object.keys(values.vars).forEach(key => {
        this.vars[key] = values.vars[key]
      })
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
        lineComponent: this.props.timeline.lineComponents.find(lineComponent => lineComponent.props.id == this.lineId),
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

    this.draggingPosition = {time: this.timeSpan.getStartTime(), lineId: this.lineId};
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
      const newState = {}
      this.clearCurrentDraggingOver()
      if(this.lineId === undefined){
        newState.left = this.initialFloat.left
        newState.top = this.initialFloat.top
        newState.draggingDisplay = this.timeSpan.getStartTime().getDisplayTime()
      } else {
        newState.left = this.props.timeline.getLineLeft(this.lineId);
        newState.top = this.props.timeline.timeToTop(this.timeSpan.getStartTime());
        newState.draggable = false
        newState.draggingDisplay = ''
      }
      this.draggingPosition = null;
      this.setState(newState)
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
  }

  getMinute(){
    if(this.timeSpan){
      return this.timeSpan.getDistance();
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
      this.clearCurrentDraggingOver();
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

  componentDidMount(){
    this.props.timeline.eventComponents.push(this)
  }

  componentWillUnmount(){
    this.props.timeline.eventComponents = this.props.timeline.eventComponents.filter(ev => ev !== this)
    this.clearCurrentDraggingOver()
  }

  clearCurrentDraggingOver(){
    if(!this.draggingPosition) return;
    if(!this.draggingPosition.lineId) return;
    const line = this.props.timeline.findLineById(this.draggingPosition.lineId);
    if(!line) return;
    line.clearDraggingOver()
  }

  correctPosition(){
    if(this.state.draggable){
      const newPos = {}
      // lineを特定する
      var line = this.props.timeline.findLineByLeft(this.state.left)
      // はみ出てたら移動
      if(!line){
        line = this.props.timeline.lastLine
      }

      if(line){
        newPos.left = this.props.timeline.getLineLeft(line.props.id)
        if(this.initialFloat) this.initialFloat.left = newPos.left
        this.draggingPosition.lineId = line.props.id
      }

      // 高さがはみ出てないかチェック
      const bottom = this.props.timeline.timeToTop(this.props.timeline.timeSpan.getEndTime()) - this.state.height
      if(this.state.top > bottom){
        newPos.top = bottom
        if(this.initialFloat) this.initialFloat.top = newPos.top
        const time = this.props.timeline.topToTime(newPos.top)
        this.draggingPosition.time = time
        newPos.draggingDisplay = time.getDisplayTime()
        this.timeSpan = new TimeSpan(time, time.addMin(this.timeSpan.getDistance()))
      }

      if(Object.keys(newPos).length){
        this.setState(newPos)
      }
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
      <div data-id={this.props.id} ref={elem => this.element = elem} onContextMenu={e => this.onContextMenu(e)} className={classNames('tlEventView', {tlDraggingEvent: this.state.draggable, tlResizableEvent: this.state.resizable})} style={style} onClick={e => this.onClick(e)}>
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
          timeline={this.props.timeline}
          right={this.state.left + this.props.width}
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

export default DragSource("Event", source, collect)(Event);
