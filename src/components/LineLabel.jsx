import React from 'react';
import Ruler from './Ruler';
import classNames from 'classnames';

export default class LineLabel extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      hasRuler: this.props.hasRuler,
      prevRuler: this.props.prevRuler,
      isLast: true
    }
  }

  componentWillMount(){
    //一つ前のlabelの右角の丸みを取る
    const labelComponents = this.props.timeline.lineLabelComponents;
    if(labelComponents.length){
      labelComponents[labelComponents.length - 1].setState({isLast: false});
    }

    this.props.timeline.addLineLabelComponent(this);
  }

  render(){
    return (
      <div
        style={{width: this.props.width, marginLeft: this.state.hasRuler ? Ruler.width + 'px' : 0}}
        className={classNames({tlLabel: true, tlHasRuler: this.state.hasRuler, tlPrevRuler: this.state.prevRuler || this.state.isLast})}
      >
        {this.props.label}
      </div>
    );
  }
}

LineLabel.height = 16;
