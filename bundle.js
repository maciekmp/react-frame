!function(e){function t(s){if(n[s])return n[s].exports;var r=n[s]={exports:{},id:s,loaded:!1};return e[s].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/example/",t(0)}([function(e,t,n){"use strict";var s=n(1),r=n(2),a=n(3),i=n(4),l=s.createClass({displayName:"App",getInitialState:function(){return{text:"Parturient Ipsum Cursus Purus Justo",background:"#aaa",frame1:!0,frame2:!1}},handleChange:function(e){this.setState({text:e.target.value})},handleBackgroundChange:function(e){this.setState({background:e.target.value})},toggleStyle:function(e){var t={};t[e]=!this.state[e],this.setState(t)},getCss:function(){return i([{body:{"background-color":this.state.background}}])},getStyleSheets:function(){var e=[];return this.state.frame1&&e.push("frame1.css"),this.state.frame2&&e.push("frame2.css"),e},render:function(){var e=this.getStyleSheets(),t=this.getCss();return s.createElement("div",{className:"app"},s.createElement("h1",null,"react-frame"),s.createElement("div",{className:"title"},this.state.text),s.createElement(a,{className:"iframe",id:"iframe",styleSheets:e,css:t},s.createElement("div",{className:"title"},this.state.text)),s.createElement("div",null,s.createElement("textarea",{style:{width:400},value:this.state.text,onChange:this.handleChange})),s.createElement("div",null,s.createElement("label",null,"Background Color"),s.createElement("input",{type:"text",value:this.state.background,onChange:this.handleBackgroundChange})),s.createElement("div",null,s.createElement("input",{type:"checkbox",checked:this.state.frame1,onChange:this.toggleStyle.bind(null,"frame1")}),s.createElement("label",null,"frame1.css")),s.createElement("div",null,s.createElement("input",{type:"checkbox",checked:this.state.frame2,onChange:this.toggleStyle.bind(null,"frame2")}),s.createElement("label",null,"frame2.css")))}});r.render(s.createElement(l,null),document.getElementById("app"))},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},r=n(5),a=n(1),i=n(2);e.exports=a.createClass({displayName:"Frame",render:function(){this._children=this.props.children;var e=r(this.props,"children");return a.createElement("iframe",s({},e,{onLoad:this.renderFrame}))},updateStylesheets:function(e){for(var t=this,n=this.head.querySelectorAll("link"),s=0,r=n.length;r>s;s++){var a=n[s];a.parentNode.removeChild(a)}e&&e.length&&e.forEach(function(e){var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),t.head.appendChild(n)})},updateCss:function(e){if(!this.styleEl){var t=document.createElement("style");t.type="text/css",this.head.appendChild(t),this.styleEl=t}var t=this.styleEl;if(t.styleSheet)t.styleSheet.cssText=e;else{var n=document.createTextNode(e);this.cssNode&&t.removeChild(this.cssNode),t.appendChild(n),this.cssNode=n}},renderFrame:function(){var e=i.findDOMNode(this);this.head=e.contentDocument.head,this.body=e.contentDocument.body,this.updateStylesheets(this.props.styleSheets),this.updateCss(this.props.css),i.render(this._children,this.body)},componentDidMount:function(){setTimeout(this.renderFrame,0)},componentWillReceiveProps:function(e){e.styleSheets.join("")!==this.props.styleSheets.join("")&&this.updateStylesheets(e.styleSheets),e.css!==this.props.css&&this.updateCss(e.css);var t=i.findDOMNode(this);i.render(e.children,t.contentDocument.body)},componentWillUnmount:function(){a.unmountComponentAtNode(i.findDOMNode(this).contentDocument.body)}})},function(e,t){"use strict";e.exports=function(e){return e.map(function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var s=e[n],r=n+"{";for(var a in s)s.hasOwnProperty(a)&&null!==s[a]&&"undefined"!=typeof s[a]&&(r+=a+":"+s[a]+";");r+="}",t+=r}return t}).join("")}},function(e,t){e.exports=function(e){var t={},n=arguments[1];if("string"==typeof n){n={};for(var s=1;s<arguments.length;s++)n[arguments[s]]=!0}for(var r in e)n[r]||(t[r]=e[r]);return t}}]);
//# sourceMappingURL=bundle.js.map