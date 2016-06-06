import React from 'react';
import assign from 'object-assign'
import MenuItem from './MenuItem'

export default class Menu extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: 'absolute',
        display: 'none',
        zIndex: this.props.zIndex
      }
    };
    document.getElementsByTagName('body')[0].addEventListener('click', () => {this.close()});
  }

  show(pos, context){
    this.setState({
      style: assign({}, this.state.style, pos, {display: 'block'}),
      context: context
    });
  }

  onMouseOut(){
    console.log('out');
  }

  onMouseOver(){
    console.log('over');
  }

  close(){
    this.setState({style: assign({}, this.state.style, {display: 'none'})});
  }

  render(){
    return (
      <div className="rmMenu" style={this.state.style}>
        <ul className="rmMenuItemList">
          {this.state.context ? this.props.items.map((item, key) => {
            if(!item.show || item.show(this.state.context)){
              return (
                <MenuItem
                  key={key}
                  name={item.name(this.state.context)}
                  onClick={item.onClick}
                  menu={this}
                />
              )
            }
          }) : null}
        </ul>
      </div>
    );
  }
}
