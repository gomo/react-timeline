import React from 'react';
import TimeSpan from '../classes/TimeSpan';
import LineView from './LineView';
import RulerView from './RulerView';
import classNames from 'classnames';
import Lines from '../classes/Lines';

export default class Timeline extends React.Component
{
  static get windowSize(){
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    return {width: width, height: height};
  }

  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      labels: [],
      frameHeight: this.props.frameHeight
    }

    this.lines = new Lines();

    const rulerInterval = 4;

    //TODO 後から追加できる様にメソッドに抽出
    props.lineData.forEach((data, index) => {
      const labelClass = {tlLabel: true, tlHasRuler: false, tlPrevRuler: false}
      const currentKey = index % rulerInterval;
      if(currentKey === 0){
        this.state.lines.push(<RulerView
          key={'ruler_' + index}
          minHeight={this.props.minHeight}
          timeSpan={this.props.timeSpan}
        />);

        labelClass.tlHasRuler = true;
      } else if(currentKey === rulerInterval - 1) {
        labelClass.tlPrevRuler = true;
      }

      this.state.labels.push(
        <div style={{width: this.props.lineWidth}} className={classNames(labelClass)} key={index}>{data.label}</div>
      );

      var line = <LineView
        label={data.label}
        key={data.id}
        lineId={data.id}
        width={this.props.lineWidth}
        minHeight={this.props.minHeight}
        timeSpan={this.props.timeSpan}
        onClick={this.props.onClick}
        even={index % 2 !== 0}
        lines={this.lines}
      />;

      this.lines[data.id] = line;
      this.state.lines.push(line);
    })
  }

  fitToWindow(){
    const wrapperBounds = this.refs.linesWrapper.getBoundingClientRect();
    const windowSize = Timeline.windowSize;
    this.setState({frameHeight: windowSize.height - wrapperBounds.top});
  }

  componentDidMount(){
    this.fitToWindow();
    window.addEventListener('resize', event => {
      this.fitToWindow();
    });
  }

  render(){
    return (
      <div className="tlFrameView">
        <div className="tlLabelView">{this.state.labels}</div>
        <div ref="linesWrapper" className="tlLinesWrapper" style={{height: this.state.frameHeight}}>{this.state.lines}</div>
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
  minHeight: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func
}
