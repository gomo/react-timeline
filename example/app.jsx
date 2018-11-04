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
    this.eventMenu = null
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

    this.lastLineId = 18
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

  generateEventId(){
    this.lastEventId = this.lastEventId||0
    this.lastEventId += 1
    return 'new_' + this.lastEventId
  }

  addEvent(data){
    this.setState({events: [...this.state.events, {
      id: this.generateEventId(),
      lineId: data.component.props.id,
      timeSpan: new TimeSpan(data.time, data.time.addMin(60)),
      color: '#FFDCB6',
      display: [
        {key: 'startTime', value: data.time.getDisplayTime()}
      ]
    }]})
  }

  addLine(){
    ++this.lastLineId
    this.setState({lines: [...this.state.lines, {
      label:'label' + this.lastLineId, id:'__' + this.lastLineId
    }]})
  }

  removeLine(id){
    this.setState({lines: this.state.lines.filter(line => line.id != id)})
  }

  removeEvent(id){
    this.setState({events: this.state.events.filter(event => event.id != id)})
  }

  render(){
    return (
      <div>
        <div style={{marginBottom: '20px'}}>
          <button onClick={() => this.addLine()}>LINEを追加</button>
        </div>
        <ContextMenu
          ref={menu => this.eventMenu = menu}
          items={[
            {
              name: context => 'float',
              onClick: context => context.component.float(),
              show: context => context.component.constructor.name == 'Event' && context.component.isFixed()
            },
            {
              name: context => 'resize',
              onClick: context => context.component.resize(),
              show: context => context.component.constructor.name == 'Event' && context.component.isFixed()
            },
            {
              name: context => 'cancel',
              onClick: context => context.component.cancel(),
              show: context => context.component.constructor.name == 'Event' && !context.component.isFixed()
            },
            {
              name: context => 'fix',
              onClick: context => context.component.fix(),
              show: context => context.component.constructor.name == 'Event' && !context.component.isFixed()
            },
            {
              name: context => '-',
              show: context => context.component.constructor.name == 'Event',
            },
            {
              name: context => 'remove',
              onClick: context => {
                const timeline = context.component.props.timeline
                if(context.component.constructor.name == 'Line'){
                  this.removeLine(context.component.props.id)
                } else {
                  this.removeEvent(context.component.props.id)
                }
              },
              enable: context => {
                const timeline = context.component.props.timeline
                if(context.component.constructor.name == 'Line'){
                  return true
                  const events = timeline.getEventsOnLine(context.component.props.id)
                  return events.length === 0
                } else {
                  return true
                }
              }
            }
          ]}
          zIndex={1000}
        />
        <Timeline
          lineData={this.state.lines}
          timeSpan={this.state.timeSpan}
          events={this.state.events}
          lineWidth={62}
          minHeight={17}
          minInterval={5}
          rulerInterval={4}
          height={this.state.height}
          lineDidClick={data => this.addEvent(data)}
          lineDidRightClick={data => {
            data.event.preventDefault();
            this.eventMenu.show({top: data.event.clientY, left: data.event.clientX}, data);
          }}
          eventDidClick={data => {
            console.log('left', data);
          }}
          eventDidRightClick={data => {
            data.event.preventDefault();
            this.eventMenu.show({top: data.event.clientY, left: data.event.clientX}, data);
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
      </div>
    );
  }
}

$(() => {
  ReactDOM.render(<App />, document.getElementById('app'))
})
