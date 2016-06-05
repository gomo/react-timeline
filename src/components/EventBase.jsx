import React from 'react';
import classNames from 'classnames';

export default class EventBase extends React.Component
{
  render(){
    return (
      <div>
        {(() => {
          if(this.props.draggingDisplay){
            return (<div className="tlDraggingDisplay" style={{top: this.props.draggingDisplayTop}}>{this.props.draggingDisplay}</div>);
          }
        })()}
        {this.props.display.map(row => {
          return(
            <div className={classNames('tlEventDisplayRow', row.key)} key={row.key}>{row.value}</div>
          )
        })}
        &nbsp;
      </div>
    );
  }
}

EventBase.defaultProps = {
  display: []
}
