import React from 'react';
import classNames from 'classnames';

export default class EventBase extends React.Component
{
  render(){
    return (
      <div style={{height: '100%'}}>
        {(() => {
          if(this.props.draggingDisplay){
            return (<div className="tlDraggingDisplay" style={{top: this.props.draggingDisplayTop}}>{this.props.draggingDisplay}</div>);
          }
        })()}
        <div className="tlEventDisplay">
          {this.props.display.map(row => {
            return(
              <div className={classNames('tlEventDisplayRow', row.key)} key={row.key}>{row.value}</div>
            )
          })}
        </div>
        &nbsp;
      </div>
    );
  }
}
