import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import Hour from './Hour';
import Ruler from './Ruler';
import LineLabel from './LineLabel';
import classNames from 'classnames';

export default class Line extends React.Component
{
  constructor(props) {
    super(props);
    this.props.timeline.actions.addLineComponent(this);

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
      height: this.props.height + 'px'
    }
  }

  getRelativeTop(e){
    return e.clientY - e.currentTarget.parentNode.offsetTop + e.currentTarget.parentNode.scrollTop;
  }

  onClick(e){
    if(this.props.onClickLine){
      const time = this.props.timeline.actions.topToTime(this.getRelativeTop(e));
      this.props.onClickLine({
        click: e,
        line: this,
        time: time
      });
    }
  }

  render(){
    return (
      <div onClick={e => this.onClick(e)}>
        {(() => {
          if(this.props.hasRuler){
            return (
              <Ruler
                key={'ruler_' + this.props.lineId}
                minHeight={this.props.minHeight}
                timeSpan={this.props.timeSpan}
              />
            )
          }
        })()}
        <div className={classNames('tlLineView', {even: this.props.even, odd: !this.props.even})} style={this.wrapperStyle}>
          {this.state.hours}
        </div>
      </div>
    );
  }
}

Line.propTypes = {
  width: React.PropTypes.number.isRequired,
  minHeight: React.PropTypes.number.isRequired,
  timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
  lineId: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  even: React.PropTypes.bool.isRequired,
  //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
  timeline: React.PropTypes.any.isRequired,
  hasRuler: React.PropTypes.bool.isRequired
}
