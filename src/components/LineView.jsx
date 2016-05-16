import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import HourView from './HourView';
import EventView from './EventView';
import Lines from '../classes/Lines';

export default class LineView extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      hourViews: [],
      events: []
    }
    this.props.timeSpan.eachTime((key, time) => {
      this.state.hourViews.push(
        <HourView
          key={time.getHour()}
          time={time}
          minHeight={this.props.minHeight}
          onClick={this.props.onClick}
        />
      );
    });

    this.props.lines.setLine(this.props.lineId, this);
  }

  onClick(e){
    if(this.props.onClick){
      const elem = e.currentTarget;
      const lineId = this.props.lineId
      const bounds = elem.getBoundingClientRect();
      const offsetY = e.clientY - bounds.top;
      console.log(lineId, offsetY, bounds.height);
      this.props.onClick();
    }
  }

  addEvents(events){
    var current = this.state.events;
    events.forEach(event => current.push(event));
    this.setState({events: current});
  }

  render(){
    const wrapperStyle = {
      width: this.props.width + 'px'
    }
    return (
      <div className="tlLineView" style={wrapperStyle} onClick={e => this.onClick(e)}>
        <div className="tlHours">
          {this.state.hourViews}
          {this.state.events.map(event => {
            return (
              <EventView
                color={event.color}
                timeSpan={event.timeSpan}
                display={event.display}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

LineView.propTypes = {
  label: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  minHeight: React.PropTypes.number.isRequired,
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
  lineId: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  even: React.PropTypes.bool.isRequired,
  lines: React.PropTypes.instanceOf(Lines).isRequired
}
