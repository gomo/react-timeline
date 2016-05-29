import React from 'react';
import classNames from 'classnames';

export default class EventBase extends React.Component
{
  render(){
    return (
      <div>
        {(() => {
          if(this.props.draggingDisplay){
            return (<div className="tlDraggingDisplay">{this.props.draggingDisplay}</div>);
          }
        })()}
        &nbsp;
      </div>
    );
  }
}
