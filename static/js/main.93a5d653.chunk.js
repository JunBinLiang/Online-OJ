(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/1.3ee16d09.md"},116:function(e,t,a){e.exports=a.p+"static/media/1.2521b81c.md"},117:function(e,t,a){e.exports=a.p+"static/media/test1.75250e6a.md"},118:function(e,t,a){e.exports=a.p+"static/media/submit1.00ff6f5c.md"},119:function(e,t,a){e.exports=a.p+"static/media/1.1.0e3da01e.md"},120:function(e,t,a){e.exports=a.p+"static/media/1.2.fc6921e6.md"},121:function(e,t,a){e.exports=a.p+"static/media/1.3.c51d0e5e.md"},122:function(e,t,a){e.exports=a.p+"static/media/submit2.663b4402.md"},123:function(e,t,a){e.exports=a.p+"static/media/2.1.7b2b7368.md"},124:function(e,t,a){e.exports=a.p+"static/media/2.2.8f9fa10b.md"},125:function(e,t,a){e.exports=a.p+"static/media/2.3.fa332d27.md"},126:function(e,t,a){e.exports=a.p+"static/media/2.4.0d3f9e59.md"},127:function(e,t,a){e.exports=a.p+"static/media/2.5.b377abd1.md"},128:function(e,t,a){e.exports=a.p+"static/media/2.6.22c0eae3.md"},129:function(e,t,a){e.exports=a.p+"static/media/2.329382e1.md"},130:function(e,t,a){e.exports=a.p+"static/media/2.c690d494.md"},131:function(e,t,a){e.exports=a.p+"static/media/test2.dd98848c.md"},137:function(e,t,a){e.exports=a(314)},142:function(e,t,a){},157:function(e,t){},159:function(e,t){},312:function(e,t,a){e.exports=a.p+"static/media/theme.77c2d2ac.png"},314:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(23),c=a.n(i),o=(a(142),a(24)),r=a(25),l=a(28),u=a(26),m=a(27),h=(a(144),a(71)),p=a.n(h),d=a(14),f=a.n(d),b=(a(259),a(67),a(49)),g=a.n(b),v=(a(69),a(70),a(9)),E=(a(68),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(8)),y=a(319),x=a(320),j=a(313),w=(a(99),a(72)),O=a.n(w),S=a(50),k=a.n(S),C=a(37),I=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={show:!1,judge:""},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.judge).then(function(e){return e.text()}).then(function(t){e.setState({judge:t})})}},{key:"render",value:function(){var e=this,t=s.a.createElement(E.a,{onClick:function(){e.setState({show:!0})}},"this");return 1==this.props.bstate&&(t=s.a.createElement(E.a,{onClick:function(){e.setState({show:!0})},className:"btn-secondary",style:{"margin-left":"3%"}},"Test",this.props.index)),2==this.props.bstate&&(t=s.a.createElement(E.a,{onClick:function(){e.setState({show:!0})},className:"btn-success",style:{"margin-left":"3%"}},"O")),3==this.props.bstate&&(t=s.a.createElement(E.a,{onClick:function(){e.setState({show:!0})},className:"btn-danger",style:{"margin-left":"3%"}},"X")),s.a.createElement(s.a.Fragment,null,t,s.a.createElement(C.a,{size:"sm",show:this.state.show,onHide:function(){e.setState({show:!1})},"aria-labelledby":"example-modal-sizes-title-sm"},s.a.createElement(C.a.Header,{closeButton:!0},s.a.createElement(C.a.Title,{id:"example-modal-sizes-title-sm"},"Test ",this.props.index)),s.a.createElement(C.a.Body,null,this.state.judge)))}}]),t}(n.Component),N=a(113),K=a.n(N),z=function(){return s.a.createElement(K.a,{width:"100%",height:500})},A=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={mycode:"",status:0,output:"",loading:!1,summiting:!1,A:[],inputstate:!1,myinput:"",correct:!1,done:!1,theme:"solarized_light"},e.onchange=e.onchange.bind(Object(v.a)(Object(v.a)(e))),e.handleCompile=e.handleCompile.bind(Object(v.a)(Object(v.a)(e))),e.changeOutput=e.changeOutput.bind(Object(v.a)(Object(v.a)(e))),e.changeInput=e.changeInput.bind(Object(v.a)(Object(v.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(Object(v.a)(e))),e.inputstateChange=e.inputstateChange.bind(Object(v.a)(Object(v.a)(e))),e.select=e.select.bind(Object(v.a)(Object(v.a)(e))),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.code!=this.props.code&&fetch(this.props.content).then(function(e){return e.text()}).then(function(e){return a.setState({mycode:a.props.code,A:[],done:!1,output:""})})}},{key:"select",value:function(e){this.setState({theme:e})}},{key:"inputstateChange",value:function(){var e=!this.state.inputstate;this.setState({inputstate:e})}},{key:"componentDidMount",value:function(){this.setState({mycode:this.props.code})}},{key:"onchange",value:function(e){this.setState({mycode:e})}},{key:"changeOutput",value:function(e){this.setState({output:e.target.value})}},{key:"changeInput",value:function(e){this.setState({myinput:e.target.value})}},{key:"handleCompile",value:function(){var e=this;this.setState({loading:!0}),k.a.post("https://frozen-atoll-01566.herokuapp.com/api/run",{lang:"java",code:this.state.mycode+this.props.test,input:this.state.myinput}).then(function(t){var a=t.data,n=parseInt(a.message.status);console.log(t),e.setState({status:n,output:a.message,loading:!1,inputstate:!1})})}},{key:"handleSubmit",value:function(){var e=this;this.setState({summiting:!0}),k.a.post("https://frozen-atoll-01566.herokuapp.com/api/submit",{lang:"java",code:this.state.mycode+this.props.submit}).then(function(t){var a=0,n=t.data,s=parseInt(n.message.status),i=n.message.split("\n"),c=!1,o=[],r=[],l=e.props.testcase;i.length<l&&(l=0);for(var u=i.length-1;u>=0;u--)0!=i[u].length&&(l>0?("t"==i[u].charAt(0)&&a++,o.push(i[u]),l--):r.push(i[u]));a==e.props.testcase?(c=!0,O()("Congratulation!").then(function(t){t&&e.setState({correct:!1})})):O()({text:"You are not YOUXIU enough!",icon:"warning",dangerMode:!0}),e.setState({status:s,output:r.reverse().join("\n"),summiting:!1,inputstate:!1,done:!0,A:o.reverse(),correct:c})})}},{key:"render",value:function(){var e=s.a.createElement(E.a,{className:"outline-primary"},s.a.createElement("i",{class:"fa fa-refresh fa-spin"})),t=s.a.createElement(E.a,{className:"btn-info",style:{margin:"5%"}},s.a.createElement("i",{class:"fa fa-refresh fa-spin"})),a="",n="";this.state.inputstate?(a=s.a.createElement(E.a,{className:"btn-success ",style:{margin:"5%"},onClick:this.inputstateChange},"My output"),n="Input Your Data please!"):(a=s.a.createElement(E.a,{className:"btn-success",style:{margin:"5%"},onClick:this.inputstateChange},"Input"),n="Here is Your Output!");var i=s.a.createElement("textarea",{id:"textarea",className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"5",cols:"85",width:"30%",value:this.state.output,onChange:this.changeOutput});this.state.inputstate&&(i=s.a.createElement("textarea",{id:"textarea",className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"5",cols:"85",width:"30%",value:this.state.myinput,onChange:this.changeInput}));for(var c,o=[],r=0;r<this.props.testcase;r++)this.state.done?(console.log(this.state.A),null!=this.state.A[r]&&this.state.A[r].length>=1&&"t"==this.state.A[r].charAt(0)?o.push(s.a.createElement(I,{bstate:2,index:r,judge:this.props.judgecase[r]})):o.push(s.a.createElement(I,{bstate:3,index:r,judge:this.props.judgecase[r]})),r%6==0&&0!=r&&(o.push(s.a.createElement("br",null)),o.push(s.a.createElement("br",null)))):(o.push(s.a.createElement(I,{bstate:1,index:r,judge:this.props.judgecase[r]})),r%6==0&&0!=r&&(o.push(s.a.createElement("br",null)),o.push(s.a.createElement("br",null))));return this.state.loading||(e=this.state.summiting?s.a.createElement(E.a,{className:"outline-primary"},"Compile"):s.a.createElement(E.a,{className:"outline-primary",onClick:this.handleCompile},"Compile")),this.state.summiting||(t=this.state.loading?s.a.createElement(E.a,{className:"btn-info",style:{margin:"5%"}},"Submit"):s.a.createElement(E.a,{className:"btn-info",style:{margin:"5%"},onClick:this.handleSubmit},"Submit")),this.state.correct&&(c=s.a.createElement(z,null)),s.a.createElement("div",null,c,o,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(y.a,{onSelect:this.select,as:x.a.Prepend,variant:"light",title:this.state.theme,id:"input-group-dropdown-1"},s.a.createElement(j.a.Item,{eventKey:"tomorrow"},"tomorrow"),s.a.createElement(j.a.Item,{eventKey:"github"},"github"),s.a.createElement(j.a.Item,{eventKey:"monokai"},"monokai"),s.a.createElement(j.a.Item,{eventKey:"kuroir"},"kuroir"),s.a.createElement(j.a.Item,{eventKey:"twilight"},"twilight"),s.a.createElement(j.a.Item,{eventKey:"xcode"},"xcode"),s.a.createElement(j.a.Item,{eventKey:"textmate"},"textmate"),s.a.createElement(j.a.Item,{eventKey:"solarized_dark"},"solarized_dark"),s.a.createElement(j.a.Item,{eventKey:"solarized_light"},"solarized_light"),s.a.createElement(j.a.Item,{eventKey:"terminal"},"terminal")),s.a.createElement("br",null),s.a.createElement(g.a,{height:500,width:"75%",mode:"java",theme:this.state.theme,name:"blah2",onChange:this.onchange,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:this.state.mycode,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2}}),a,s.a.createElement("br",null),n,s.a.createElement("br",null),i,s.a.createElement("br",null),e,t)}}]),t}(n.Component),T=(a(295),a(312),a(115)),H=a.n(T),L=a(116),M=a.n(L),D=a(117),P=a.n(D),_=a(118),B=a.n(_),U=a(119),Y=a.n(U),J=a(120),W=a.n(J),X=a(121),q=a.n(X),F=a(122),G=a.n(F),$=a(123),Q=a.n($),R=a(124),V=a.n(R),Z=a(125),ee=a.n(Z),te=a(126),ae=a.n(te),ne=a(127),se=a.n(ne),ie=a(128),ce=a.n(ie),oe=a(129),re=a.n(oe),le=a(130),ue=a.n(le),me=a(131),he=a.n(me),pe=[[H.a,""],[ue.a,""]],de=[M.a,re.a],fe=["Two Sum","Present To 66"],be=[P.a,he.a],ge=[B.a,G.a],ve=[3,6],Ee=[[Y.a,W.a,q.a],[Q.a,V.a,ee.a,ae.a,se.a,ce.a]],ye=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(xe,null))}}]),t}(n.Component),xe=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={index:0,code:null,isHome:!0},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.state.isHome&&(t=s.a.createElement("h1",{style:{marginLeft:"35%"}},"My Coding Platform")),s.a.createElement("div",null,s.a.createElement(f.a,{onSelect:function(t){if("Leetcode"==t.split(" ")[0]){var a=parseInt(t.split(" ")[1]);e.setState({isHome:!1,index:a,code:s.a.createElement(je,{content:pe[a][0],description:de[a],name:fe[a],test:be[a],index:a,submit:ge[a],testcase:ve[a],input:Ee[a]})})}else e.setState({index:0,code:null,isHome:!0})}},s.a.createElement(f.a.Toggle,null),s.a.createElement(f.a.Nav,{defaultSelected:"home"},s.a.createElement(d.NavItem,{eventKey:"home"},s.a.createElement(d.NavIcon,null,s.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),s.a.createElement(d.NavText,null,"Home")),s.a.createElement(d.NavItem,{eventKey:"Leetcode"},s.a.createElement(d.NavIcon,null,"Problems"),s.a.createElement(d.NavItem,{eventKey:"Leetcode 0"},s.a.createElement(d.NavText,null,"1. Two sum")),s.a.createElement(d.NavItem,{eventKey:"Leetcode 1"},s.a.createElement(d.NavText,null,"2. Present To 66"))))),t,this.state.code)}}]),t}(n.Component),je=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={markdown:"",editor:null,name:"Two Sum",description:"",test:"",submit:"",testcases:0},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.content).then(function(e){return e.text()}).then(function(t){e.setState({markdown:t})}),fetch(this.props.description).then(function(e){return e.text()}).then(function(t){e.setState({description:t})}),fetch(this.props.test).then(function(e){return e.text()}).then(function(t){e.setState({test:t})}),fetch(this.props.submit).then(function(e){return e.text()}).then(function(t){e.setState({submit:t})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.content!=this.props.content&&(fetch(this.props.content).then(function(e){return e.text()}).then(function(e){a.setState({markdown:e})}),fetch(this.props.description).then(function(e){return e.text()}).then(function(e){a.setState({description:e})}),fetch(this.props.test).then(function(e){return e.text()}).then(function(e){a.setState({test:e})}),fetch(this.props.submit).then(function(e){return e.text()}).then(function(e){a.setState({submit:e})}))}},{key:"render",value:function(){this.state.markdown;return s.a.createElement("div",null,s.a.createElement("h2",{style:{width:"45%","margin-left":"45%"}},this.props.name),s.a.createElement("div",{style:{width:"95%","margin-left":"5%"},className:"code"},s.a.createElement("div",{style:{margin:"3%",width:"45%"}},s.a.createElement(p.a,{escapeHtml:!0,source:this.state.description}),s.a.createElement("br",null),s.a.createElement("br",null)),s.a.createElement("div",{style:{margin:"3%",width:"45%"}},s.a.createElement(A,{judgecase:this.props.input,testcase:this.props.testcase,code:this.state.markdown,test:this.state.test,submit:this.state.submit}),s.a.createElement("br",null))))}}]),t}(n.Component),we=ye;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(we,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,a){}},[[137,2,1]]]);
//# sourceMappingURL=main.93a5d653.chunk.js.map