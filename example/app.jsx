import ReactDOM from 'react-dom';
import {Timeline, Time, TimeSpan, Actions} from '../index.es6';


function getWindowSize(){
  const width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  const height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  return {width: width, height: height};
}

function calcHeight(timelineElement){
  const wrapperBounds = timelineElement.getBoundingClientRect();
  const windowSize = getWindowSize();
  return windowSize.height - wrapperBounds.top;
}

window.onload = () => {
  const lineData = [
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
    {label:'label15', id:'__15'}
  ];

  const timeSpan = TimeSpan.create([10, 0], [25, 0]);

  const timelineElement = document.getElementById('timeline');

  const timeline = ReactDOM.render(
    <Timeline
      lineData={lineData}
      timeSpan={timeSpan}
      lineWidth={62}
      minHeight={17}
      minInterval={5}
      rulerInterval={4}
      height={calcHeight(timelineElement)}
      onClickLine={data => {
        console.log(data);
      }}
      onClickEvent={event => {
        event.float();
      }}
      onClickFloatingEvent={event => {
        if(timeline.isFree(event)){
          event.fix();
        } else {
          alert('You can\'t !');
        }
      }}
    />,
    timelineElement
  );


  window.onresize = () => {
    timeline.setHeight(calcHeight(timelineElement));
  };

  timeline.addEvents([
    {lineId: '__1', timeSpan: TimeSpan.create([11, 0], [12, 0]), color: '#FFB6B6'}
  ]);

  timeline.addEvents([
    {lineId: '__2', timeSpan: TimeSpan.create([11, 0], [12, 0]), color: '#FFB6B6'},
    {lineId: '__2', timeSpan: TimeSpan.create([13, 50], [14, 30]), color: '#B8F1AC'},
    {lineId: '__2', timeSpan: TimeSpan.create([12, 0], [13, 30]), color: '#FFDCB6'}
  ]);

  timeline.addEvents([
    {lineId: '__3', timeSpan: TimeSpan.create([13, 0], [14, 0]), color: '#FFB6B6'},
    {lineId: '__3', timeSpan: TimeSpan.create([14, 15], [15, 30]), color: '#B8F1AC'}
  ]);

  timeline.addEvents([
    {lineId: '__5', timeSpan: TimeSpan.create([12, 0], [14, 0]), color: '#FFB6B6'}
  ]);
}
