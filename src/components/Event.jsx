import React from 'react';
import classNames from 'classnames';
import TimeSpan from '../classes/TimeSpan';

export default class Event extends React.Component
{
  constructor(props) {
    super(props);
    this.line = this.props.line;

    this.state = {
      height: this.line.timeline.util.timeSpanToHeight(this.props.timeSpan),
      top: 0,
      color: this.props.color
    }
  }

  componentDidMount(){
    const targetTop = this.line.timeline.util.timeToTop(this.props.timeSpan.getStartTime());
    this.initialBounds = this.refs.eventElem.getBoundingClientRect();
    this.setState({top: -this.initialBounds.top + targetTop + this.refs.eventElem.parentElement.offsetTop});
  }

  render(){
    const style = {
      height: this.state.height,
      position: 'relative',
      top: this.state.top + 'px',
      backgroundColor: this.state.color
    };

    return (
      <div ref="eventElem" className="tlEventView" style={style}>
        &nbsp;
      </div>
    );
  }
}

Event.propTypes = {
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
  color: React.PropTypes.string.isRequired,
  //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
  line: React.PropTypes.any.isRequired
}
