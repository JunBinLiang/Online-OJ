import React, { Component } from "react";
import { Route, Switch, NavLink,BrowserRouter as Router } from "react-router-dom";
import renderHTML from 'react-render-html';
import ReactMarkdown from 'react-markdown';
import {withRouter} from 'react-router-dom';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import Editor from './Component/Editor';


import ReactPlayer from "react-player"






import theme from './picture/theme.png';

import Home from './Home';





import p1 from './LeetCode/1.md';
import p1cpp from './LeetCode/1cpp.md';
import sta1 from './problems/1.md';
import test1 from './test/test1.md';
import submit1 from './submit/submit1.md';
import input1p1 from './input/1.1.md';
import input1p2 from './input/1.2.md';
import input1p3 from './input/1.3.md';


import submit2 from './submit/submit2.md';
import input2p1 from './input/2.1.md';
import input2p2 from './input/2.2.md';
import input2p3 from './input/2.3.md';
import input2p4 from './input/2.4.md';
import input2p5 from './input/2.5.md';
import input2p6 from './input/2.6.md';
import sta2 from './problems/2.md';
import p2 from './LeetCode/2.md';
import test2 from './test/test2.md';


import submit3 from './submit/submit3.md';
import input3p1 from './input/3.1.md';
import input3p2 from './input/3.2.md';
import input3p3 from './input/3.3.md';
import input3p4 from './input/3.4.md';
import input3p5 from './input/3.5.md';
import input3p6 from './input/3.6.md';
import sta3 from './problems/3.md';
import p3 from './LeetCode/3.md';
import test3 from './test/test3.md';

import Markdown from 'react-markdown';


import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';





let leetcodes=[[p1,p1cpp],[p2],[p3]];
let statements=[sta1,sta2,sta3];
let names=["Two Sum","Present From 66","Eating Chocolate"];
let Test=[test1,test2,test3];
let Submit=[submit1,submit2,submit3];
let testcases=[3,6,6];
let inputs=[[input1p1,input1p2,input1p3],[input2p1,input2p2,input2p3,input2p4,input2p5,input2p6],[input3p1,input3p2,input3p3,input3p4,input3p5,input3p6]];


class Problems extends Component {
  render() {
    return (
      <div>
		<MySideBar/>
      </div>
    );
  }
}




//https://reactjsexample.com/react-side-nav-component/
class MySideBar extends Component{
	constructor() {
		super();
		this.state = { index: 0,code:null,isHome:true };
     } 
	render(){
		

		return(
			<div>
				<SideNav
					onSelect={(selected) => {
						// Add your code here
						let first=selected.split(' ')[0];
			
						if(first=='Leetcode'){
							let index=parseInt(selected.split(' ')[1]);
							this.setState({isHome:false, index: index,
										   code:<Code content={leetcodes[index][0]} description={statements[index]} name={names[index]} test={Test[index]} index={index} submit={Submit[index]} testcase={testcases[index]}
										   input={inputs[index]}
										  /> })
						}
						else{
							this.setState({ index: 0,code:null,isHome:true })
						}
					}}
				>
					
					
					<SideNav.Toggle />
					<SideNav.Nav defaultSelected="home">
						<NavItem eventKey="home">
							<NavIcon>
								<i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText>
								Home
							</NavText>
						</NavItem>

						<NavItem eventKey="Leetcode">
							<NavIcon>
								Problems
							</NavIcon>
							<NavItem eventKey="Leetcode 0">
								<NavText>
									1. Two sum
								</NavText>
							</NavItem>

							<NavItem eventKey="Leetcode 1">
								<NavText>
									2. Present From 66
								</NavText>
							</NavItem>
							
							<NavItem eventKey="Leetcode 2">
								<NavText>
									3. Eating Chocolate
								</NavText>
							</NavItem>

							
						</NavItem>

					</SideNav.Nav>
				</SideNav>
				

				{this.state.code}
				
			</div>
		);
	}
}






class Code extends Component {
  constructor() {
    super();
    this.state = { markdown: '',editor:null,name:"Two Sum",description:"",test:"",submit:"",testcases:0 };
  }
  componentDidMount() {
	
	  
    const oldcode = localStorage.getItem(this.props.name)
	if(oldcode==null){
		fetch(this.props.content).then(res => res.text()).then(text => {
		 	this.setState({ markdown: text})
		});
	}
	else{
		this.setState({ markdown: oldcode})
	}
	  
	  
	fetch(this.props.description).then(res => res.text()).then(text => {
		this.setState({ description: text})
	});
	  
	fetch(this.props.test).then(res => res.text()).then(text => {
		this.setState({ test: text})
	});
	  fetch(this.props.submit).then(res => res.text()).then(text => {
		this.setState({ submit: text})
	});
  }
  componentDidUpdate(previousProps, previousState){
	  if(previousProps.content!=this.props.content){
		const oldcode = localStorage.getItem(this.props.name)
		if(oldcode==null){
			fetch(this.props.content).then(res => res.text()).then(text => {
		 		this.setState({ markdown: text})
			});
		}
		else{
			this.setState({ markdown: oldcode})
		}
		

		fetch(this.props.description).then(res => res.text()).then(text => {
			this.setState({ description: text})
		});

		fetch(this.props.test).then(res => res.text()).then(text => {
			this.setState({ test: text})
		});
		  fetch(this.props.submit).then(res => res.text()).then(text => {
			this.setState({ submit: text})
		});
	  }
	  
  } 
  render() {
    const { markdown } = this.state;
    return(
		<div>
			<h2 style={{'width':'45%','margin-left':'45%'}}>{this.props.name}</h2>
			<div style={{'width':'95%','margin-left':'5%'}} >
				<div style={{'margin':'3%','width':'45%'}}>
					<SplitterLayout>
						<Markdown 
							escapeHtml={true}
							source={this.state.description} 
						/>
		
						<div  style={{'margin':'3%','width':'100%' }}>
							<Editor judgecase={this.props.input} testcase={this.props.testcase} code={this.state.markdown} test={this.state.test} submit={this.state.submit} 
									name={this.props.name}/>
							<br/>
						</div>
					</SplitterLayout>
				</div>
			</div>
			
		</div>

	)
  }
}



export default withRouter(Problems);





