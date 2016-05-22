import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import Hour from './Hour';
import Event from './Event';
import Events from '../classes/Events';

export default class Line extends React.Component
{
  constructor(props) {
    super(props);
    this.timeline = this.props.timeline;
    this.timeline.lines.setLine(this.props.lineId, this);

    this.events = new Events();

    this.state = {
      hours: [],
      events: []
    }
    this.props.timeSpan.eachTime((key, time) => {
      this.state.hours.push(
        <Hour
          key={time.getHour()}
          time={time}
          minHeight={this.props.minHeight}
        />
      );
    });

    this.wrapperStyle = {
      width: this.props.width + 'px',
      height: this.props.height + 'px',
      position: 'relative'
    }
  }

  getRelativeTop(e){
    return e.clientY - e.currentTarget.offsetTop + e.currentTarget.parentNode.scrollTop;
  }

  onClick(e){
    if(this.props.onClick){
      const top = this.getRelativeTop(e);
      const time = this.timeline.util.topToTime(top);
      const event = this.events.find(event => event.props.timeSpan.containsTime(time));
      this.props.onClick({
        click: e,
        line: this,
        event: event
      });
    }
  }

  addEvents(events){
    var current = this.state.events;
    events.forEach(event => current.push(event));
    this.setState({events: current});
  }

  render(){
    return (
      <div className="tlLineView" style={this.wrapperStyle} onClick={e => this.onClick(e)}>
        {this.state.hours}
        {this.state.events.map(event => {
          return (
            <Event
              key={event.timeSpan.toString()}
              color={event.color}
              timeSpan={event.timeSpan}
              display={event.display}
              line={this}
            />
          )
        })}
      </div>
    );
  }
}

Line.propTypes = {
  label: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  minHeight: React.PropTypes.number.isRequired,
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
  lineId: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  even: React.PropTypes.bool.isRequired,
  //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
  timeline: React.PropTypes.any.isRequired
}
