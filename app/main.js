import React    from 'react';
import Hello    from './component';
import {render} from "react-dom";
import maincss  from './main.css';
import {Router, Route, Link ,IndexRoute,Redirect} from 'react-router'

console.log(Router,Route,Link);
// 
// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })
//
// const About = React.createClass({
//   render() {
//     return <h3>About</h3>
//   }
// })
//
// const Inbox = React.createClass({
//   render() {
//     return (
//       <div>
//         <h2>Inbox</h2>
//         {this.props.children || "Welcome to your Inbox"}
//       </div>
//     )
//   }
// })
//
// const Message = React.createClass({
//   render() {
//     return <h3>Message {this.props.params.id}</h3>
//   }
// })
//
// const Dashboard = React.createClass({
//   render() {
//     return <div>Welcome to多多少少是 the app!</div>
//   }
// })


// <Route path="/" component={App}>
//   {/* Show the dashboard at / */}
//   <IndexRoute component={Dashboard} />
//   <Route path="about" component={About} />
//   <Route path="inbox" component={Inbox}>
//       //inbox/messages/5 redirect to messages/5
//       <Redirect from="messages/:id" to="/messages/:id" />
//   </Route>
//   <Route path="/messages/:id" component={Message} />
// </Route>

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Messages'),
      require('./routes/List')
    ]
  } ]
}


render((
  <Router routes={rootRoute}></Router>
), document.body)
