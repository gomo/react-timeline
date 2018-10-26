import React from 'react';
import ReactDOM from 'react-dom';
import {Timeline, Time, TimeSpan} from '../index.js';
import initialEvents from './events';
import ContextMenu from '@gomo/react-context-menu';

class App extends React.Component
{
  constructor(props) {
    super(props)
    this.$wrapper = $('#app')
    this.state = {
      lines: [
        {label:'label1', id:'__1'},
        {label:'label2', id:'__2'},
        {label:'label3', id:'__3'},
        {label:'label4', id:'__4'},
        {label:'label5', id:'__5'},
        {label:'label6', id:'__6'},
        {label:'label7', id:'__7'},
        {label:'label8', id:'__8'},
        {label:'label9', id:'__9'},
        {label:'label10', id:'__10'},
        {label:'label11', id:'__11'},
        {label:'label12', id:'__12'},
        {label:'label13', id:'__13'},
        {label:'label14', id:'__14'},
        {label:'label15', id:'__15'},
        {label:'label16', id:'__16'},
        {label:'label17', id:'__17'},
        {label:'label18', id:'__18'}
      ],
      events: initialEvents,
      timeSpan: TimeSpan.create([10, 0], [25, 0]),
      height: this.calcHeight()
    }

    window.onresize = () => {
      this.setState({height: this.calcHeight()})
    }
  }

  calcHeight(){
    const wrapperBounds = this.$wrapper.get(0).getBoundingClientRect();
    const windowSize = this.getWindowSize();
    return windowSize.height - wrapperBounds.top;
  }

  getWindowSize(){
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  
    const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  
    return {width: width, height: height};
  }

  addEvent(data){
    this.setState({events: [...this.state.events, {
      // id: 99999,
      lineId: data.component.props.id,
      timeSpan: new TimeSpan(data.time, data.time.addMin(60)),
      color: '#FFDCB6',
      display: [
        {key: 'startTime', value: data.time.getDisplayTime()}
      ]
    }]})
  }

  render(){
    return (
      <Timeline
        lineData={this.state.lines}
        timeSpan={this.state.timeSpan}
        initialEvents={this.state.events}
        lineWidth={62}
        minHeight={17}
        minInterval={5}
        rulerInterval={4}
        height={this.state.height}
        lineDidClick={data => this.addEvent(data)}
        lineDidRightClick={data => {
          console.log('right', data);
        }}
        eventDidClick={data => {
          console.log('left', data);
        }}
        eventDidRightClick={data => {
          // data.event.preventDefault();
          // eventMenu.show({top: data.event.clientY, left: data.event.clientX}, data);
        }}
        eventWillFix={data => {
          var display = data.component.state.display.filter(row => row.key != 'startTime');
          display.push({key: 'startTime', value: data.timeSpan.getStartTime().getDisplayTime()})
          data.state.display = display;
        }}
        eventDidFix={data => {
          console.log(data);
        }}
      />
    );
  }
}

$(() => {
  ReactDOM.render(<App />, document.getElementById('app'))
})

