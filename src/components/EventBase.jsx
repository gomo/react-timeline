import React from 'react';
import classNames from 'classnames';
import {closest} from '../utils';

export default class EventBase extends React.Component
{
  renderDisplay(row){
    if(!row.value){
      return null;
    }

    const className = classNames('tlEventDisplayRow', row.key);
    if(Array.isArray(row.value)){
      if(row.value.length === 0){
        return null;
      }

      return (
        <div className={className} key={row.key}>
          {row.value.map((val, key) => <div key={key} className="item">{val}</div>)}
        </div>
      )
    }

    return(
      <div className={className} key={row.key}>
        {row.value}
      </div>
    )
  }
  render(){
    let displayPosition = 'left';
    if(this.props.timeline.getTotalWidth() > this.props.right + 70){
      displayPosition = 'right';
    }
    return (
      <div ref="base" style={{height: '100%'}}>
        {(() => {
          if(this.props.draggingDisplay){
            return (<div className={classNames('tlDraggingDisplay', displayPosition)} style={{top: this.props.draggingDisplayTop}}>{this.props.draggingDisplay}</div>);
          }
        })()}
        <div className="tlEventDisplay">
          {this.props.display.map(row => this.renderDisplay(row))}
        </div>
        &nbsp;
      </div>
    );
  }
}

EventBase.defaultProps = {display: []};
