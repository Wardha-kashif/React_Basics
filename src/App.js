import Hello from './components/HelloWorld';
import Student from './components/Student';
import Headers from './components/Header';
import CounterApp from './components/counterApp'
import CounterFunction from './components/CounterApp_Functinal';
import Parent from './components/getDerivedState';
import CmpMount from './components/componentDidmount';
import API from './components/ApiCall';
import Cmpupdate from './components/shouldcompupdate';
import Snp from './components/getsnapshotbeforeupd';
import Eventhandling from './components/Eventhanling';
import ComponentWillUnmount from './components/unmount';
import LoginControl from './components/ConditionalRendering';
import Number from './components/List_and_keys';
import Blog from './components/keyamongsibling';
import React from 'react';
import NameForm from './components/Forms';
import './App.css';

class App extends React.Component {

  render() {
    const posts = [
      { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
      { id: 2, title: 'Installation', content: 'You can install React from npm.' }
    ];
    return (

      <div>

        {/*How to Use props in Appliaction  */}
        <h1>Data Coming From Hello Component</h1>
        <Hello name="wardha" />
        <Hello name="Sara" />

        {/* Using a Student Component */}
        <h1>Data Coming From Student Component</h1>
        <Student qualification="Software Engineer" />


        {/* Using React Class Component */}
        <Headers />

        {/* using Counter Component */}

        <h1>This is the Counter Application</h1>
        <CounterApp />

        {/* Counter App by Functional Component  */}
        <CounterFunction />

        {/* Lifecycle Methods */}
        <Parent />

        {/* Using ComponentDidMount */}
        <CmpMount />

        {/* calling an API and call th users */}
        <API />

        {/* Should component update when props and states update */}
        <Cmpupdate />

        {/*  getSnapshotBeforeUpdateMethod  is used in this  */}
        <Snp />

        {/* componentWillUnmount will use here  */}
        <ComponentWillUnmount />

        {/* Event Handling */}
        <Eventhandling />

        {/* Conditional Rendering */}
        <LoginControl />

        {/* Numbers  */}
        <Number />

        {/*  List and Keys */}
        <Blog posts={posts} />

        {/* Name Forms  */}
        <NameForm />
      </div>
    );
  }
}


export default App;
