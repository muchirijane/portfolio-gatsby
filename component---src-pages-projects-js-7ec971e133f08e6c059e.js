(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"16l3":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("CGcg"),l=a("vrFN"),o=a("Wbzz"),d=a("9eSz"),s=a.n(d),c=a("K8pi"),u=a("vOnD"),f=a("ma3e"),m=a("qtta"),p=u.b.section.withConfig({displayName:"projectStyles__ProjectContainer",componentId:"sc-1i5t1ll-0"})(["margin:2rem auto;@media only screen and (max-width:1400px){max-width:1000px;}@media only screen and (max-width:1300px){max-width:800px;}"]),g=u.b.div.withConfig({displayName:"projectStyles__ProjectWrapper",componentId:"sc-1i5t1ll-1"})(["margin:1rem auto;display:flex;flex-direction:column;"]),h=u.b.div.withConfig({displayName:"projectStyles__ProjectInfo",componentId:"sc-1i5t1ll-2"})(["margin:2rem auto;"]),y=u.b.h2.withConfig({displayName:"projectStyles__ProjectTitle",componentId:"sc-1i5t1ll-3"})(["font-size:2.6rem;text-align:center;background:-webkit-linear-gradient(90.14deg,#EE7B5E 0.1%,#FB9E59 58.35%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;@media only screen and (max-width:1300px){font-size:2.4rem;}@media only screen and (max-width:1200px){text-align:start;}"]),b=u.b.div.withConfig({displayName:"projectStyles__ProjectDetail",componentId:"sc-1i5t1ll-4"})(["margin:3rem auto;display:flex;flex-direction:row;@media only screen and (max-width:1200px){flex-direction:column;}"]),w=u.b.div.withConfig({displayName:"projectStyles__ImgWrapper",componentId:"sc-1i5t1ll-5"})(["display:flex;width:350px;justify-content:flex-start;border-radius:15px;overflow:hidden;@media only screen and (min-width:1860px){width:600px;}@media only screen and (max-width:1200px){width:600px;margin-bottom:5rem;}@media only screen and (max-width:1100px){width:400px;}a{height:100%;width:100%;}"]),S=u.b.div.withConfig({displayName:"projectStyles__TextWrapper",componentId:"sc-1i5t1ll-6"})(["display:flex;justify-content:flex-start;flex-direction:column;width:50%;margin-left:5rem;justify-content:center;@media only screen and (min-width:1800px){width:70%;margin-left:10rem;}@media only screen and (max-width:1200px){margin-left:0;width:80%;}"]),x=u.b.p.withConfig({displayName:"projectStyles__ProjectContent",componentId:"sc-1i5t1ll-7"})(["font-size:1.8rem;padding-bottom:1.4rem;"]),v=u.b.h3.withConfig({displayName:"projectStyles__ProjectStack",componentId:"sc-1i5t1ll-8"})(["font-size:1.4rem;"]),E=u.b.div.withConfig({displayName:"projectStyles__ProjectButtons",componentId:"sc-1i5t1ll-9"})(["margin-top:2rem;a{margin-right:2rem;font-size:1.4rem;}"]),I=Object(u.b)(f.c).withConfig({displayName:"projectStyles__SourceIcon",componentId:"sc-1i5t1ll-10"})(["color:#EAAF4A;font-size:1.4rem;margin-right:.8rem;"]),j=Object(u.b)(m.a).withConfig({displayName:"projectStyles__LiveIcon",componentId:"sc-1i5t1ll-11"})(["color:#1B1B29;font-size:1.4rem;margin-right:.8rem;"]),L=u.b.div.withConfig({displayName:"projectStyles__ButtonWrapper",componentId:"sc-1i5t1ll-12"})(["display:flex;justify-content:center;align-items:center;margin-top:7rem;@media only screen and (max-width:900px){justify-content:flex-start;}"]),_=function(){var e=Object(o.useStaticQuery)("2592097205");return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null,i.a.createElement(c.b,null,"<"," Projects  ",">"),i.a.createElement(g,null,e.allPortfolioJson.edges.map((function(e,t){return i.a.createElement(h,{key:t},i.a.createElement(y,null,e.node.title),i.a.createElement(b,null,i.a.createElement(w,null,i.a.createElement("a",{href:e.node.preview,target:"_blank",rel:"noreferrer"},i.a.createElement(s.a,{fluid:e.node.image.childImageSharp.fluid,alt:e.node.alt}))),i.a.createElement(S,null,i.a.createElement(x,null,e.node.content),i.a.createElement(v,null,e.node.stack),i.a.createElement(E,null,i.a.createElement(c.e,{as:"a",href:e.node.source,target:"_blank",rel:"noreferrer noopener"},i.a.createElement(I,null),"Github"),i.a.createElement(c.a,{primary:!0,as:"a",href:e.node.preview,target:"_blank",rel:"noreferrer noopener"},i.a.createElement(j,null),"Live Site")))))})),i.a.createElement(L,null,i.a.createElement(c.e,{primary:!0,as:"a",href:"https://github.com/muchirijane",target:"_blank",rel:"noreferrer noopener"},i.a.createElement(I,null),"More on Github"))),i.a.createElement(c.b,null,"<"," Projects  ","/>")))};t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(l.a,{title:"Projects"}),i.a.createElement(_,null))}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),s=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,w=b&&window.IntersectionObserver,S=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},r&&s.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&s.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+s+l+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=s.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,o=s.default.createElement(R,(0,d.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?s.default.createElement("picture",null,i(r),o):o})),R=s.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&w&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=s.default.createRef(),a.placeholderRef=t.placeholderRef||s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,w=e.Tag,S=e.itemProp,v=e.loading,j=e.draggable,L=g||h;if(!L)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:z?1:0,transition:O?"opacity "+b+"ms":"none"},o),N="boolean"==typeof y?"lightgray":y,P={transitionDelay:b+"ms"},V=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&P,o,f),H={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:S},T=this.state.isHydrated?p(L):L[0];if(g)return s.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},s.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),N&&s.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&P)}),T.base64&&s.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:L,generateSources:I}),T.tracedSVG&&s.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:L,generateSources:E}),this.state.isVisible&&s.default.createElement("picture",null,x(L),s.default.createElement(R,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:v,draggable:j})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,d.default)({alt:a,title:t,loading:v},T,{imageVariants:L}))}}));if(h){var W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete W.display,s.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},N&&s.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},O&&P)}),T.base64&&s.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:L,generateSources:I}),T.tracedSVG&&s.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:L,generateSources:E}),this.state.isVisible&&s.default.createElement("picture",null,x(L),s.default.createElement(R,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:v,draggable:j})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,d.default)({alt:a,title:t,loading:v},T,{imageVariants:L}))}}))}return null},t}(s.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function N(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}z.propTypes={resolutions:O,sizes:k,fixed:N(c.default.oneOfType([O,c.default.arrayOf(O)])),fluid:N(c.default.oneOfType([k,c.default.arrayOf(k)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=z;t.default=P}}]);
//# sourceMappingURL=component---src-pages-projects-js-7ec971e133f08e6c059e.js.map