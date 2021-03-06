import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import Hour from './Hour';
import Ruler from './Ruler';
import LineLabel from './LineLabel';
import classNames from 'classnames';
import Timeline from './Timeline';

export default class Line extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      hours: [],
      events: [],
      draggingOver: false
    }
    this.props.timeSpan.eachTime((key, time) => {
      if(!time.equals(this.props.timeSpan.getEndTime())){
        this.state.hours.push(
          <Hour
            key={time.getHour()}
            time={time}
            minHeight={this.props.minHeight}
          />
        );
      }
    });

    this.vars = this.props.vars || {};
  }

  getRelativeTop(e){
    const parentElement = this.props.frame.refs.linesWrapper;
    const parentRect = parentElement.getBoundingClientRect();
    return e.clientY - parentRect.top + parentElement.scrollTop;
  }

  onClick(e){
    if(this.props.timeline.props.lineDidClick){
      const time = this.props.timeline.topToTime(this.getRelativeTop(e));
      this.props.timeline.props.lineDidClick({
        component: this,
        time: time,
        freeMinute: this.props.timeline.getFreeMinute(this.props.id, time),
        position: {
          scrollTop: this.props.timeline.frameComponent.refs.linesWrapper.scrollTop,
          scrollLeft: this.props.timeline.frameComponent.element.scrollLeft,
          top: e.clientY,
          left: e.clientX,
        },
        event: e
      });
    }
  }

  onContextMenu(e){
    if(this.props.timeline.props.lineDidRightClick){
      this.props.timeline.props.lineDidRightClick({
        event: e,
        component: this
      });
    }
  }

  draggingOver(){
    this.setState({draggingOver: true});
  }

  clearDraggingOver(){
    this.setState({draggingOver: false});
  }

  componentWillUnmount(){
    if(this.props.timeline.draggingOverLineComponent == this){
      this.props.timeline.draggingOverLineComponent = undefined
    }
  }

  render(){
    return (
      <div className="tlLineWrapper" data-id={this.props.id} onContextMenu={e => this.onContextMenu(e)}>
        {(() => {
          if(this.props.hasRuler){
            return (
              <Ruler
                key={'ruler_' + this.props.id}
                minHeight={this.props.minHeight}
                timeSpan={this.props.timeSpan}
              />
            )
          }
        })()}
        <div onClick={e => this.onClick(e)} className={classNames('tlLineView', {tlEven: this.props.even, tlOdd: !this.props.even}, {tlOver: this.state.draggingOver})} style={{width: this.props.width + 'px'}}>
          {this.state.hours}
        </div>
      </div>
    );
  }
}

Line.sidePadding = 1;

// Line.propTypes = {
//   width: React.PropTypes.number.isRequired,
//   minHeight: React.PropTypes.number.isRequired,
//   timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
//   id: React.PropTypes.string.isRequired,
//   onClick: React.PropTypes.func,
//   even: React.PropTypes.bool.isRequired,
//   //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
//   timeline: React.PropTypes.any.isRequired,
//   hasRuler: React.PropTypes.bool.isRequired
// }
