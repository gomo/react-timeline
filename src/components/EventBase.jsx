import React from 'react';
import classNames from 'classnames';

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
    return (
      <div style={{height: '100%'}}>
        {(() => {
          if(this.props.draggingDisplay){
            return (<div className="tlDraggingDisplay" style={{top: this.props.draggingDisplayTop}}>{this.props.draggingDisplay}</div>);
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
