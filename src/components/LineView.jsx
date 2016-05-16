import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import HourView from './HourView';
import EventView from './EventView';

export default class LineView extends React.Component
{
  constructor(props) {
    super(props);
    this.timeline = this.props.timeline;
    this.timeline.lines.setLine(this.props.lineId, this);

    this.state = {
      hourViews: [],
      events: [],
      lineHeight: this.timeline.util.lineHeight
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
        <div className="tlHours" style={{height: this.state.lineHeight}}>
          {this.state.hourViews}
          {this.state.events.map(event => {
            return (
              <EventView
                key={event.timeSpan.toString()}
                color={event.color}
                timeSpan={event.timeSpan}
                display={event.display}
                line={this}
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
  timeline: React.PropTypes.any.isRequired
}
