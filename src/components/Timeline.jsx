import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import Actions from '../classes/Actions';
import Frame from './Frame';

export default class Timeline extends React.Component
{
  constructor(props) {
    super(props);
    this.actions = new Actions({
      timeSpan: this.props.timeSpan,
      minHeight: this.props.minHeight,
      lineWidth: this.props.lineWidth
    });
  }

  render(){
    return (
      <Frame
        lineData={this.props.lineData}
        timeSpan={this.props.timeSpan}
        lineWidth={this.props.lineWidth}
        minHeight={this.props.minHeight}
        onClick={this.props.onClick}
        timeline={this}
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
  onClick: React.PropTypes.func
}
