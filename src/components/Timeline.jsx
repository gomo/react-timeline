import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import Frame from './Frame';
import Ruler from './Ruler';
import Line from './Line';

export default class Timeline extends React.Component
{
  constructor(props) {
    super(props);


    this.timeSpan = this.props.timeSpan;

    //minViewがいくつあるかカウント。minViewは15分おき。それを元に高さを計算。border分1px足す
    this.lineHeight = (this.timeSpan.getDistance() / 15) * (this.props.minHeight + 1);

    //1分あたりの高さを算出
    this.perMinHeight = this.lineHeight / this.timeSpan.getDistance();

    this.lineWidth = props.lineWidth;

    this.createdEventId = 0;
    this.draggingOverLineComponent = null;
  }

  get eventComponents(){
    const events = [];

    for(var key in this.frameComponent.refs){
      if(key.indexOf("event@") === 0){
        events.push(this.frameComponent.refs[key].getDecoratedComponentInstance());
      }
    }

    return events;
  }

  get frameComponent(){
    return this.refs.frame.getDecoratedComponentInstance().getDecoratedComponentInstance();
  }

  get lineComponents(){
    const lines = [];
    for(var key in this.frameComponent.refs){
      if(key.indexOf("line@") === 0){
        lines.push(this.frameComponent.refs[key]);
      }
    }

    return lines;
  }

  createEventId(){
    return 'new_' + (++this.createdEventId);
  }

  draggingOver(left){
    const lineComponent = this.findLineByLeft(left);
    if(lineComponent){
      if(this.draggingOverLineComponent !== lineComponent){
        if(this.draggingOverLineComponent){
          this.draggingOverLineComponent.clearDraggingOver();
        }
        this.draggingOverLineComponent = lineComponent;
        this.draggingOverLineComponent.draggingOver();
      }
    } else {
      if(this.draggingOverLineComponent){
        this.draggingOverLineComponent.clearDraggingOver();
        this.draggingOverLineComponent = null;
      }
    }

    return lineComponent;
  }

  clearDraggingOver(){
    if(this.draggingOverLineComponent){
      this.draggingOverLineComponent.clearDraggingOver();
    }
  }

  getTotalWidth(){
    return this.props.lineData.reduce((val, data, index) => {
      const hasRuler = index % this.props.rulerInterval === 0;
      return val + (hasRuler ? this.lineWidth + Ruler.width : this.lineWidth);
    }, 0);
  }

  findEventById(eventId){
    return this.eventComponents.find(ev => ev.props.id == eventId);
  }

  findLineByLeft(left){
    var width = 0;
    return this.lineComponents.find(line => {
      width += line.props.hasRuler ? this.props.lineWidth + Ruler.width : this.props.lineWidth;
      if(left < width){
        return line;
      }
    });
  }

  getLineLeft(lineId){
    let left = 0;
    for (var i = 0; i < this.props.lineData.length; i++) {
      const lineData = this.props.lineData[i];
      const hasRuler = i % this.props.rulerInterval === 0;
      if(hasRuler){
        left += Ruler.width;
      }

      if(lineData.id == lineId){
        break;
      }

      left += this.props.lineWidth;
    }

    left += Line.sidePadding;

    return left;
  }

  getTimeSpan(top, height){
    const startTime = this.topToTime(top);

    const endTime = startTime.addMin(height / this.perMinHeight);
    return new TimeSpan(startTime, endTime);
  }

  minuteToHeight(minute){
    return (minute * this.perMinHeight) - 1;
  }

  timeSpanToHeight(timeSpan){
    return this.minuteToHeight(timeSpan.getDistance());
  }

  timeToTop(time){
    return this.timeSpan.getStartTime().getDistance(time) * this.perMinHeight - 1;
  }

  topToTime(top){
    if(top <= 0){
      return this.timeSpan.getStartTime();
    }
    let minute = top / this.perMinHeight;
    const rest = minute % this.props.minInterval;
    if(rest !== 0){
      if(rest > this.props.minInterval / 2){
        minute += this.props.minInterval - rest;
      } else {
        minute -= rest;
      }
    }
    return this.timeSpan.getStartTime().addMin(minute);
  }

  findPrevEvent(eventComponent){
    return this.eventComponents
      .filter(ev => !ev.state.draggable && ev.lineId == eventComponent.lineId)//同じ列のものだけに絞る
      .sort((a, b) => -(a.currentTimeSpan.getStartTime().compare(b.currentTimeSpan.getStartTime())))//時間の降順で並び替え
      .find(ev => ev.currentTimeSpan.getEndTime().compare(eventComponent.currentTimeSpan.getStartTime()) <= 0)//降順なので対象より最初に開始時間が若いものがprev
      ;
  }

  getPrevBottom(eventComponent){
    const prevEvent = this.findPrevEvent(eventComponent);
    let bottomTime;
    if(prevEvent){
      bottomTime = prevEvent.currentTimeSpan.getEndTime();
    } else {
      bottomTime = this.timeSpan.getStartTime();
    }

    return this.timeToTop(bottomTime);
  }

  findNextEvent(eventComponent){
    return this.findNextEventByTime(eventComponent.lineId, eventComponent.currentTimeSpan.getEndTime());
  }

  findNextEventByTime(lineId, time){
    return this.eventComponents
      .filter(ev =>  !ev.state.draggable && ev.lineId == lineId)//同じ列のものだけに絞る
      .sort((a, b) => a.currentTimeSpan.getStartTime().compare(b.currentTimeSpan.getStartTime()))//時間の昇順で並び替え
      .find(ev => ev.currentTimeSpan.getStartTime().compare(time) >= 0)//昇順なので対象より最初に開始時間が遅いものがnext
      ;
  }

  getNextTime(lineId, time){
    const nextEvent = this.findNextEventByTime(lineId, time);
    let nextTime;
    if(nextEvent){
      nextTime = nextEvent.currentTimeSpan.getStartTime();
    } else {
      nextTime = this.timeSpan.getEndTime();
    }

    return nextTime;
  }

  getFreeMinute(lineId, time){
    const nextTime = this.getNextTime(lineId, time);
    return time.getDistance(nextTime);
  }

  getNextTop(eventComponent){
    return this.timeToTop(this.getNextTime(eventComponent.lineId, eventComponent.currentTimeSpan.getEndTime()));
  }
  addEvents(events){
    return this.frameComponent.addEvents(events);
  }

  setHeight(height){
    this.frameComponent.setHeight(height);
  }

  removeEvent(eventId){
    this.frameComponent.removeEvent(eventId);
  }

  updateEvents(callback){
    this.frameComponent.updateEvents(callback);
  }

  render(){
    return (
      <Frame
        ref="frame"
        lineData={this.props.lineData}
        timeSpan={this.props.timeSpan}
        lineWidth={this.props.lineWidth}
        minHeight={this.props.minHeight}
        height={this.props.height}
        width={this.props.width}
        lineHeight={this.lineHeight}
        timeline={this}
        rulerInterval={this.props.rulerInterval}
        initialEvents={this.props.initialEvents}
      />
    );
  }
}

// Timeline.propTypes = {
//   timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
//   lineData: React.PropTypes.arrayOf(React.PropTypes.shape({
//     id: React.PropTypes.string.isRequired,
//     label: React.PropTypes.string.isRequired
//   })).isRequired,
//   lineWidth: React.PropTypes.number.isRequired,
//   minHeight: React.PropTypes.number.isRequired,
//   onClick: React.PropTypes.func,
//   rulerInterval: React.PropTypes.number.isRequired,
//   minInterval: React.PropTypes.number,
//   height: React.PropTypes.number.isRequired
// }

Timeline.defaultProps = {
  minInterval: 1
}
