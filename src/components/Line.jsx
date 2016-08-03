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
    this.props.timeline.addLineComponent(this);

    this.state = {
      hours: [],
      events: [],
      draggingOver: false
    }
    this.props.timeSpan.eachTime((key, time) => {
      this.state.hours.push(
        <Hour
          key={time.getHour()}
          time={time}
          minHeight={this.props.minHeight}
        />
      );
    });

    this.vars = this.props.vars || {};
  }

  getRelativeTop(e){
    return e.clientY - e.currentTarget.parentNode.parentNode.offsetTop + e.currentTarget.parentNode.parentNode.scrollTop;
  }

  onClick(e){
    if(this.props.timeline.props.lineDidClick){
      const time = this.props.timeline.topToTime(this.getRelativeTop(e));
      this.props.timeline.props.lineDidClick({
        component: this,
        time: time,
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

  render(){
    return (
      <div onClick={e => this.onClick(e)} onContextMenu={e => this.onContextMenu(e)}>
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
        <div className={classNames('tlLineView', {tlEven: this.props.even, tlOdd: !this.props.even}, {tlOver: this.state.draggingOver})} style={{width: this.props.width + 'px'}}>
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
