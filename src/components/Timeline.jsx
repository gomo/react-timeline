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

  addEvents(events){
    this.actions.frameComponent.addEvents(events);
  }

  setHeight(height){
    this.actions.frameComponent.setHeight(height);
  }

  isFree(eventComponent){
    return this.actions.isFree(eventComponent);
  }

  render(){
    return (
      <Frame
        lineData={this.props.lineData}
        timeSpan={this.props.timeSpan}
        lineWidth={this.props.lineWidth}
        minHeight={this.props.minHeight}
        height={this.props.height}
        onClickLine={this.props.onClickLine}
        onClickEvent={this.props.onClickEvent}
        onClickFloatingEvent={this.props.onClickFloatingEvent}
        timeline={this}
        rulerInterval={this.props.rulerInterval}
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
  onClick: React.PropTypes.func,
  rulerInterval: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
}
