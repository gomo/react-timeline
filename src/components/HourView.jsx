import React from 'react';
import Time from '../classes/Time'
import classNames from 'classnames';

export default class HourView extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      minDivs: []
    }

    const minStyle = {
      height: this.props.minHeight + 'px'
    }
    Time.eachMin((key, min) => {
      this.state.minDivs.push(
        <div
          key={min}
          className={classNames('tlMinView', '_' + (min + 15))}
          style={minStyle}
        >&nbsp;</div>
      );
    }, 15)
  }

  render(){
    return (
      <div className="tlHourView">{this.state.minDivs}</div>
    );
  }
}

HourView.propTypes = {
  minHeight: React.PropTypes.number.isRequired,
  time: React.PropTypes.instanceOf(Time).isRequired
}
