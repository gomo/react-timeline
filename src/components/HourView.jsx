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
          onClick={e => this.onClick(e)}
        >&nbsp;</div>
      );
    }, 15)
  }

  onClick(e){
    console.log(e.clientY, e.currentTarget.getBoundingClientRect(), e.offsetParent);
  }

  render(){
    return (
      <div className="tlHourView">{this.state.minDivs}</div>
    );
  }
}
