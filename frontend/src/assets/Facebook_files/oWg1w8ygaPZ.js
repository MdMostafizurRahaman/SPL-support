;/*FB_PKG_DELIM*/

__d("ChevronLeftFilled12.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 12 13",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-450 -1073)",children:i.jsx("path",{fillRule:"nonzero",d:"M457.905 1075.53a.75.75 0 0 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.97-3.97 3.97-3.97z"})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("ChevronRightFilled12.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 12 13",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-450 -1073)",children:i.jsx("path",{fillRule:"nonzero",d:"M454.095 1083.47a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97z"})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("CometImageCover.react",["BaseImage_DEPRECATED.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;var j=e.useCallback,k=e.useRef,l=e.useState;d=function(){var a=document.documentElement;return a==null?!0:Boolean("objectFit"in a.style)}();function a(a){a.alt;var b=a.loading,d=a.onError,e=a.onLoad,f=a.src,g=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["alt","loading","onError","onLoad","src","style"]);var h=l(null),m=h[0],n=h[1],o=k();h=j(function(){var a=o.current;if(a==null||!(a instanceof HTMLImageElement)||typeof a.src!=="string")return;n(a.src);e!=null&&e()},[e]);return m!=null?i.jsx("div",{className:"x1rg5ohu x5yr21d xl1xv1r xh8yej3",style:babelHelpers["extends"]({backgroundImage:"url("+m+")",backgroundPosition:"center center",backgroundSize:"cover"},g)}):i.jsx(c("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({},a,{className:"xqtp20y xnalus7",loading:b||void 0,onError:d,onLoad:h,ref:o,src:f,style:g}))}a.displayName=a.name+" [from "+f.id+"]";function b(a){return i.jsx(c("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({className:"x1rg5ohu x5yr21d xl1xv1r xh8yej3"},a))}b.displayName=b.name+" [from "+f.id+"]";e=d?b:a;g["default"]=e}),98);
__d("FDSPressableFacepile.react",["fbt","ix","BaseContainerQueryElement.react","CometComponentWithKeyCommands.react","CometKeys","CometPressable.react","CometProfilePhoto.react","FDSIcon.react","FDSTooltip.react","FocusGroup.react","ReactDOMComet","TetraText.react","fbicon","focusScopeQueries","gkx","react","stylex","useIntersectionObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react"));b=k;var m=b.useCallback,n=b.useId,o=b.useRef,p=b.useState;e=d("FocusGroup.react").createFocusGroup(d("focusScopeQueries").tabbableScopeQuery);var q=e[0],r=e[1],s=4,t=6,u=-4,v={item:{position:"x1n2onr6",$$css:!0},itemWithActivity:{marginStart:"x1mnrxsn",$$css:!0},itemWithSpacing:{marginStart:"xsgj6o6",$$css:!0},overflow24:{height:"xxk0z11",width:"xvy4d1p",$$css:!0},overflow28:{height:"x1fgtraw",width:"xgd8bvy",$$css:!0},overflow32:{height:"x10w6t97",width:"x1td3qas",$$css:!0},overflow40:{height:"x1vqgdyp",width:"x100vrsf",$$css:!0},overflow48:{height:"xsdox4t",width:"x1useyqa",$$css:!0},overflowItem:{alignItems:"x6s0dn4",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x78zum5",flexShrink:"x2lah0s",justifyContent:"xl56j7k",pointerEvents:"x71s49j",$$css:!0},overflowItemOverlay:{fill:"x1wnuiir",opacity:"xg01cxk",transitionDuration:"x1ebt8du",transitionProperty:"x19991ni",transitionTimingFunction:"x1dhq9h",$$css:!0},overflowItemOverlayHovered:{fill:"x4bmajx",opacity:"x1hc1fzr",transitionDuration:"x1mq3mr6",$$css:!0},overflowItemOverlayPressed:{fill:"x1tgjyoi",opacity:"x1hc1fzr",transitionDuration:"x1mq3mr6",$$css:!0},overlappingItem:{marginStart:"x139jcc6",$$css:!0},pressableItem:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x1lliihq",$$css:!0},root:{display:"x78zum5",flexDirection:"xdt5ytf",$$css:!0},rootInline:{alignItems:"x6s0dn4",flexDirection:"x1q0g3np",$$css:!0},text:{paddingTop:"xz9dl7a",$$css:!0},textInline:{paddingStart:"x1e558r4",paddingTop:"xexx8yu",$$css:!0}};function a(a){var b=a.count,e=a.ellipsisTooltip,f=a.isOverlapping,g=f===void 0?!1:f;f=a.isTextInline;f=f===void 0?!1:f;var i=a.items,k=a.linkProps,m=a.onPress,p=a.size,z=a.testid;z=a.testOnly_pressed;var A=z===void 0?!1:z;z=a.text;a=a.withWrapper;var B=(b=b)!=null?b:i.length;b=i.some(function(a){return a.addOn!=null});var C=i.some(function(a){return((a=a.addOn)==null?void 0:a.type)==="activityBadge"}),D=g?u:C?t:s,E=Math.min(B,i.length,f?3:Infinity),F=o(null),G=n(),H=[{command:{key:c("CometKeys").LEFT},description:h._("__JHASH__m_OLWX7kM2N__JHASH__"),handler:function(){}},{command:{key:c("CometKeys").RIGHT},description:h._("__JHASH__XPwbX58ULdf__JHASH__"),handler:function(){}}];b=l.jsxs("div",{className:"x78zum5 x1q0g3np xhsvlbd x16pr9af x6ikm8r x889kno x1a8lsjc x1n2onr6",ref:F,role:"row",children:[i.slice(0,E).map(function(a,b){var d=a.addOn,e=a.alt,f=a.containerComponent,h=a.source;a=babelHelpers.objectWithoutPropertiesLoose(a,["addOn","alt","containerComponent","source"]);return l.jsxs(l.Fragment,{children:[l.jsx(c("BaseContainerQueryElement.react"),{breakpoint:(b+1)*(p+D)-D,inverseToContainer:!0,maxWidth:"100%",minWidth:0}),l.jsx(w,{Container:f,FocusItemComponent:r,addOn:d,alt:e,divClassName:(j||(j=c("stylex")))(v.item,b>0&&v.itemWithSpacing,b>0&&C&&v.itemWithActivity,b>0&&g&&v.overlappingItem),isOverlapped:g&&b>0,parentRef:F,pressableProps:a.onPress||a.linkProps?babelHelpers["extends"]({},a,{display:"inline",overlayDisabled:g,overlayRadius:p/2,xstyle:v.pressableItem}):null,role:"cell",shape:"circle",size:p,source:h})]},b)}),!b&&(m||k)&&l.jsxs("div",{className:"x1jn9clo x78zum5 xds687c x1q0g3np x47corl x10l6tqk x17qophe x1eu8d0j",children:[i.slice(0,Math.min(i.length,E<B?E:B)).map(function(a,b){return b===0&&B>1?null:l.jsx(c("BaseContainerQueryElement.react"),{breakpoint:(b+1)*(p+D)-D,maxWidth:b===B-1?"100%":p+D,minWidth:0},"overflowPusher"+b)}),l.jsx(y,{FocusItemComponent:r,"aria-label":h._("__JHASH__fu6soEiUs4x__JHASH__"),ellipsisTooltip:e,linkProps:k,onPress:m,overlayDisabled:!0,parentRef:F,size:p,spacing:D,testid:void 0,xstyle:[v.overflowItem,p===24&&v.overflow24,p===28&&v.overflow28,p===32&&v.overflow32,p===40&&v.overflow40,p===48&&v.overflow48],children:function(a){var b=a.hovered;a=a.pressed;return l.jsxs(l.Fragment,{children:[l.jsxs("svg",{"aria-hidden":!0,className:"x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy",height:p,viewBox:"0 0 "+p+" "+p,width:p,children:[g&&E>1&&l.jsxs("mask",{id:G,suppressHydrationWarning:!0,children:[l.jsx("circle",{cx:p/2,cy:p/2,fill:"white",r:p/2}),l.jsx("circle",{cx:-p/2+4,cy:p/2,fill:"black",r:p/2+2})]}),l.jsx("circle",babelHelpers["extends"]({className:"x1wnuiir",cx:p/2,cy:p/2,r:p/2,suppressHydrationWarning:!0},g&&E>1?{mask:"url(#"+G+")"}:null)),l.jsx("circle",babelHelpers["extends"]({className:(j||(j=c("stylex")))(v.overflowItemOverlay,b&&v.overflowItemOverlayHovered,(a||A)&&v.overflowItemOverlayPressed),cx:p/2,cy:p/2,r:p/2,suppressHydrationWarning:!0},g&&E>1?{mask:"url(#"+G+")"}:null))]}),l.jsx(c("FDSIcon.react"),{color:"white",icon:x(p)})]})}})]})]});i=l.jsxs("div",{className:(j||(j=c("stylex")))(v.root,f&&v.rootInline),"data-testid":void 0,role:"grid",children:[l.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:H,children:l.jsx(q,{orientation:"horizontal",tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:b})}),z!=null?l.jsx("div",{className:(j||(j=c("stylex")))(v.text,f&&v.textInline),children:l.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:z})}):null]});return a?l.jsx("div",{className:"xn6708d x1swvt13 xyamay9",children:i}):i}a.displayName=a.name+" [from "+f.id+"]";function w(a){var b=a.Container;b=b===void 0?l.Fragment:b;var e=a.FocusItemComponent,f=a.divClassName,g=a.parentRef,h=a.pressableProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["Container","FocusItemComponent","divClassName","parentRef","pressableProps"]);var i=p(!1),j=i[0],k=i[1];i=m(function(a){var b=a.intersectionRatio;c("gkx")("2865")?k(b<.5):d("ReactDOMComet").flushSync(function(){k(b<.5)})},[]);i=c("useIntersectionObserver")(i,{root:function(){var a;return(a=g.current)!=null?a:null},threshold:.5});return l.jsx("div",{className:f,ref:i,role:"gridcell",children:l.jsx(e,{disabled:j,children:l.jsx(b,{children:h!=null?l.jsx(c("CometPressable.react"),babelHelpers["extends"]({},h,{disabled:j,children:l.jsx(c("CometProfilePhoto.react"),babelHelpers["extends"]({},a,{overlayDisabled:!0}))})):l.jsx(c("CometProfilePhoto.react"),babelHelpers["extends"]({},a,{overlayDisabled:!0}))})})})}w.displayName=w.name+" [from "+f.id+"]";function x(a){switch(a){case 32:return d("fbicon")._(i("484386"),16);case 40:case 48:return d("fbicon")._(i("484388"),24);default:return d("fbicon")._(i("484385"),12)}}function y(a){var b=a.FocusItemComponent,e=a.ellipsisTooltip,f=a.parentRef,g=a.size,h=a.spacing;a=babelHelpers.objectWithoutPropertiesLoose(a,["FocusItemComponent","ellipsisTooltip","parentRef","size","spacing"]);var i=p(!1),j=i[0],k=i[1];i=p(null);var n=i[0],o=i[1];i=m(function(a){var b=a.intersectionRatio;d("ReactDOMComet").flushSync(function(){k(b<.5)})},[]);i=c("useIntersectionObserver")(i,{root:function(){var a;return(a=f.current)!=null?a:null},threshold:.5});var q=function(a){if(!a)return;a=f.current;if(!a)return;a=a.getBoundingClientRect();a=a.width;a=Math.floor((a+h)/(g+h));o(a-1)};a=l.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{ref:i,role:"cell"}));return l.jsx(b,{disabled:j,children:e?l.jsx(c("FDSTooltip.react"),{align:"middle",onVisibilityChange:q,position:"below",tooltip:n!=null?e(n):"",children:a}):a})}y.displayName=y.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("fbjs/lib/ExecutionEnvironment",["ExecutionEnvironment"],(function(a,b,c,d,e,f){"use strict";var g;e.exports=g||b("ExecutionEnvironment")}),null);
__d("getVendorPrefixedName",["invariant","ExecutionEnvironment","UserAgent","camelize"],(function(a,b,c,d,e,f,g,h){var i,j={},k=["Webkit","ms","Moz","O"],l=new RegExp("^("+k.join("|")+")"),m=(i||(i=c("ExecutionEnvironment"))).canUseDOM?document.createElement("div").style:{};function n(a){for(var b=0;b<k.length;b++){var c=k[b]+a;if(c in m)return c}return null}function o(a){switch(a){case"lineClamp":return c("UserAgent").isEngine("WebKit >= 315.14.2")||c("UserAgent").isEngine("Blink")?"WebkitLineClamp":null;default:return null}}function a(a){var b=c("camelize")(a);if(j[b]===void 0){var d=b.charAt(0).toUpperCase()+b.slice(1);l.test(d)&&h(0,957,a);(i||(i=c("ExecutionEnvironment"))).canUseDOM?j[b]=b in m?b:n(d):j[b]=o(b)}return j[b]}g["default"]=a}),98);
__d("useThrottled",["cr:6101"],(function(a,b,c,d,e,f,g){"use strict";f.exports=b("cr:6101")}),34);
__d("useThrottledComet",["CometThrottle","react","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useLayoutEffect,k=b.useRef;function a(a,b){b===void 0&&(b=100);var d=k(a);j(function(){d.current=a},[a]);var e=c("useStable")(function(){return c("CometThrottle")(function(){var a=arguments;return d.current==null?void 0:d.current.apply(d,a)},b)});i(function(){return function(){e.cancel()}},[]);return e}g["default"]=a}),98);
__d("useThrottledImpl",["cr:1708227"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1708227")}),98);