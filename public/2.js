(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{32:function(e,t){e.exports="/images/picture.png?ea108209cde85c3eba99175e495485a5"},33:function(e,t){e.exports="/images/pictureSmall.png?b0a8215bb06d12bad2cb0de2877a9463"},34:function(e,t){e.exports="/images/phone.png?bdf77464c7a33f84808dfb69b3e5da9a"},35:function(e,t){e.exports="/images/phoneSmall.png?befcbfda8269b8df264f78f70d0e3429"},36:function(e,t){e.exports="/images/about.png?cdd73f24ff6217a80e9a179a3e28ddf6"},37:function(e,t){e.exports="/images/aboutSmall.png?83777acceccb2a6f53b30dca40bfcc8e"},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(32),i=n.n(o),c=n(33),l=n.n(c);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n,a,r,o,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=m(t).call(this,e),n=!r||"object"!==u(r)&&"function"!=typeof r?p(a):r,o=p(n),c=function(e){var t=new Image;t.onload=function(){return n.setState({currentImage:n.loadingImage.src,loading:!1})},t.src=e,n.loadingImage=t},(i="fetchImage")in o?Object.defineProperty(o,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[i]=c,n.state={currentImage:n.props.image,loading:!0},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.fetchImage(this.props.image)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.image!==this.props.image&&this.setState({currentImage:e.preview,loading:!0},function(){t.fetchImage(e.image)})}},{key:"componentWillUnmount",value:function(){this.loadingImage&&(this.loadingImage.onload=null)}},{key:"render",value:function(){var e=this,t=this.props.alt;return r.a.createElement("div",{className:"progressive-image-wrapper"},r.a.createElement("div",{className:this.state.loading?"preview-wrapper":"preview-wrapper hidden"},r.a.createElement("img",{src:this.props.preview,alt:t,className:"preview"})),r.a.createElement("img",{className:this.state.loading?"image":"image visible",src:this.state.currentImage,alt:t,onLoad:function(){e.setState({loading:!1})}}))}}])&&s(n.prototype,o),i&&s(n,i),t}(),y=Object(a.memo)(function(e){return r.a.createElement("section",{className:"home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"home-text"},r.a.createElement("p",{className:"intro-text"},"We are painting with ",r.a.createElement("br",null)," artificial intelligence"),r.a.createElement("p",{className:"about-text"},"You can make your own NeuroArt picture using our bots! We have 3 types of art like Make Art, Style Transfer and Deep Dream. Let’s try to create a beautiful picture with artificial intelligence!"),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"buy-now button"},r.a.createElement("p",null,"Buy now")),r.a.createElement("div",{className:"contact-us button"},r.a.createElement("p",null,"Contact us")))),r.a.createElement("div",{className:"home-picture"},r.a.createElement(b,{image:i.a,preview:l.a,alt:"image"}))))}),h=n(4),g=n(1),d=function(e){return function(t){fetch(e).then(function(e){if(!e.ok)throw Error(e.statusText);return e}).then(function(e){return e.json()}).then(function(e){return t(function(e){return{type:g.h,data:e}}(e))}).catch(function(e){console.log(e)})}},v=Object(a.memo)(function(e){return r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"image-styles"},e.style),r.a.createElement("div",{className:"style-image-wrapper"},r.a.createElement("img",{src:e.firstUri,alt:"image"})),r.a.createElement("div",{className:"style-image-wrapper"},r.a.createElement("img",{src:e.secondUri,alt:"image"})))});function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){var e,n,a,o,i,c,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,s=new Array(u),m=0;m<u;m++)s[m]=arguments[m];return a=this,n=!(o=(e=N(t)).call.apply(e,[this].concat(s)))||"object"!==E(o)&&"function"!=typeof o?O(a):o,i=O(n),l=function(e){return(e[0]&&e[0].length>0?[].concat([e[0].filter(function(e){return"Make art"===e.style})],[e[0].filter(function(e){return"Style transfer"===e.style})],[e[0].filter(function(e){return"Deep dream"===e.style})]):[]).map(function(e){return r.a.createElement(v,{key:e[0].id,style:e[0].style,firstUri:e[0].uri,secondUri:e[1].uri})})},(c="renderStyleCols")in i?Object.defineProperty(i,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[c]=l,n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.props.fetchData("".concat(g.a,"examples"))}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,this.renderStyleCols(this.props.examplesData))}}])&&w(n.prototype,o),i&&w(n,i),t}(),x=Object(h.b)(function(e){return{examplesData:e.fetchExamples}},function(e){return{fetchData:function(t){return e(d(t))}}})(S),_=Object(a.memo)(function(e){return r.a.createElement("section",{className:"examples"},r.a.createElement("div",{className:"examples-text"},r.a.createElement("h3",{className:"examples-title"},"examples"),r.a.createElement("p",{className:"examples-description"},"Choose one of the several types of NeuroArt.AI. We have 3 types like Make Art, Style Transfer and Deep Dream. Let’s see some examples.")),r.a.createElement("div",{className:"styles"},r.a.createElement(x,null)))}),P=Object(a.memo)(function(e){return r.a.createElement("section",{className:"subscribe"},r.a.createElement("h2",{className:"subscribe-title"},"don't miss our latest news !"),r.a.createElement("p",{className:"subscribe-text"},"Subscribe to us for mailing"),r.a.createElement("form",{className:"send-wrapper",onSubmit:e.send},r.a.createElement("input",{placeholder:"Email",className:"subscribe-email",value:e.value||"",onChange:e.input}),r.a.createElement("input",{type:"submit",className:"subscribe-submit",value:"subscribe"})))}),k=function(e){return{type:g.c,value:e}},C=n(17),I=n(12);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function D(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,W(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement(P,{value:this.props.data.value,input:this.props.input,send:this.props.send})}}])&&A(n.prototype,a),o&&A(n,o),t}(),M=Object(h.b)(function(e){return{data:e.emailChanging}},function(e){return{input:function(t){return e(k(t.target.value))},send:function(){return e((t="".concat(g.a,"mails"),event.preventDefault(),function(e){var n=I.a.getState().emailChanging.value;fetch(t,{method:"POST",body:JSON.stringify({email:n}),headers:{"Content-Type":"application/json"}}).then(function(e){if(!e.ok)throw Error(e.statusText);return e}).then(function(e){return e.json()}).then(function(t){e(Object(C.a)(t,"success")),e(k(""))}).then(function(){return e(k(""))}).catch(function(t){e(Object(C.a)(t,"fail")),e(k(""))})}));var t}}})(V),U=n(34),J=n.n(U),L=n(35),Y=n.n(L),B=Object(a.memo)(function(e){return r.a.createElement("section",{className:"mission"},r.a.createElement("div",{className:"mission-content"},r.a.createElement("h2",{className:"section-title"},"our mission"),r.a.createElement("p",{className:"section-text"},"Project NeuroArt.AI is dedicated to meet our society with potencial opportunities of Artificial Intelligence. We are here to distribute influence on people’s minds throught the art. Our mission is convince humanity of the nessity and inevitability of creating AI. Which will be almighty and unlimited."),r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"info"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",className:"input",value:e.nameValue,onChange:function(t){e.onChange("name",t.target.value)}}),r.a.createElement("input",{type:"text",name:"email",placeholder:"Email",className:"input",value:e.emailValue,onChange:function(t){e.onChange("email",t.target.value)}})),r.a.createElement("textarea",{name:"message",placeholder:"Type your message",className:"message",onChange:function(t){e.onChange("message",t.target.value)},value:e.messageValue}),r.a.createElement("input",{type:"button",value:"send message",className:"send"}))),window.innerWidth>900&&r.a.createElement("div",{className:"img-wrapper"},r.a.createElement(b,{image:J.a,preview:Y.a,alt:"image"})))});function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function z(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,G(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement(B,{onChange:this.props.changeInput,nameValue:this.props.inputs.name,emailValue:this.props.inputs.email,messageValue:this.props.inputs.message})}}])&&q(n.prototype,a),o&&q(n,o),t}(),Q=Object(h.b)(function(e){return{inputs:e.missionInputs}},function(e){return{changeInput:function(t,n){return e(function(e,t){var n=[];return n[e]=t,{type:g.m,values:n}}(t,n))}}})(K),X=n(6),Z=n(36),$=n.n(Z),ee=n(37),te=n.n(ee),ne=Object(a.memo)(function(e){return r.a.createElement("section",{className:"about"},r.a.createElement("h2",{className:"section-title"},"about us"),r.a.createElement("p",{className:"section-text"},"Enjoy contemporary AI art. Be original. ","\n","The NeuroArt.ai service provides the ability to create ","\n","paintings using Artificial Intelligence algorithms!"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"about-photo"},r.a.createElement(b,{image:$.a,preview:te.a,alt:"image"})),r.a.createElement("div",{className:"content-main"},r.a.createElement("h2",{className:"section-title"},"You can either create a new painted art or process your own photo"),r.a.createElement("p",{className:"section-text"},"The NeuroArt service provides the ability to creat paintings using Artificial Intelligence algorithms ! You always get a unique and original result ! We can print a picture for you on almost anything (paper, canvas, cloth, mugs, clothes)! We will find a way to fulfill an order anywhere in the world. Rest assured!"),r.a.createElement("div",{className:"buttons"},r.a.createElement(X.a,{className:"button example",to:"/gallery"},"see examples"),r.a.createElement("a",{className:"button order",rel:"noreferrer",href:"http://t.me/neuroartaibot",target:"_blank"},"buy now")))))}),ae=Object(a.memo)(function(){return r.a.createElement(a.Fragment,null,r.a.createElement(y,null),r.a.createElement(_,null),r.a.createElement(M,null),r.a.createElement(ne,null),r.a.createElement(Q,null))});t.default=ae}}]);