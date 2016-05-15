import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import LineView from './LineView';

export default class Timeline extends React.Component
{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="tlFrameView">
        {this.props.lineData.map((data, index) => {
          return (
            <LineView
              label={data.label}
              key={data.id}
              width={this.props.lineWidth}
              minHeight={this.props.minHeight}
              timeSpan={this.props.timeSpan}
            />
          )
        })}
      </div>
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
  minHeight: React.PropTypes.number.isRequired
}
