webpackJsonp([8],{371:function(e,t,r){"use strict";r.d(t,"a",function(){return p});var n,o=r(0),a=r.n(o),i=r(272),c=r.n(i),s=r(36),u=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,o){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var c in a)void 0===t[c]&&(t[c]=a[c]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e,t){var r=e.includes("cloudinary"),n=Math.round(window.devicePixelRatio)||1;e=(e=(e=e.replace("https://cdn.scotch.io","")).replace("https://res.cloudinary.com/scotch/image/upload/","")).replace("https://scotch-res.cloudinary.com/image/upload/","");var o="https://scotch-res.cloudinary.com/image/upload/";return o+=r?"w_"+t+",dpr_"+n+",q_auto:good,f_auto/"+e:"w_"+t+",dpr_"+n+",q_auto:good,f_auto/media/"+e},d=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=n=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.state={width:"auto"},f(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["PureComponent"]),l(t,[{key:"componentDidMount",value:function(){var e=this.container.clientWidth;e=50*Math.round(e/50),this.setState({width:e})}},{key:"render",value:function(){var e=this,t=this.state.width,r=this.props,n=r.article,o=r.showPremium,i=r.cardStyle,c=n.local_url||n.link,l="Premium"===n.is_free,f=n.image_thumbnail||n.image;"horizontal"===i&&(f=n.image),f&&(f=p(f,t));var d={backgroundImage:"url('"+f+"')"};return a.a.createElement("a",{className:"card-image",href:c,title:n.title,ref:function(t){return e.container=t}},u("div",{className:"image is-2by1",style:d}),o&&l&&u("span",{className:"free-or-premium tag is-premium center-flex"},void 0,u(s.FontAwesomeIcon,{icon:["fal","lock-alt"],fixedWidth:!0}),u("span",{className:"m-l-xs"},void 0,"Premium")),o&&!l&&u("span",{className:"free-or-premium tag is-free"},void 0,"Free"))}}]),t}(),m=Object(o.memo)(function(e){return e.isLazyLoaded?u(c.a,{height:200,offset:250},void 0,a.a.createElement(d,e)):a.a.createElement(d,e)});m.defaultProps={isLazyLoaded:!0},t.b=m},729:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(109),a=r.n(o),i=r(0),c=r.n(i),s=r(136),u=r.n(s),l=r(371),f=r(93),p=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,o){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var c in a)void 0===t[c]&&(t[c]=a[c]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=n=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.state={ads:[],width:"auto"},m(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),d(t,[{key:"componentDidMount",value:function(){var e,t=(e=a.a.mark(function e(){var t,r,n,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Object(f.a)("ad_id")||null)){e.next=7;break}return e.next=4,u.a.get("/api/syndicate/"+t);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,u.a.get("/api/syndicate");case 9:e.t0=e.sent;case 10:r=e.t0,n=r.data,o=this.container.clientWidth,o=50*Math.round(o/50),this.setState({ads:n,width:o});case 15:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,a){try{var i=t[o](a),c=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});e(c)}("next")})});return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.ads,n=t.width,o=this.props.isSidebar;return c.a.createElement("div",{ref:function(t){return e.container=t}},r&&r.map(function(e){var t,r=e.title,a=e.description,i=o&&e.sidebar_image||e.image,c=o&&e.sidebar_link||e.link,s=Object(l.a)(i,n),u={backgroundImage:"url('"+s+"')"};return p("div",{className:"is-fullwidth"},e.id,p("div",{className:"card is-scotch is-promo"},void 0,p("a",{className:"card-image",href:c,title:r},void 0,o?p("img",{src:s,alt:r}):p("div",{className:"image is-2by1",style:u})),e.tracking_pixel&&p("img",{src:(t=e.tracking_pixel,t.replace("[timestamp]",(new Date).getTime()))}),!o&&p("div",{className:"card-content"},void 0,p("h2",{className:"title is-4"},void 0,p("a",{href:c},void 0,r),p("code",{className:"has-text-grey-dark is-capitalized m-l-sm"},void 0,"Sponsor")," "),a&&p("p",{},void 0,a))))}))}}]),t}();h.defaultProps={isSidebar:!1},t.default=h}});