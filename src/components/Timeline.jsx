import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import TimelineActions from '../classes/TimelineActions';
import Frame from './Frame';
import Ruler from './Ruler';
import Line from './Line';

export default class Timeline extends React.Component
{
  constructor(props) {
    super(props);
    this.actions = new TimelineActions(this);

    //MinViewは一時間下に余分が生成されるので60分プラス
    this.timeSpan = this.props.timeSpan.addMin(60);

    //minViewがいくつあるかカウント。minViewは15分おき。それを元に高さを計算。border分1px足す
    this.lineHeight = (this.timeSpan.getDistance() / 15) * (this.props.minHeight + 1);

    //1分あたりの高さを算出
    this.perMinHeight = this.lineHeight / this.timeSpan.getDistance();

    this.lineWidth = props.lineWidth;

    this.frameComponent = null;
    this.createdEventId = 0;
    this.draggingOverLineConponent = null;
    this.lineComponents = [];
    this.eventComponents = [];
    this.lineLabelComponents = [];
  }

  createEventId(){
    return 'new_' + (++this.createdEventId);
  }

  draggingOver(left){
    const lineComponent = this.findLineByLeft(left);
    if(lineComponent && this.draggingOverLineConponent !== lineComponent){
      if(this.draggingOverLineConponent){
        this.draggingOverLineConponent.clearDraggingOver();
      }
      this.draggingOverLineConponent = lineComponent;
      this.draggingOverLineConponent.draggingOver();
    }

    return lineComponent;
  }

  clearDraggingOver(){
    if(this.draggingOverLineConponent){
      this.draggingOverLineConponent.clearDraggingOver();
    }
  }

  getTotalWidth(){
    return this.lineComponents.reduce((val, line) => {
      return val + (line.props.hasRuler ? this.lineWidth + Ruler.width : this.lineWidth);
    }, 0);
  }

  addEventComponent(event){
    this.eventComponents.push(event);
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

    for (var i = 0; i < this.lineComponents.length; i++) {
      var line = this.lineComponents[i];
      if(line.props.hasRuler){
        left += Ruler.width;
      }

      if(line.props.lineId == lineId){
        break;
      }

      left += this.props.lineWidth;
    }

    left += Line.sidePadding;

    return left;
  }

  addLineComponent(line){
    this.lineComponents.push(line);
  }

  addLineLabelComponent(line){
    this.lineLabelComponents.push(line);
  }

  getTimeSpan(top, height){
    const startTime = this.topToTime(top);

    const endTime = startTime.addMin(height / this.perMinHeight);
    return new TimeSpan(startTime, endTime);
  }

  timeSpanToHeight(timeSpan){
    return (timeSpan.getDistance() * this.perMinHeight) - 1;
  }

  timeToTop(time){
    return this.timeSpan.getStartTime().getDistance(time) * this.perMinHeight;
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
      .filter(ev => ev.lineId == eventComponent.lineId)//同じ列のものだけに絞る
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
    return this.eventComponents
      .filter(ev => ev.lineId == eventComponent.lineId)//同じ列のものだけに絞る
      .sort((a, b) => a.currentTimeSpan.getStartTime().compare(b.currentTimeSpan.getStartTime()))//時間の昇順で並び替え
      .find(ev => ev.currentTimeSpan.getStartTime().compare(eventComponent.currentTimeSpan.getEndTime()) >= 0)//昇順なので対象より最初に開始時間が遅いものがnext
      ;
  }

  getNextTop(eventComponent){
    const nextEvent = this.findNextEvent(eventComponent);
    let nextTime;
    if(nextEvent){
      nextTime = nextEvent.currentTimeSpan.getStartTime();
    } else {
      nextTime = this.timeSpan.getEndTime();
    }

    return this.timeToTop(nextTime);
  }

  render(){
    return (
      <Frame
        lineData={this.props.lineData}
        timeSpan={this.props.timeSpan}
        lineWidth={this.props.lineWidth}
        minHeight={this.props.minHeight}
        height={this.props.height}
        onClickLine={this.props.onClickLine}
        onClickEvent={this.props.onClickEvent}
        onClickFlexibleEvent={this.props.onClickFlexibleEvent}
        timeline={this}
        rulerInterval={this.props.rulerInterval}
      />
    );
  }
}

Timeline.propTypes = {
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
  lineData: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  })).isRequired,
  lineWidth: React.PropTypes.number.isRequired,
  minHeight: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func,
  rulerInterval: React.PropTypes.number.isRequired,
  minInterval: React.PropTypes.number,
  height: React.PropTypes.number.isRequired
}

Timeline.defaultProps = {
  minInterval: 1
}
