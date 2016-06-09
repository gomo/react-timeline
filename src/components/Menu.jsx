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
    document.getElementsByTagName('body')[0].addEventListener('click', (e) => {
      var rect = this.refs.menu.getBoundingClientRect();
      //メニューの外クリックで閉じる
      if(e.clientX < rect.left || e.clientX > rect.left + rect.width || e.clientY < rect.top || e.clientY > rect.top + rect.height ){
        this.close();
      }
    });
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
      <div ref="menu" className="rmMenu" style={this.state.style}>
        <ul className="rmMenuItemList">
          {this.state.context ? this.props.items.map((item, key) => {
            if(!item.show || item.show(this.state.context)){
              return (
                <MenuItem
                  key={key}
                  name={item.name(this.state.context)}
                  onClick={item.onClick}
                  menu={this}
                  enable={item.enable ? item.enable(this.state.context) : true}
                />
              )
            }
          }) : null}
        </ul>
      </div>
    );
  }
}
