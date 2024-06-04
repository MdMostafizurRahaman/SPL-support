;/*FB_PKG_DELIM*/

__d("FDSMenuItemBaseRoleContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("FDSMenuItemBase.react",["BaseNonBreakingSpace.react","CometFocusGroupFirstLetterNavigation","CometPressable.react","CometPressableOverlay.react","FDSMenuContext","FDSMenuFocusGroup","FDSMenuItemBaseRoleContext","FDSTextPairing.react","FDSTextWithIcon.react","TetraText.react","mergeRefs","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useContext,m=b.useEffect,n=b.useMemo,o=b.useRef,p={content:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"x1q0g3np",flexGrow:"x1iyjqo2",justifyContent:"x1qughib",minWidth:"xeuugli",$$css:!0},disabled:{cursor:"x1h6gzvc",$$css:!0},extraHorizontalPadding:{paddingStart:"xurb0ha",paddingEnd:"x1sxyh0",$$css:!0},listItem:{alignItems:"x6s0dn4",appearance:"xjyslct",boxSizing:"x9f619",cursor:"x1ypdohk",display:"x78zum5",flexDirection:"x1q0g3np",flexShrink:"x2lah0s",marginStart:"xnqzcj9",marginLeft:null,marginRight:null,marginEnd:"x1gh759c",marginTop:"xdj266r",marginBottom:"xat24cr",paddingStart:"x1344otq",paddingLeft:null,paddingRight:null,paddingEnd:"x1de53dj",paddingTop:"xz9dl7a",paddingBottom:"xsag5q8",position:"x1n2onr6",textAlign:"x16tdsg8",zIndex:"x1ja2u2z",$$css:!0},listItemAlignedCenter:{alignItems:"x6s0dn4",$$css:!0},listItemWithIcon:{paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",$$css:!0}};e=j.forwardRef(a);function a(a,b){var e=a.download,f=a.href,g=a.iconNode,i=a.overlayRadius,q=i===void 0?4:i;i=a.routeTarget;var r=a.target,s=a.traceParams,t=a.alignCenter;t=t===void 0?!1:t;var u=a.autoScrollOnLoad;u=u===void 0?!1:u;var v=a.aux,w=a.badge,x=a.bodyColor,y=a.bodyText,z=a.disabled,A=z===void 0?!1:z,B=a.focusRingPosition;z=a.id;var C=a.isIconAnImage,D=a.onClick,E=a.onFocusIn,F=a.onFocusOut,G=a.onHoverIn,H=a.onHoverOut,I=a.onPressIn,J=a.passthroughProps,K=a.prefetchQueriesOnHover,L=a.preventClosingMenuOnSelect;L=L===void 0?!1:L;var M=a.preventLocalNavigation,N=a.primaryColor,O=a.primaryText,P=a.role,Q=a.secondaryColor,R=a.secondaryText,S=a.testid;S=a.visuallyFocused;var T=S===void 0?!1:S;S=babelHelpers.objectWithoutPropertiesLoose(a,["download","href","iconNode","overlayRadius","routeTarget","target","traceParams","alignCenter","autoScrollOnLoad","aux","badge","bodyColor","bodyText","disabled","focusRingPosition","id","isIconAnImage","onClick","onFocusIn","onFocusOut","onHoverIn","onHoverOut","onPressIn","passthroughProps","prefetchQueriesOnHover","preventClosingMenuOnSelect","preventLocalNavigation","primaryColor","primaryText","role","secondaryColor","secondaryText","testid","visuallyFocused"]);var U=o(null);a=l(c("FDSMenuContext"));var V=L!==!0&&a?a.onClose:null;L=f!=null||i!=null||r!=null?{download:e,passthroughProps:J,prefetchQueriesOnHover:K,preventLocalNavigation:M,routeTarget:i,target:r,traceParams:s,url:f}:void 0;a=k(function(a){V!=null&&V(),D&&D(a)},[D,V]);e=l(c("FDSMenuItemBaseRoleContext"));M=(K=(J=P)!=null?J:e)!=null?K:void 0;var W=o(u);m(function(){var a=U.current;W.current&&a!=null&&(W.current=!1,a.scrollIntoView({block:"nearest"}))},[]);var X=o(T);m(function(){var a=U.current;!X.current&&T&&a!=null&&a.scrollIntoView({block:"nearest"})},[T]);var Y=o(null);i=d("CometFocusGroupFirstLetterNavigation").useFirstLetterNavigationTag(Y);r=n(function(){return c("mergeRefs")(b,U)},[b]);var Z=w!=null?typeof w==="number"?j.jsxs(j.Fragment,{children:[O,j.jsx(c("BaseNonBreakingSpace.react"),{size:.5}),j.jsx(c("TetraText.react"),{color:A?"disabled":N,type:"body4",children:w})]}):j.jsx(c("FDSTextWithIcon.react"),{iconAfter:w,children:O}):O;return j.jsx(c("FDSMenuFocusGroup").FocusItem,{disabled:A,tag:i,children:j.jsx(c("CometPressable.react"),babelHelpers["extends"]({},S,{disabled:A,display:"inline",id:z,linkProps:L,onFocusIn:E,onFocusOut:F,onHoverIn:G,onHoverOut:H,onPress:a,onPressIn:I,overlayDisabled:!0,ref:r,role:M,suppressFocusRing:!0,testid:void 0,xstyle:[p.listItem,t&&p.listItemAlignedCenter,g!=null&&p.listItemWithIcon,A&&p.disabled],children:function(a){var b,d=a.focusVisible,e=a.hovered;a=a.pressed;return j.jsxs(j.Fragment,{children:[g,j.jsxs("div",{className:(h||(h=c("stylex")))(p.content,((b=C)!=null?b:!1)&&p.extraHorizontalPadding),children:[j.jsx(c("FDSTextPairing.react"),{body:y,bodyColor:A?"disabled":x,headline:Z,headlineColor:A?"disabled":N,headlineRef:Y,level:4,meta:R,metaColor:A?"disabled":Q,reduceEmphasis:!0}),v!=null&&j.jsx("div",{className:"x2lah0s x16n37ib",children:v})]}),j.jsx(c("CometPressableOverlay.react"),{focusRingPosition:B,focusVisible:d||T,hovered:e,pressed:a,radius:q,showFocusRing:!0})]})}}))})}a.displayName=a.name+" [from "+f.id+"]";b=e;g["default"]=b}),98);
__d("FDSMenuItemIcon.react",["CometImage.react","FDSIcon.react","IconSource","ImageIconSource","SVGIcon","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useMemo,l={circle:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",$$css:!0},contained:{backgroundColor:"x1qhmfi1",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xvnh2x",minWidth:"x1g0q3yh",$$css:!0},inset:{boxShadow:"xlg9a9y",position:"x10l6tqk",start:"x17qophe",left:null,right:null,top:"x13vifvy",$$css:!0},normal:{height:"xcrj56b",minWidth:"x1ua1ozc",$$css:!0},root:{alignItems:"x6s0dn4",alignSelf:"xoi2r2e",display:"x78zum5",justifyContent:"xl56j7k",marginEnd:"xq8finb",$$css:!0},roundedRect:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",$$css:!0}};function a(a){var b=a.disabled,e=a.icon,f=a.iconColor,g=a.iconCssSelectorId,i=a.iconSize,m=i===void 0?20:i;i=a.use;var n=i===void 0?"normal":i;a=k(function(){if(e instanceof c("IconSource")){var a;return j.jsx(c("FDSIcon.react"),{color:(a=f)!=null?a:"primary",disabled:b,icon:e})}if(e instanceof c("ImageIconSource"))return j.jsx(c("FDSIcon.react"),{disabled:b,icon:e});if(e instanceof d("SVGIcon").SVGIcon){return j.jsx(c("FDSIcon.react"),{color:(a=f)!=null?a:"primary",disabled:b,icon:e,size:m})}if(e instanceof d("SVGIcon").LegacySVGIcon||e instanceof d("SVGIcon").EmojiIcon){return j.jsx(c("FDSIcon.react"),{color:(a=f)!=null?a:"primary",disabled:b,icon:e,size:m})}if(typeof e==="object"&&typeof e!=="function"&&!e._isSVG&&e.src!==null){a=n==="contained"?36:20;return j.jsxs("div",{className:"x1n2onr6",children:[j.jsx(c("CometImage.react"),{height:a,src:e.src,width:a,xstyle:[e.style==="circle"&&l.circle,e.style==="roundedRect"&&l.roundedRect]}),e.style!=="square"?j.jsx("div",{className:(h||(h=c("stylex")))(e.style==="circle"&&l.circle,l.inset,e.style==="roundedRect"&&l.roundedRect),style:{height:a,width:a}}):null]})}return j.jsx(c("FDSIcon.react"),{color:(a=f)!=null?a:"secondary",disabled:b,icon:e,size:m})},[b,e,f,m,n]);return j.jsx("div",{className:(h||(h=c("stylex")))([l.root,(n==="contained"||n==="contained_small_icon")&&l.contained,n==="normal"&&l.normal]),id:g,children:a})}a.displayName=a.name+" [from "+f.id+"]";b=j.memo(a);g["default"]=b}),98);