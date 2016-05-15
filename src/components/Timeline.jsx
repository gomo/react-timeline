import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import LineView from './LineView';
import RulerView from './RulerView';

export default class Timeline extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      lineData: this.props.lineData
    }
  }

  render(){
    const lines = [];
    this.state.lineData.forEach((data, index) => {
      return (() => {
        if(index % 4 === 0){
          lines.push(<RulerView
            key={'ruler_' + index}
            minHeight={this.props.minHeight}
            timeSpan={this.props.timeSpan}
          />);
        }

        lines.push(<LineView
          label={data.label}
          key={data.id}
          width={this.props.lineWidth}
          minHeight={this.props.minHeight}
          timeSpan={this.props.timeSpan}
        />);
      })()
    })

    return (
      <div className="tlFrameView">
        {lines}
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
