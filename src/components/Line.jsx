import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import Hour from './Hour';

export default class Line extends React.Component
{
  constructor(props) {
    super(props);
    this.props.timeline.actions.addLine(this);

    this.state = {
      hours: [],
      events: []
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

    this.wrapperStyle = {
      width: this.props.width + 'px',
      height: this.props.height + 'px',
      position: 'relative'
    }
  }

  getRelativeTop(e){
    return e.clientY - e.currentTarget.offsetTop + e.currentTarget.parentNode.scrollTop;
  }

  onClick(e){
    // if(this.props.onClick){
    //   const top = this.getRelativeTop(e);
    //   const time = this.props.timeline.actions.topToTime(top);
    //   const event = this.props.timeline.actions.findEventWithTime(this.props.lineId, time);
    //   this.props.onClick({
    //     click: e,
    //     line: this,
    //     event: event
    //   });
    // }
  }

  render(){
    return (
      <div className="tlLineView" style={this.wrapperStyle} onClick={e => this.onClick(e)}>
        {this.state.hours}
      </div>
    );
  }
}

Line.propTypes = {
  label: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  minHeight: React.PropTypes.number.isRequired,
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
  lineId: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  even: React.PropTypes.bool.isRequired,
  //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
  timeline: React.PropTypes.any.isRequired
}
