;/*FB_PKG_DELIM*/

__d("CometComposerFormRefContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({current:null});g["default"]=b}),98);
__d("CometComposerPluginsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({decorators:new Map(),handlers:new Map()});g["default"]=b}),98);
__d("cometComposerPluginsReducers",[],(function(a,b,c,d,e,f){"use strict";function g(a,b){var c=a.get(b);if(c!=null){a.set(b,c+1);return a}else{c=new Map(a);c.set(b,1);return c}}function h(a,b){var c=a.get(b);if(c!=null)if(c>1)a.set(b,c-1);else{c=new Map(a);c["delete"](b);return c}return a}function a(a,b){switch(b.type){case"install_decorator":case"uninstall_decorator":var c=b.type==="install_decorator"?g(a.decorators,b.decorator):h(a.decorators,b.decorator);if(c!==a.decorators)return babelHelpers["extends"]({},a,{decorators:c});break;case"install_handler":case"uninstall_handler":c=b.type==="install_handler"?g(a.handlers,b.handler):h(a.handlers,b.handler);if(c!==a.handlers)return babelHelpers["extends"]({},a,{handlers:c});break}return a}f["default"]=a}),66);
__d("createEmptyCometComposerViewStateWithTarget",["createEmptyCometComposerViewState"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return function(b){b=c("createEmptyCometComposerViewState")(b);return babelHelpers["extends"]({},b,{target:a})}}g["default"]=a}),98);
__d("getComposerValidationErrors",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c={};for(var d in a){var e=a[d];e=e(b);e!=null&&(c[d]=e)}return c}f["default"]=a}),66);
__d("getIneligibleComposerFeatures",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=new Set();for(var d in a){var e=a[d];e=e(b);e!=null&&e.forEach(function(a){return c.add(a)})}return c}f["default"]=a}),66);
__d("getShouldTriggerUnsavedChangesFlow",[],(function(a,b,c,d,e,f){"use strict";function a(a){return!Boolean(a==null?void 0:a.ignoreDirtyFlag)&&Boolean(a==null?void 0:a.isDirty)}f["default"]=a}),66);
__d("isAttachmentEmpty",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b;if(((b=a.isEmptyMetaData)==null?void 0:b.useIsEmpty)!==!0)return!1;if(((b=a.attachmentArea)==null?void 0:b.activeAttachmentType)!=null){if(a.attachmentArea.activeAttachmentType==="MEDIA"&&(a.mediaAttachments==null||a.mediaAttachments.length===0))return!0;if(a.attachmentArea.activeAttachmentType!=="FORMATTED_TEXT")return!1}if(((b=a.footerAttachmentArea)==null?void 0:b.activeFooterAttachmentType)!=null)return!1;if(a.withTagIDsTracker!=null&&a.withTagIDsTracker.size>0)return!1;if(a.activityMinutiae!=null)return!1;return a.locationMinutiae!=null?!1:!0}f["default"]=a}),66);
__d("isComposerEmpty",["cr:47","getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE","gkx","isAttachmentEmpty"],(function(a,b,c,d,e,f,g){"use strict";function h(a){a=(a==null?void 0:a.editorState)?c("getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE")(a==null?void 0:a.editorState).trim():"";return a.length===0}var i=c("gkx")("20836");function a(a){var d;if(((d=a.isEmptyMetaData)==null?void 0:d.useIsEmpty)!==!0)return!1;if(i&&a.lexicalEditorIsEmpty===!1)return!1;if(!i&&a.lexicalEditorIsDirty===!0)return!1;if(a.lexicalEditor==null&&!h(a))return!1;if(!c("isAttachmentEmpty")(a))return!1;return(b("cr:47")==null?void 0:b("cr:47")(a))?!1:!0}g["default"]=a}),98);
__d("reduceComposerViewState",["CometComposerDirtyTracker","isComposerEmpty"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e,f,g){var h=e;a=a.current.keys();for(var a=a,i=Array.isArray(a),j=0,a=i?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var k;if(i){if(j>=a.length)break;k=a[j++]}else{j=a.next();if(j.done)break;k=j.value}k=k;h=k(h,g)}k=h.lexicalEditorIsDirty===!0||Array.from(b.current.keys()).some(function(a){a=a(f,h);return a===!0||a==="UPDATED"||a==="DELETED"});j=c("isComposerEmpty")(h);d("CometComposerDirtyTracker").setIsComposerDirty(e.creationSessionID,j?!1:k);return babelHelpers["extends"]({},h,{isDirty:k,isEmptyMetaData:{isEmpty:j,useIsEmpty:(a=(i=h.isEmptyMetaData)==null?void 0:i.useIsEmpty)!=null?a:!0}})}g["default"]=a}),98);
__d("useComposerLexicalEligibityCheckHooks.react",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=new Set();if(b!=null)for(var d in b){var e=b[d](a);e.size>0&&e.forEach(function(a){return c.add(a)})}return c}f["default"]=a}),66);
__d("useComposerLexicalValidationHooks.react",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c={};if(b!=null)for(var d in b){var e=b[d](a);e!=null?c[d]=e:c[d]!=null&&delete c[d]}return c}f["default"]=a}),66);
__d("CometComposer.react",["CometComposerFeatureDefinitionsContext","CometComposerFormRefContext","CometComposerIneligibilityContext","CometComposerLoggerDispatcherContext","CometComposerPluginsContext","CometComposerPluginsDispatchContext","CometComposerPreSubmitHooksContext","CometComposerValidationErrorsContext","CometComposerViewStateAlteredContext","CometComposerViewStateContext","CometComposerViewStateDispatcherContext","CometComposerViewStateReducersContext","CometOnBeforeUnload.react","FBLogger","Promise","cometComposerPluginsReducers","createEmptyCometComposerViewStateWithTarget","getComposerUnsavedChangesAlert","getComposerValidationErrors","getIneligibleComposerFeatures","getShouldTriggerUnsavedChangesFlow","react","reduceComposerViewState","shallowEqual","useComposerLexicalEligibityCheckHooks.react","useComposerLexicalValidationHooks.react","useComposerTerminalEventLog"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useCallback,l=e.useImperativeHandle,m=e.useMemo,n=e.useReducer,o=e.useRef;d=j.forwardRef(a);function a(a,d){a=babelHelpers["extends"]({},a);var e=a.beginningViewState,f=a.children,g=a.eligibilityCheckers,i=a.featureDefinitions,p=a.lexicalEligibityCheckHooks,q=a.lexicalValidationHooks,r=a.loggers,s=a.onBeforeViewStateChange,t=a.onSubmitCommit,u=a.onSubmitHalt,v=a.onSubmitStart,w=a.onValidationErrors,x=a.registerOnBeforeUnload;x=x===void 0?!0:x;var y=a.target,z=a.unalteredBeginningViewState,A=a.validators,B=o(new Map()),C=o(new Map()),D=o({}),E=o(new Set()),F=o(new Map()),G=o(null);a=o(null);e=n(function(a,b){b=c("reduceComposerViewState")(B,C,a,z,b);G.current=b;s&&s(b,a);return b},e,c("createEmptyCometComposerViewStateWithTarget")(y));var H=e[0];e=e[1];var I=function(){if(c("getShouldTriggerUnsavedChangesFlow")(H))return c("getComposerUnsavedChangesAlert")(H)};l(d,function(){return{getViewState:function(){return H}}},[H]);d=n(c("cometComposerPluginsReducers"),{decorators:new Map(),handlers:new Map()});var J=d[0];d=d[1];var K=m(function(){return A!=null?c("getComposerValidationErrors")(A,H):{}},[A,H]);q=c("useComposerLexicalValidationHooks.react")(H,q);K=babelHelpers["extends"]({},K,q);c("shallowEqual")(D.current,K)||(D.current=K);var L=m(function(){return g!=null?c("getIneligibleComposerFeatures")(g,H):new Set()},[g,H]);q=c("useComposerLexicalEligibityCheckHooks.react")(H,p);K=m(function(){return{featureDefinitions:i}},[i]);(E.current.size!==L.size+q.size||!Array.from(L).every(function(a){return E.current.has(a)})||!Array.from(q).every(function(a){return E.current.has(a)}))&&(q.forEach(function(a){return L.add(a)}),E.current=new Set(L));var M=k(function(a,c){a!=null&&a.type!=="press"&&a.preventDefault();if(Object.keys(D.current).length>0){w&&w(D.current);return}var d=G.current;if(d==null)return;v&&v(d);a=F.current;if(a){a=Array.from(a.keys()).reduce(function(a,e){return a.then(function(){return new(h||(h=b("Promise")))(function(a,b){e({onContinue:a,onHalt:b},d,c)})})},(h||(h=b("Promise"))).resolve());a.then(function(){t(d,c)})["catch"](function(){u&&u(d)})}else t(d,c)},[t,u,v,w]),N=H.creationSessionID;p=m(function(){return function(a){var b;N==null?c("FBLogger")("comet_composer").mustfix("creationSessionID should be defined in composer of type "+String(y==null?void 0:y.type)):((b=r)!=null?b:[]).map(function(b){return b(a,N,{target:y})})}},[N,y,r]);c("useComposerTerminalEventLog")(function(){return c("getShouldTriggerUnsavedChangesFlow")(H)},function(){return N});return j.jsx(c("CometComposerPluginsDispatchContext").Provider,{value:d,children:j.jsx(c("CometComposerPluginsContext").Provider,{value:J,children:j.jsx(c("CometComposerFeatureDefinitionsContext").Provider,{value:K,children:j.jsx(c("CometComposerViewStateReducersContext").Provider,{value:B,children:j.jsx(c("CometComposerViewStateAlteredContext").Provider,{value:C,children:j.jsx(c("CometComposerViewStateContext").Provider,{value:H,children:j.jsx(c("CometComposerViewStateDispatcherContext").Provider,{value:e,children:j.jsx(c("CometComposerValidationErrorsContext").Provider,{value:D.current,children:j.jsx(c("CometComposerIneligibilityContext").Provider,{value:E.current,children:j.jsx(c("CometComposerLoggerDispatcherContext").Provider,{value:p,children:j.jsx(c("CometComposerPreSubmitHooksContext").Provider,{value:F,children:j.jsxs(c("CometComposerFormRefContext").Provider,{value:a,children:[j.jsxs("form",{"data-testid":void 0,method:"POST",onSubmit:M,ref:a,children:[m(function(){return f(M)},[f,M]),j.jsx("input",{style:{display:"none"},type:"submit"})]}),x?j.jsx(c("CometOnBeforeUnload.react"),{onBeforeUnload:I}):null]})})})})})})})})})})})})}a.displayName=a.name+" [from "+f.id+"]";e=d;g["default"]=e}),98);
__d("CometComposerEditorForLexicalBootstrapPlugin.react",["FeedComposerCometTextStyleContext","Lexical","LexicalComposerContext","react","useLexicalInitializeEditor__DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useContext,j=b.useEffect,k=b.useLayoutEffect;function a(a){var b=a.autoFocus,e=a.inputElementRef,f=a.textAlignment;a=d("LexicalComposerContext").useLexicalComposerContext();var g=a[0];a=i(c("FeedComposerCometTextStyleContext"));var h=a.color,l=a.fontSize;c("useLexicalInitializeEditor__DEPRECATED")(g);k(function(){g.update(function(){var a=d("Lexical").$getRoot().getFirstChild();f!=null?a==null?void 0:a.setFormat(f):a!=null&&a.setFormat("")}),e.current!=null&&(e.current.style.color=h,e.current.style.fontSize=l+"px")},[g,h,l,f,e]);j(function(){b===!0&&g.focus()},[b,g])}g["default"]=a}),98);
__d("CometComposerNodes",["CometLexicalDelightNode","CometLexicalEmojiNode","CometLexicalGenericEntityNode","LexicalHashtag","LexicalLink","LexicalOverflow"],(function(a,b,c,d,e,f,g){"use strict";a=[d("CometLexicalGenericEntityNode").CometLexicalGenericEntityNode,d("CometLexicalEmojiNode").EmojiNode,d("LexicalLink").LinkNode,d("LexicalLink").AutoLinkNode,d("LexicalHashtag").HashtagNode,d("LexicalOverflow").OverflowNode,d("CometLexicalDelightNode").CometLexicalDelightNode];g.COMET_NODES=a}),98);
__d("cometComposerLexicalCreateEditor",["CometComposerNodes","FBLogger","Lexical","cometLexicalBaseTheme","mlcErrorHandler__INTERNAL"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("Lexical").createEditor({namespace:"CometPostComposer",nodes:d("CometComposerNodes").COMET_NODES,onError:function(b){return c("mlcErrorHandler__INTERNAL")(b,a,function(a){c("FBLogger")("CometComposer").catching(b).mustfix("Lexical Error Composer \u2013 "+a)})},theme:babelHelpers["extends"]({},c("cometLexicalBaseTheme"),{hashtag:"xv78j7m x1sy0etr",link:"x1fey0fg xmper1u x1edh9d7",paragraph:"xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8",placeholder:"xi81zsa x6ikm8r x10wlt62 x47corl x10l6tqk xlyipyv x13vifvy x87ps6o xuxw1ft"})});return a}g["default"]=a}),98);
__d("CometComposerEditorForLexical.react",["CometComposerEditorForLexicalBootstrapPlugin.react","CometLexicalContentEditable.react","LexicalComposerContext","LexicalErrorBoundary","LexicalHistoryPlugin","LexicalPlainTextPlugin","MLCInstrumentationPluginDeferred__INTERNAL.react","cometComposerLexicalCreateEditor","composerLexicalEditorViewStateReducer","cr:1305","cr:183","cr:2092","cr:5525","cr:5565","gkx","react","useComposerViewStateDispatcher","useComposerViewStateReducer","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;var j=e.useCallback,k=e.useMemo,l=e.useRef,m=c("gkx")("20836"),n={root:{boxSizing:"x9f619",display:"x1lliihq",height:"x5yr21d",width:"xh8yej3",$$css:!0}};function a(a){var e,f=a.ariaLabel,g=a.autoFocus,h=a.canUseGeminiLinksPlugin,o=a.lexicalEditor,p=a.placeholderCustomStyles,q=a.placeholderText,r=a.richTextSupported,s=a.surface;a=a.textAlignment;c("useComposerViewStateReducer")(c("composerLexicalEditorViewStateReducer"));var t=c("useComposerViewStateDispatcher")(),u=r===!0,v=k(function(){if(o==null){var a=u&&b("cr:5525")!=null?b("cr:5525")():c("cometComposerLexicalCreateEditor")();t({lexicalEditor:a,type:"SET_LEXICAL_EDITOR_STATE"});return a}return o},[o,t,u]),w=l(null);r=j(function(a){w.current=a,v.setRootElement(a)},[v]);var x=k(function(){return[v,d("LexicalComposerContext").createLexicalComposerContext()]},[v]);e=i.jsx(c("CometLexicalContentEditable.react"),{ariaLabel:((e=q)!=null?e:[]).length>0?q:f,contentEditableRef:r,editor:v,spellCheck:!0,tabIndex:0,webDriverTestID:"comet-composer-editor-for-lexical",xstyle:n.root});f=i.jsx("div",{className:"xi81zsa x6ikm8r x10wlt62 x47corl x10l6tqk xlyipyv xs7f9wi x87ps6o x1vjfegm",style:p,children:q});return i.jsxs(i.Fragment,{children:[i.jsx(c("MLCInstrumentationPluginDeferred__INTERNAL.react"),{editor__DEPRECATED:v,format__DEPRECATED:"PlainText",policyProduct:m?"workplace":"facebook",surface:s}),i.jsxs(d("LexicalComposerContext").LexicalComposerContext.Provider,{value:x,children:[u&&b("cr:5565")!=null?i.jsx(b("cr:5565").RichTextPlugin,{ErrorBoundary:c("LexicalErrorBoundary"),contentEditable:e,placeholder:f}):i.jsx(d("LexicalPlainTextPlugin").PlainTextPlugin,{ErrorBoundary:c("LexicalErrorBoundary"),contentEditable:e,placeholder:f}),Boolean(h)&&b("cr:2092")!=null&&i.jsx(b("cr:2092"),{}),i.jsx(d("LexicalHistoryPlugin").HistoryPlugin,{}),i.jsx(c("CometComposerEditorForLexicalBootstrapPlugin.react"),{autoFocus:g,inputElementRef:w,textAlignment:a}),b("cr:183")!=null&&u&&i.jsx(b("cr:183"),{editor:v})]}),b("cr:1305")!=null?i.jsx(b("cr:1305"),{editor__DEPRECATED:v}):null]})}a.displayName=a.name+" [from "+f.id+"]";e=c("withComposerViewStatePart")(a,function(a){return{lexicalEditor:a.lexicalEditor}});g["default"]=e}),98);
__d("createComposerDeferredPlugin",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useRef,l=b.useState;function a(a){function b(b){var c=k(a.getModuleIfRequireable()),d=l(c.current!=null);d[0];var e=d[1];j(function(){var b=a.onReady(function(a){c.current=a,e(!0)});b=b.remove;return b},[]);if(c.current!=null){d=c.current;return i.jsx(d,babelHelpers["extends"]({},b))}return null}return i.memo(b)}g["default"]=a}),98);
__d("CometComposerHashtagsPluginForLexicalDeferred.react",["createComposerDeferredPlugin","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");a=c("createComposerDeferredPlugin")(c("requireDeferred")("CometComposerHashtagPluginForLexical.react").__setRef("CometComposerHashtagsPluginForLexicalDeferred.react"));g["default"]=a}),98);
__d("CometComposerHashtagsTypeaheadPluginForLexicalDeferred.react",["createComposerDeferredPlugin","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");a=c("createComposerDeferredPlugin")(c("requireDeferred")("CometComposerHashtagTypeaheadPluginForLexical.react").__setRef("CometComposerHashtagsTypeaheadPluginForLexicalDeferred.react"));g["default"]=a}),98);
__d("ComposerEmojiTrigger.react",["cr:2028537"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:2028537")}),98);
__d("ComposerEmojiPopoverButton.react",["fbt","ix","CometContextualLayerAnchorRoot.react","CometPressable.react","CometPressableChildrenWithOverlay.react","ComposerEmojiTrigger.react","FDSTooltip.react","ImageIconSource","TetraIcon.react","UNTRANSLATED_STRING_FIXME","fbicon","react","stylex","useCometStatusAreaTextData","useCurrentDisplayMode","withComposerViewStatePart"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react")),m=k.useState,n={pressable:{appearance:"xjyslct",backgroundColor:"xjbqb8w",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxSizing:"x9f619",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",textAlign:"x16tdsg8",zIndex:"x1ja2u2z",$$css:!0},pressed:{transform:"x1n5d1j9",$$css:!0},root:{opacity:"x1ks1olk",$$css:!0},rootHovered:{opacity:"x1hc1fzr",$$css:!0},withSATP:{paddingBottom:"xsag5q8",$$css:!0}};function o(a,b){return!a||b?"disabled":"tertiary"}function a(a){var b=a.disabled,e=b===void 0?!1:b,f=a.formattedTextPreset;b=a.shouldUseSmallEmojiIcon;var g=b===void 0?!1:b;a=m(!1);var k=a[0],p=a[1];b=m(!1);var q=b[0],r=b[1];b=(a=c("useCometStatusAreaTextData")(f))==null?void 0:a.formattedTextStyling;a=c("useCurrentDisplayMode")();a=a==="dark";var s=a;a=b==null?void 0:b.color;if(a!=null)try{b=parseInt(a.substring(1,3),16);var t=parseInt(a.substring(3,5),16);a=parseInt(a.substring(5,7),16);b=Math.min(b,t,a);s=b>128}catch(a){s=!1}return l.jsx(c("ComposerEmojiTrigger.react"),{setClicked:p,setHovered:r,children:function(a,b,m,t,u,v){m=function(a){t&&t(a),r(!0)};v=function(){u&&u(),r(!1)};var w=function(){p(!0),b()},x=g?d("fbicon")._(i("642534"),20):new(c("ImageIconSource"))(s?i("792304"):i("615750"),24,24),y=o(g,e);return l.jsx("div",{className:(j||(j=c("stylex")))(n.root,(g||k||q)&&n.rootHovered,f!=null&&n.withSATP),children:l.jsx("div",{children:l.jsx(c("FDSTooltip.react"),{position:"above",tooltip:"Emoji",children:l.jsx(c("CometPressable.react"),{"aria-label":c("UNTRANSLATED_STRING_FIXME")("Emoji"),disabled:e,label:"Emoji",onHoverIn:m,onHoverOut:v,onPress:e===!0?void 0:w,overlayDisabled:!g,ref:a,testid:void 0,xstyle:function(a){a=a.pressed;return[n.pressable,a&&e!==!0&&n.pressed]},children:function(b){b=b.overlay;return l.jsx("div",{children:l.jsx(c("CometContextualLayerAnchorRoot.react"),{children:l.jsx("div",{children:l.jsx("div",{className:"xc9qbxq x1n2onr6 x14qfxbe x14yjl9h xudhj91 x18nykt9 xww2gxu",children:l.jsx(c("CometPressableChildrenWithOverlay.react"),{overlay:b,children:l.jsx("div",{className:"x6s0dn4 x78zum5 xl56j7k x1n2onr6 x5yr21d xh8yej3",children:l.jsx(c("TetraIcon.react"),{"aria-label":h._("__JHASH__s5VY0zHIS2p__JHASH__"),color:y,icon:x,ref:a})})})})})})})}})})})})}})}a.displayName=a.name+" [from "+f.id+"]";b=c("withComposerViewStatePart")(a,function(a){return{formattedTextPreset:(a=a.formattedText)==null?void 0:a.currentFormattedTextPreset}});g["default"]=b}),226);
__d("ComposerEmojiTriggerImpl.react",["CometErrorBoundary.react","CometLazyPopoverTrigger.react","CometPopoverLoadingState.react","JSResourceForInteraction","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=c("JSResourceForInteraction")("ComposerEmojiPopover.react").__setRef("ComposerEmojiTriggerImpl.react"),k={popoverFallback:{minWidth:"x17upfok",$$css:!0}};function a(a){var b=a.align;b=b===void 0?"middle":b;var d=a.children,e=a.position;e=e===void 0?"above":e;var f=a.setClicked,g=a.setHovered;a=a.visibleOnLoad;a=a===void 0?!1:a;return i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(c("CometLazyPopoverTrigger.react"),{align:b,fallback:i.jsx(c("CometPopoverLoadingState.react"),{withArrow:!0,xstyle:k.popoverFallback}),popoverProps:{setClicked:f,setHovered:g},popoverResource:j,position:e,preloadTrigger:"button",tracePolicy:"comet.emojipicker",visibleOnLoad:a,children:d})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GeminiComposerLinksPluginForLexical.react",["createComposerDeferredPlugin","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=c("createComposerDeferredPlugin")(c("requireDeferred")("GeminiLexicalAutoLinkPlugin.react").__setRef("GeminiComposerLinksPluginForLexical.react")),k=c("createComposerDeferredPlugin")(c("requireDeferred")("GeminiComposerLinkAttachmentForLexical.react").__setRef("GeminiComposerLinksPluginForLexical.react"));function a(){return i.jsxs(i.Fragment,{children:[i.jsx(j,{}),i.jsx(k,{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("getDeferredComposerTransformer",[],(function(a,b,c,d,e,f){"use strict";function a(a){return function(b,c,d,e){a.loadImmediately(function(a){a(b,c,d,e)})}}f["default"]=a}),66);
__d("composerRichTextTransformDeferred",["getDeferredComposerTransformer","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";a=c("getDeferredComposerTransformer")(c("requireDeferred")("cometComposerRichTextTransformForDraftJS").__setRef("composerRichTextTransformDeferred"));g["default"]=a}),98);
__d("transformComposerViewStateToCreationData",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c,d,e){function f(d,g){var h=c[g];if(h!=null){var i=function(a){f(a,g+1)};h(a,d,i,b)}else e(d)}f(d,0)}f["default"]=a}),66);