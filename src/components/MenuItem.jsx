import React from 'react';
import classNames from 'classnames';

export default class MenuItem extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    };
  }

  onMouseOut(){
    this.setState({mouseOver: false});
  }

  onMouseOver(){
    this.setState({mouseOver: true});
  }

  onClick(e){
    this.props.onClick(this.props.menu.state.context);
    this.props.menu.close();
  }

  render(){
    return (
      <li
        className={classNames("rmMenuItem", {rmMouseOver: this.state.mouseOver})}
        onMouseOver={e => this.onMouseOver(e)}
        onMouseOut={e => this.onMouseOut(e)}
        onClick={e => this.onClick(e)}
      >
        {this.props.name}
      </li>
    );
  }
}
