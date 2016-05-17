import React from 'react';
import TimeSpan from '../classes/TimeSpan';

export default class Ruler extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      hours: []
    }
    this.props.timeSpan.eachTime((key, time) => {
      const style = {
        //border1pxを足す
        height: (this.props.minHeight + 1) * 4
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

Ruler.propTypes = {
  minHeight: React.PropTypes.number.isRequired,
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired
}
