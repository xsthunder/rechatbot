!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-chatbot"]=t(require("react"),require("prop-types")):e["react-chatbot"]=t(e.React,e.PropTypes)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=2)}([function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=r.default},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(0),c=n(i),f=a(1),d=n(f),p=a(4),h=a(7),g=n(h),y=function(e){function t(e){r(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={loading:!1,finished:!1,userInput:!1,inputCall:null,lastMsg:null,notUnderstand:e.options.filter(function(e){return null===e.handle})[0],callMessages:[]},a.callTimer=null,a}return l(t,e),o(t,[{key:"getMessage",value:function(e){return this.props.options.filter(function(t){return!!t.handle&&(t.handle instanceof RegExp?new RegExp(t.handle).test(e.text):t.handle.toLowerCase()===e.text.toLowerCase())})[0]}},{key:"handleNewMessage",value:function(e){e.isUser?(this.renderMessage(e),this.sendBotReply(e)):this.renderDelayMessage(e),e.finish&&this.setState({finished:!0})}},{key:"sendBotReply",value:function(e){var t=this.state,a=t.notUnderstand,n=t.inputCall,r=n?this.getMessageById(n):this.getMessage(e)||a;this.renderDelayMessage(r,e)}},{key:"renderMessage",value:function(e){var t=this.props.onSendMessage;t&&t(e)}},{key:"renderDelayMessage",value:function(e,t){var a=this,n=this.props,r=n.onSendMessage,s=n.delay;this.setState({loading:!0,userInput:!!e.input,inputCall:e.input?e.call:null,lastMsg:e}),r&&setTimeout(function(){if(r(Object.assign({},e,{last:t})),a.setState({loading:!1}),e.call&&!a.state.userInput){var n=a.getMessageById(e.call);a.renderDelayMessage(n)}},s)}},{key:"onInputReply",value:function(e){var t=this.state,a=t.inputCall,n=t.lastMsg;"Enter"!==e.key||n.validator&&!n.validator(e.target.value)||(this.handleNewMessage((0,p.serializeUserAnswer)(e.target.value,{nextId:a,lastId:n.id})),e.target.value="")}},{key:"sendAction",value:function(e){this.handleNewMessage((0,p.serializeUserAnswer)(e))}},{key:"getMessageById",value:function(e){var t=this.props.options;return e?t.filter(function(t){return e===t.id})[0]:[]}},{key:"getWelcomeMessage",value:function(){var e=this.props.welcomeId;return this.getMessageById(e)}},{key:"componentDidMount",value:function(){var e=this.getWelcomeMessage();this.handleNewMessage(e)}},{key:"componentDidUpdate",value:function(){this.messages&&(this.messages.scrollTop=this.messages.scrollHeight-this.messages.clientHeight)}},{key:"render",value:function(){var e=this,t=this.props,a=t.messages,n=t.hideAvatar,r=t.hideUserMessage,s=t.avatars,l=t.inputPlaceholder,o=this.state,i=o.loading,f=o.finished;return c.default.createElement("div",{className:"chat"},c.default.createElement("ul",{ref:function(t){return e.messages=t},className:"chat__messages"},a.map(function(t,a){return t.isUser&&r?null:c.default.createElement(g.default,u({hideAvatar:n,avatars:s,sendAction:e.sendAction.bind(e),key:t.id+"_"+a},t))}),i&&c.default.createElement(g.default,{placeholder:!0,hideAvatar:n,avatars:s})),c.default.createElement("div",{className:"chat__input"},c.default.createElement("input",{disabled:f,onKeyUp:this.onInputReply.bind(this),type:"text",placeholder:l})))}}]),t}(c.default.Component);y.defaultProps={hideUserMessage:!1,messages:[],welcomeMessage:[],hideAvatar:!1,delay:1e3,inputPlaceholder:"Enter you answer..."},y.propTypes={hideUserMessage:d.default.bool,inputPlaceholder:d.default.string,hideAvatar:d.default.bool,delay:d.default.number,welcomeMessage:d.default.oneOfType([d.default.string,d.default.array]),options:d.default.array.isRequired,messages:d.default.array.isRequired,onSendMessage:d.default.func},t.default=y},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(5);Object.defineProperty(t,"serializeUserAnswer",{enumerable:!0,get:function(){return n(r).default}});var s=a(6);Object.defineProperty(t,"mergeMessage",{enumerable:!0,get:function(){return n(s).default}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return Object.assign({},{text:e,isUser:!0},t)}},function(e,t,a){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return{messages:[].concat(n(e.messages),[Object.assign({},t,{formData:e.formData})])}}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),s=n(r),l=a(8),u=n(l),o=a(1),i=n(o),c=function(e){var t=e.sendAction,a=e.placeholder,n=e.text,r=e.buttons,l=e.avatars,o=e.image,i=e.isUser,c=e.hideAvatar;return s.default.createElement("li",{className:(0,u.default)("chat__message",{"chat__message--user":i})},!c&&s.default.createElement("div",{className:"chat__avatar",style:{backgroundImage:l&&"url("+(i?l.user:l.bot)+")"}}),s.default.createElement("div",{className:"chat__content"},(a||n)&&s.default.createElement("div",{className:(0,u.default)("chat__text",{"chat__text--placeholder":a})},"function"==typeof n?n(e):n,a&&s.default.createElement("p",null,s.default.createElement("span",null,"."),s.default.createElement("span",null,"."),s.default.createElement("span",null,"."))),o&&s.default.createElement("div",{className:"chat__image",style:{backgroundImage:"url("+o+")"}}),s.default.createElement("div",{className:"chat__buttons"},r&&r.map(function(e,a){return s.default.createElement("button",{key:a,onClick:e.callback||t&&t.bind(void 0,e.value)},e.label)}))))};c.defaultProps={sendAction:function(){},placeholder:!1,text:"",buttons:[],avatars:{},image:"",isUser:!1,hideAvatar:!1},c.propTypes={sendAction:i.default.func,placeholder:i.default.bool,text:i.default.oneOfType([i.default.string,i.default.object,i.default.func]),buttons:i.default.array,avatars:i.default.object,image:i.default.string,isUser:i.default.bool,hideAvatar:i.default.bool},t.default=c},function(e,t,a){var n,r;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var l in n)s.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}var s={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=a:(n=[],void 0!==(r=function(){return a}.apply(t,n))&&(e.exports=r))}()}])});