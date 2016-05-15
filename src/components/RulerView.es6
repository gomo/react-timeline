import React from 'react';
import TimeSpan from '../classes/TimeSpan';

export default class LineView extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      hours: []
    }
    this.props.timeSpan.eachTime((key, time) => {
      const style = {
        height: this.props.minHeight * 4 + 1
      }
      this.state.hours.push(
        <div key={time.getHour()} style={style}>{time.getDisplayHour()}</div>
      );
    });
  }

  render(){
    return (
      <div className="tlRulerView">{this.state.hours}</div>
    );
  }
}

LineView.propTypes = {
  minHeight: React.PropTypes.number.isRequired,
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired
}
