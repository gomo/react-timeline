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
              <div className={classNames('tlEventDisplayRow', row.key)} key={row.key}>
                {Array.isArray(row.value) ? row.value.map((val, key) => <div key={key} className="item">{val}</div>) : row.value}
              </div>
            )
          })}
        </div>
        &nbsp;
      </div>
    );
  }
}
