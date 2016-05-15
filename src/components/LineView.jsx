import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import HourView from './HourView';

export default class LineView extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      hourViews: []
    }
    this.props.timeSpan.eachTime((key, time) => {
      this.state.hourViews.push(<HourView key={time.getHour()} time={time} minHeight={this.props.minHeight} />);
    });
  }

  render(){
    const wrapperStyle = {
      width: this.props.width + 'px'
    }

    return (
      <div className="tlLineView" style={wrapperStyle}>{this.state.hourViews}</div>
    );
  }
}

LineView.propTypes = {
  label: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  minHeight: React.PropTypes.number.isRequired,
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired
}
