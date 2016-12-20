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

  render(){
    return (
      <div
        style={{width: this.props.width, marginLeft: this.state.hasRuler ? Ruler.width + 'px' : 0}}
        className={classNames({tlLabel: true, tlHasRuler: this.state.hasRuler, tlPrevRuler: this.state.prevRuler, tlLast: this.state.isLast})}
      >
        {this.props.label}
      </div>
    );
  }
}

LineLabel.height = 16;
