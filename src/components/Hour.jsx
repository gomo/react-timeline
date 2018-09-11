import React from 'react';
import Time from '../classes/Time'
import classNames from 'classnames';

export default class Hour extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      minutes: []
    }

    const minStyle = {
      height: this.props.minHeight + 'px'
    }
    Time.eachMin((key, min) => {
      this.state.minutes.push(
        <div
          key={min}
          className={classNames('tlMinView', 'tl' + min)}
          style={minStyle}
        >&nbsp;</div>
      );
    }, 15)
  }

  render(){
    return (
      <div className={classNames('tlHourView', 'tl' + this.props.time.getHour())}>{this.state.minutes}</div>
    );
  }
}

// Hour.propTypes = {
//   minHeight: React.PropTypes.number.isRequired,
//   time: React.PropTypes.instanceOf(Time).isRequired
// }
