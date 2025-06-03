/* eslint-disable react/no-unescaped-entities */
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import HelloName from './components/HelloName';
import AlertClick from './components/AlertClick';
import OrderedList from './components/OrderedList';
import FontColor from './components/FontColor';
import SimpleDateStatement from './components/SimpleDateStatement';
import SimpleCounter from './components/SimpleCounter';
import InputToConsole from './components/InputToConsole';
import SimpleToggle from './components/SimpleToggle';
import LoadImgFromProp from './components/LoadImgFromProp';
import HoverDiv from './components/HoverDiv';
import HardCodedState from './components/HardCodedState';
import SelfDisablingButton from './components/SelfDisablingButton';
import FullName from './components/FullName';
import GoodDay from './components/GoodDay';
import TextWithComp from './components/TextWithComp'

function App() {
  const items = ['foo', 'bar'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        React Top 30 Basic Exercises
      </header>
      <section>
        <h2>#1 Create a Hello World component</h2>
        <HelloWorld/>
      </section>
      
      <section>
        <h2>#2 Write a React component that accepts a hardcoded name prop and displays 'Hello, NAME!'.</h2>
        <HelloName name="Stephen"/>
      </section>

      <section>
        <h2>#3 Create a button that, when clicked, displays an alert saying 'Button clicked!'.</h2>
        <AlertClick/>
      </section>

      <section>
        <h2>#4 Build a React component that renders a list of items from a hardcoded array.</h2>
        <OrderedList items={items}/>
      </section>

      <section>
        <h2>#5 Create a component that changes its text color to red when a button is clicked.</h2>
        <FontColor/>
      </section>

      <section>
        <h2>#6 Write a simple React component that shows the current date using JavaScript's Date object.</h2>
        <SimpleDateStatement/>
      </section>

      <section>
        <h2>#7 Build a counter component that increases the count by 1 every time a button is clicked.</h2>
        <SimpleCounter/>
      </section>

      <section>
        <h2>#8 Create a React form with an input field and a submit button that logs the input value to the console.</h2>
        <InputToConsole/>
      </section>

      <section>
        <h2>#9 Write a React component that toggles between 'ON' and 'OFF' when a button is clicked.</h2>
        <SimpleToggle/>
      </section>

      <section>
        <h2>#10 Create a component that displays an image from a given hardcoded URL using props.</h2>
        <LoadImgFromProp uri='https://via.placeholder.com/150'/>
      </section>

      <section>
        <h2>#11 Build a component that changes the background color of a div when hovered over.</h2>
        <HoverDiv/>
      </section>

      <section>
        <h2>#12 Write a React component that conditionally displays 'Logged In' or 'Logged Out' based on a hardcoded boolean state.</h2>
        <HardCodedState isLoggedIn={true}/> 
      </section>

      <section>
        <h2>#13 Create a button that disables itself after being clicked once.</h2>
        <SelfDisablingButton/>
      </section>
      
      <section>
        <h2>#14 Build a component that takes two hardcoded props, firstName and lastName, and displays the full name.</h2>
        <FullName firstName="john" lastName="doe"/>
      </section>

      <section>
        <h2>#15 Write a React component that displays a greeting based on the current hour (e.g., 'Good Morning,' 'Good Afternoon').</h2>
        <GoodDay/>
      </section>

      <section>
        <h1>ReactPractice.dev Questions</h1>
        <TextWithComp/>
      </section>

    </div>
  );
}

export default App;
