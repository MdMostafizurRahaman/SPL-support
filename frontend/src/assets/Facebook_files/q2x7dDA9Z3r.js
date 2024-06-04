;/*FB_PKG_DELIM*/

__d("CometTopNavListDropdownTitle.react",["fbt","ix","BaseHeading.react","CometRow.react","CometRowItem.react","Locale","TetraCircleButton.react","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||d("react"),l=[];function a(a){var b=a.actions;b=b===void 0?l:b;var e=a.onReturn,f=a.testid;f=a.title;return k.jsxs("header",{className:"x6s0dn4 x78zum5 x2lah0s x1qughib x21xpn4 xz9dl7a x1pi30zi xjkvuk6 x1swvt13","data-testid":void 0,children:[k.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingTop:0,spacingHorizontal:8,children:[e!=null?k.jsx(c("CometRowItem.react"),{children:k.jsx(c("TetraCircleButton.react"),{icon:d("Locale").isRTL()?d("fbicon")._(i("514454"),20):d("fbicon")._(i("512647"),20),label:h._("__JHASH__v6nfNn2Wv-y__JHASH__"),onPress:e,size:32,type:"deemphasized"})}):null,k.jsx(c("CometRowItem.react"),{verticalAlign:"center",children:k.jsx(c("BaseHeading.react"),{isPrimaryHeading:!0,children:k.jsx(c("TetraText.react"),{type:"headlineEmphasized1",children:f})})})]}),k.jsx(c("CometRow.react"),{paddingHorizontal:0,paddingTop:0,spacingHorizontal:8,children:b.map(function(a,b){return k.jsx(c("CometRowItem.react"),{children:a},b)})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("LSClearLoadingFlagsForThreadRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(d){return a[1]?b.forEach(b.db.table(10).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({isLoadingAfter:!1})}):b.sequence([function(d){return b.i64.eq(b.i64.cast([0,0]),a[0])?b.sequence([function(c){return b.forEach(b.db.table(198).fetch([[[a[2]]]]),function(a){var b=a.update;a.item;return b({isLoadingBefore:!1})})},function(a){return c[8]=b.i64.cast([0,0]),c[9]=void 0,c[10]=!1,c[11]=!1,b.forEach(b.db.table(198).fetch(),function(a){a=a.item;return c[12]=a.minLastActivityTimestampMs,c[14]=a.minThreadKey,c[13]=b.i64.lt(c[8]==null?c[12]:c[8],c[12]),c[8]=c[13]?c[12]:c[8],c[9]=c[13]?c[14]:c[9],c[10]=c[10]||a.isLoadingBefore,c[11]=c[11]||b.i64.gt(c[12],b.i64.cast([0,1]))&&b.i64.gt(c[14],b.i64.cast([-2147483648,0]))})},function(a){return a=[c[8],c[9],c[10],c[11]],c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],a}]):b.resolve((d=[b.i64.cast([0,0]),void 0,!1,!1],c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],d))},function(c){return b.forEach(b.db.table(220).fetch([[[a[2],a[0]]]]),function(a){var b=a.update;a.item;return b({isLoadingBefore:!1})})},function(d){return c[4]=c[0],c[5]=c[1],c[6]=c[2],c[7]=c[3],b.forEach(b.filter(b.db.table(220).fetch(),function(c){return b.i64.eq(c.parentThreadKey,a[0])}),function(a){a=a.item;return c[8]=a.minLastActivityTimestampMs,c[10]=a.minThreadKey,c[9]=b.i64.lt(c[4]==null?c[8]:c[4],c[8]),c[4]=c[9]?c[8]:c[4],c[5]=c[9]?c[10]:c[5],c[6]=c[6]||a.isLoadingBefore,c[7]=c[7]||b.i64.gt(c[8],b.i64.cast([0,1]))&&b.i64.gt(c[10],b.i64.cast([-2147483648,0]))})},function(d){return b.forEach(b.db.table(10).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({isLoadingBefore:c[6]})})}])},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSRestrictionType",[],(function(a,b,c,d,e,f){a=Object.freeze({NONE:0,DATA_PRIVACY:1,ENCRYPTED_THREAD:2});f["default"]=a}),66);
__d("LSThreadRangeFilter",[],(function(a,b,c,d,e,f){a=Object.freeze({NONE:0,UNREAD_ONLY:1,GROUPS_ONLY:2,IGD_PRO_PRIMARY:3,IGD_PRO_GENERAL:4,PINNED:5,READ_BUT_UNRESPONDED:6,THREAD_CHAT_LABEL:7,BUSINESS_INBOX_FOLLOW_UP:8,FAMILY_AND_FRIENDS:9,CHANNELS:10,IGD_PRO_CHANNELS:11,BUSINESS_FOLDER_DONE:12,BUSINESS_FOLDER_SPAM:13,BUSINESS_FOLDER_FOLLOW_UP:14,BUSINESS_SECONDARY_FILTER:15,FROM_ADS:16,PRIORITY:17,ASSIGNED_ADMIN:18,COMMUNITIES:19,WORKROOMS_ONLY:20,SUBTHREAD:21,CHANNELS_AND_INVITES:22,UNIFIED_BUSINESS_INBOX_IGD:23,UNIFIED_BUSINESS_INBOX_MESSENGER:24,LOCKED:25,BIIM_PRIORITY:26,BIIM_HIGH_INTENT:27,UNIFIED_BUSINESS_INBOX_WA:28,AI_AGENT:29,CTX_AD:30,CHANNELS_INCLUDING_UNJOINED:31});f["default"]=a}),66);
__d("LSUpsertInboxThreadsRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(198).put({syncGroup:a[0],minLastActivityTimestampMs:a[1],hasMoreBefore:a[2],isLoadingBefore:a[3],minThreadKey:a[4]})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpsertSyncGroupThreadsRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(220).put({syncGroup:a[0],parentThreadKey:a[1],minLastActivityTimestampMs:a[2],hasMoreBefore:a[3],isLoadingBefore:a[4],minThreadKey:a[5]})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSThreadsRangesQuery",["LSClearLoadingFlagsForThreadRange","LSGetCursor","LSIssueNewTaskAndGetTaskID","LSUpsertInboxThreadsRange","LSUpsertSyncGroupThreadsRange"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(e){return a[1]&&c.i64.eq(a[6],c.i64.cast([0,0]))?c.storedProcedure(b("LSClearLoadingFlagsForThreadRange"),a[0],!1,c.i64.cast([0,1])):(a[1]&&c.i64.neq(a[6],void 0)&&c.i64.neq(a[3],void 0)||a[2]&&c.i64.neq(a[5],void 0)&&c.i64.neq(a[4],void 0))&&!(a[1]&&c.i64.neq(a[6],void 0)&&c.i64.neq(a[3],void 0)&&a[2]&&c.i64.neq(a[5],void 0)&&c.i64.neq(a[4],void 0))?c.sequence([function(e){return d[16]=a[3]==null?c.i64.cast([-2147483648,0]):a[3],d[15]=a[6]==null?c.i64.cast([0,1]):a[6],d[17]=c.i64.gt(d[15],c.i64.cast([0,1]))&&c.i64.gt(d[16],c.i64.cast([-2147483648,0])),d[4]=c.i64.eq(c.i64.cast([0,1]),c.i64.cast([0,1]))||c.i64.eq(c.i64.cast([0,1]),c.i64.cast([0,95])),d[4]&&c.i64.eq(a[0],c.i64.cast([0,0]))?c.sequence([function(a){return c.storedProcedure(b("LSUpsertInboxThreadsRange"),c.i64.cast([0,1]),d[15],d[17],!0,d[16])},function(a){return d[18]=d[15],d[19]=d[16],d[20]=!0,d[21]=d[17],c.forEach(c.db.table(198).fetch(),function(a){a=a.item;return d[22]=a.minLastActivityTimestampMs,d[24]=a.minThreadKey,d[23]=c.i64.lt(d[18]==null?d[22]:d[18],d[22]),d[18]=d[23]?d[22]:d[18],d[19]=d[23]?d[24]:d[19],d[20]=d[20]||a.isLoadingBefore,d[21]=d[21]||c.i64.gt(d[22],c.i64.cast([0,1]))&&c.i64.gt(d[24],c.i64.cast([-2147483648,0]))})},function(a){return a=[d[18],d[19],d[20],d[21]],d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3],a}]):c.resolve((e=[d[15],d[16],!0,d[17]],d[0]=e[0],d[1]=e[1],d[2]=e[2],d[3]=e[3],e))},function(e){return d[4]?c.sequence([function(e){return c.storedProcedure(b("LSUpsertSyncGroupThreadsRange"),c.i64.cast([0,1]),a[0],d[15],d[17],!0,d[16])},function(b){return d[18]=d[15],d[19]=d[16],d[20]=!0,d[21]=d[17],c.forEach(c.filter(c.db.table(220).fetch(),function(b){return c.i64.eq(b.parentThreadKey,a[0])}),function(a){a=a.item;return d[22]=a.minLastActivityTimestampMs,d[24]=a.minThreadKey,d[23]=c.i64.lt(d[18]==null?d[22]:d[18],d[22]),d[18]=d[23]?d[22]:d[18],d[19]=d[23]?d[24]:d[19],d[20]=d[20]||a.isLoadingBefore,d[21]=d[21]||c.i64.gt(d[22],c.i64.cast([0,1]))&&c.i64.gt(d[24],c.i64.cast([-2147483648,0]))})},function(a){return a=[d[18],d[19],d[20],d[21]],d[5]=a[0],d[6]=a[1],d[7]=a[2],d[8]=a[3],a}]):c.resolve((e=[d[0],d[1],d[2],d[3]],d[5]=e[0],d[6]=e[1],d[7]=e[2],d[8]=e[3],e))},function(a){return c.storedProcedure(b("LSGetCursor"),c.i64.cast([0,1])).then(function(a){return a=a,d[9]=a[0],a})},function(e){return d[10]=new c.Map(),d[10].set("is_after",a[2]),d[10].set("parent_thread_key",a[0]),d[10].set("reference_thread_key",a[2]?a[4]:a[3]),d[10].set("reference_activity_timestamp",a[2]?a[5]:a[6]),d[10].set("additional_pages_to_fetch",a[7]),d[10].set("cursor",d[9]),d[10].set("messaging_tag",void 0),d[10].set("sync_group",c.i64.cast([0,1])),c.i64.gt(c.i64.cast([0,0]),c.i64.cast([0,0]))?(d[18]=c.i64.of_float(Date.now()),d[11]=c.i64.add(d[18],c.i64.cast([0,0]))):d[11]=c.i64.cast([0,0]),d[12]=c.toJSON(d[10]),c.storedProcedure(b("LSIssueNewTaskAndGetTaskID"),"trq",c.i64.cast([0,145]),d[12],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,d[11],c.i64.cast([0,0])).then(function(a){return a=a,d[13]=a[0],a})},function(b){return c.db.table(10).fetch([[[a[0]]]]).next().then(function(b,e){e=b.done;b=b.value;return e?c.db.table(10).add({parentThreadKey:a[0],minThreadKey:d[6]==null?c.i64.cast([-2147483648,0]):d[6],minLastActivityTimestampMs:d[5]==null?c.i64.cast([0,1]):d[5],maxLastActivityTimestampMs:c.i64.cast([0,1]),maxThreadKey:c.i64.cast([-2147483648,0]),isLoadingBefore:d[7],isLoadingAfter:!1,hasMoreBefore:d[8],hasMoreAfter:!1}):(b.item,c.forEach(c.db.table(10).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({isLoadingBefore:d[7],isLoadingAfter:!1,hasMoreBefore:d[8],hasMoreAfter:!1})}))})}]):c.resolve()},function(e){return a[1]&&c.i64.eq(a[6],c.i64.cast([0,0]))?c.storedProcedure(b("LSClearLoadingFlagsForThreadRange"),a[0],!1,c.i64.cast([0,95])):(a[1]&&c.i64.neq(a[6],void 0)&&c.i64.neq(a[3],void 0)||a[2]&&c.i64.neq(a[5],void 0)&&c.i64.neq(a[4],void 0))&&!(a[1]&&c.i64.neq(a[6],void 0)&&c.i64.neq(a[3],void 0)&&a[2]&&c.i64.neq(a[5],void 0)&&c.i64.neq(a[4],void 0))?c.sequence([function(e){return d[16]=a[3]==null?c.i64.cast([-2147483648,0]):a[3],d[15]=a[6]==null?c.i64.cast([0,1]):a[6],d[17]=c.i64.gt(d[15],c.i64.cast([0,1]))&&c.i64.gt(d[16],c.i64.cast([-2147483648,0])),d[4]=c.i64.eq(c.i64.cast([0,95]),c.i64.cast([0,1]))||c.i64.eq(c.i64.cast([0,95]),c.i64.cast([0,95])),d[4]&&c.i64.eq(a[0],c.i64.cast([0,0]))?c.sequence([function(a){return c.storedProcedure(b("LSUpsertInboxThreadsRange"),c.i64.cast([0,95]),d[15],d[17],!0,d[16])},function(a){return d[18]=d[15],d[19]=d[16],d[20]=!0,d[21]=d[17],c.forEach(c.db.table(198).fetch(),function(a){a=a.item;return d[22]=a.minLastActivityTimestampMs,d[24]=a.minThreadKey,d[23]=c.i64.lt(d[18]==null?d[22]:d[18],d[22]),d[18]=d[23]?d[22]:d[18],d[19]=d[23]?d[24]:d[19],d[20]=d[20]||a.isLoadingBefore,d[21]=d[21]||c.i64.gt(d[22],c.i64.cast([0,1]))&&c.i64.gt(d[24],c.i64.cast([-2147483648,0]))})},function(a){return a=[d[18],d[19],d[20],d[21]],d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3],a}]):c.resolve((e=[d[15],d[16],!0,d[17]],d[0]=e[0],d[1]=e[1],d[2]=e[2],d[3]=e[3],e))},function(e){return d[4]?c.sequence([function(e){return c.storedProcedure(b("LSUpsertSyncGroupThreadsRange"),c.i64.cast([0,95]),a[0],d[15],d[17],!0,d[16])},function(b){return d[18]=d[15],d[19]=d[16],d[20]=!0,d[21]=d[17],c.forEach(c.filter(c.db.table(220).fetch(),function(b){return c.i64.eq(b.parentThreadKey,a[0])}),function(a){a=a.item;return d[22]=a.minLastActivityTimestampMs,d[24]=a.minThreadKey,d[23]=c.i64.lt(d[18]==null?d[22]:d[18],d[22]),d[18]=d[23]?d[22]:d[18],d[19]=d[23]?d[24]:d[19],d[20]=d[20]||a.isLoadingBefore,d[21]=d[21]||c.i64.gt(d[22],c.i64.cast([0,1]))&&c.i64.gt(d[24],c.i64.cast([-2147483648,0]))})},function(a){return a=[d[18],d[19],d[20],d[21]],d[5]=a[0],d[6]=a[1],d[7]=a[2],d[8]=a[3],a}]):c.resolve((e=[d[0],d[1],d[2],d[3]],d[5]=e[0],d[6]=e[1],d[7]=e[2],d[8]=e[3],e))},function(a){return c.storedProcedure(b("LSGetCursor"),c.i64.cast([0,95])).then(function(a){return a=a,d[9]=a[0],a})},function(e){return d[10]=new c.Map(),d[10].set("is_after",a[2]),d[10].set("parent_thread_key",a[0]),d[10].set("reference_thread_key",a[2]?a[4]:a[3]),d[10].set("reference_activity_timestamp",a[2]?a[5]:a[6]),d[10].set("additional_pages_to_fetch",a[7]),d[10].set("cursor",d[9]),d[10].set("messaging_tag",void 0),d[10].set("sync_group",c.i64.cast([0,95])),c.i64.gt(c.i64.cast([0,0]),c.i64.cast([0,0]))?(d[18]=c.i64.of_float(Date.now()),d[11]=c.i64.add(d[18],c.i64.cast([0,0]))):d[11]=c.i64.cast([0,0]),d[12]=c.toJSON(d[10]),c.storedProcedure(b("LSIssueNewTaskAndGetTaskID"),"trq",c.i64.cast([0,145]),d[12],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,d[11],c.i64.cast([0,0])).then(function(a){return a=a,d[13]=a[0],a})},function(b){return c.db.table(10).fetch([[[a[0]]]]).next().then(function(b,e){e=b.done;b=b.value;return e?c.db.table(10).add({parentThreadKey:a[0],minThreadKey:d[6]==null?c.i64.cast([-2147483648,0]):d[6],minLastActivityTimestampMs:d[5]==null?c.i64.cast([0,1]):d[5],maxLastActivityTimestampMs:c.i64.cast([0,1]),maxThreadKey:c.i64.cast([-2147483648,0]),isLoadingBefore:d[7],isLoadingAfter:!1,hasMoreBefore:d[8],hasMoreAfter:!1}):(b.item,c.forEach(c.db.table(10).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({isLoadingBefore:d[7],isLoadingAfter:!1,hasMoreBefore:d[8],hasMoreAfter:!1})}))})}]):c.resolve()}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("MWChatFacepile.react",["CometImage.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={dropShadow:{boxShadow:"x1qeybcx",":hover_boxShadow":"x19xcq9t",$$css:!0},image:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",position:"x10l6tqk",$$css:!0},imageBorder:{borderTopColor:"xsdn2ir",borderEndColor:"x16rfsbj",borderBottomColor:"x13awxeq",borderStartColor:"x16sykr7",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",$$css:!0},leftImage:{bottom:"x1ey2m1c",start:"x17qophe",left:null,right:null,$$css:!0},rightImage:{end:"xds687c",left:null,right:null,top:"x13vifvy",$$css:!0},root:{display:"x78zum5",position:"x1n2onr6",$$css:!0}};function a(a){var b=a.borderBetweenImages;b=b===void 0?!0:b;var d=a.children,e=a.firstParticipantURI,f=a.secondParticipantURI,g=a.shadow;g=g===void 0?!1:g;var i=a.size;i=i===void 0?30:i;a=a.xstyle;var l=i/1.5;return j.jsxs("div",{className:(h||(h=c("stylex")))(k.root,a),style:{height:String(i)+"px",width:String(i)+"px"},children:[j.jsx(c("CometImage.react"),{height:l,src:f,width:l,xstyle:[g&&k.dropShadow,k.image,k.rightImage]}),j.jsx(c("CometImage.react"),{height:l,src:e,width:l,xstyle:[g&&k.dropShadow,k.image,b&&k.imageBorder,k.leftImage]}),d]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatProfile.react",["CometImage.react","MDSGlimmer.react","isStringNullOrEmpty","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={active:{display:"x1lliihq",$$css:!0},activeNow:{backgroundColor:"xv9rvxn",borderTopColor:"xsdn2ir",borderEndColor:"x16rfsbj",borderBottomColor:"x13awxeq",borderStartColor:"x16sykr7",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",bottom:"x1ey2m1c",display:"x1s85apg",end:"xds687c",height:"xdk7pt",position:"x10l6tqk",width:"x1xc55vz",$$css:!0},img:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x5yr21d",objectFit:"xl1xv1r",verticalAlign:"x3ajldb",width:"xh8yej3",$$css:!0},root:{position:"x1n2onr6",$$css:!0}};function a(a){var b=a.alt;b=b===void 0?"":b;var d=a.children,e=a.isActiveNow;e=e===void 0?!1:e;var f=a.size,g=a.src;a=a.xstyle;return j.jsxs("div",{className:(h||(h=c("stylex")))(k.root,a),style:{height:String(f)+"px",width:String(f)+"px"},children:[c("isStringNullOrEmpty")(g)?j.jsx(c("MDSGlimmer.react"),{index:1,xstyle:k.img}):j.jsx(c("CometImage.react"),{alt:b,src:g,xstyle:k.img}),d,j.jsx("div",{className:h(k.activeNow,e&&k.active)})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchStandardResultType",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({CONTACT:1,NON_CONTACT:2,GROUP:3,XAC_CONTACT:4,XAC_NON_CONTACT:5,XAC_GROUP:6,OTHER:7,SOFT_CONTACT:8,PAGE:9,GAME:10,SMS:11,SMS_GROUP:12,WHATSAPP:13,INTEGRATED_MESSAGE_SEARCH_THREAD:14,IG_BUSINESS:15,COMMUNITY_CHAT:16,REEL:17,PUBLIC_CHAT:18,UNJOINED_COMMUNITIES:19,UNJOINED_SOCIAL_CHANNEL:20,JOINED_SOCIAL_CHANNEL:21,UNJOINED_BROADCAST_CHANNEL:22,JOINED_BROADCAST_CHANNEL:23,UNJOINED_SUBSCRIBER_SOCIAL_CHANNEL:24,JOINED_SUBSCRIBER_SOCIAL_CHANNEL:25,UNJOINED_SUBSCRIBER_BROADCAST_CHANNEL:26,JOINED_SUBSCRIBER_BROADCAST_CHANNEL:27,MOST_ENGAGED_FOLLOWERS:28,MOST_RECENT_FOLLOWERS:29,DIRECT_INVITE_MIX_TYPES:30,BROADCAST_FLOW_CHAT:31,UNJOINED_COMMUNITY_CHAT:32,AI_AGENT:33,COMMUNITIES:34,MEDIA:35,LINKS:36,FILES:37});c=a;f["default"]=c}),66);
__d("MWSearchStandardResultTypeMappings",["I64","LSContactType","LSContactTypeExact","LSContactViewerRelationship","LSIntEnum","LSMessagingThreadTypeUtil","LSSearchType"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a){var b=a.contactType,e=a.contactViewerRelationship;a=a.contactTypeExact;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactTypeExact").GENERATIVE_AI_BOT)))return 33;if((h||(h=d("I64"))).equal(b,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactType").USER))){if((h||(h=d("I64"))).equal(e,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactViewerRelationship").NOT_CONTACT)))return 2;return(h||(h=d("I64"))).equal(e,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactViewerRelationship").SOFT_CONTACT))||(h||(h=d("I64"))).equal(e,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactViewerRelationship").CONTACT_OF_VIEWER))||(h||(h=d("I64"))).equal(e,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactViewerRelationship").FACEBOOK_FRIEND))?1:7}return(h||(h=d("I64"))).equal(b,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactType").PAGE))?9:7}function j(a){if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").CONTACT)))return 1;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").NONCONTACT)))return 2;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").GROUP)))return 3;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").PAGE)))return 9;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").COMMUNITY_MESSAGING_THREAD)))return 16;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").INTEGRATED_MESSAGE_SEARCH_THREAD)))return 14;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").PUBLIC_CHANNEL)))return 18;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").COMMUNITY)))return 34;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").IG_CONTACT_FOLLOWING))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").IG_CONTACT_NONFOLLOWING)))return 4;return(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").IG_NONCONTACT_FOLLOWING))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSSearchType").IG_NONCONTACT_NONFOLLOWING))?5:7}function k(a){if(d("LSMessagingThreadTypeUtil").isOneToOne(a))return 1;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(153)))return 22;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(152)))return 23;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(150))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(154)))return 21;if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(151))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(155)))return 20;return d("LSMessagingThreadTypeUtil").isGroup(a)?3:7}function b(a,b){a=k(a);if(a===7)return j(b);else return a}g.mapContactToSearchStandardResultType=a;g.mapLSSearchTypeToSearchStandardResultType=j;g.mapThreadTypeToSearchStandardResultType=k;g.mapServerSearchResultToSearchStandardResultType=b}),98);
__d("getMWLSThreadEventTimeSnippetForDisplay",["fbt","I64"],(function(a,b,c,d,e,f,g,h){"use strict";var i;function j(a){switch(a){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return""}}function k(a){a=a.split(":");var b=a.slice(0,2).join(":");a=a[2].slice(2,5);return b+a}function a(a,b){var c=Date.now();a=a!=null?(i||(i=d("I64"))).to_float(a):0;b=b!=null?(i||(i=d("I64"))).to_float(b):a*2;var e=new Date(a),f=a-6048e5,g=a-864e5,l=c<=f;g=c<=a&&c>=g;f=c<=a&&c>=f&&!g;a=c>=a&&c<=b;c=e.toDateString();b=k(e.toLocaleTimeString());c=c.split(" ");e=e.getDay();var m=new Date();m=m.getDate();if(l)return h._("__JHASH__cS8t2sI0Htu__JHASH__",[h._param("month",c[2]),h._param("day",c[1]),h._param("time",b)]).toString();if(f)return h._("__JHASH__ny3UpSYZ8bI__JHASH__",[h._param("day of week",j(e)),h._param("time",b)]).toString();if(g)return m!==e?h._("__JHASH__USFKplv1Ozv__JHASH__",[h._param("time",b)]).toString():h._("__JHASH__3T2JoQLM2nn__JHASH__",[h._param("time",b)]).toString();return a?h._("__JHASH__2gXijGJL5uw__JHASH__").toString():h._("__JHASH__J5Yn1Tsi1-V__JHASH__").toString()}g["default"]=a}),226);
__d("MWThreadSnippetForDisplay.react",["CometTextWithEntities.react","I64","Int64Hooks","LSMessagingThreadTypeUtil","MWCMThreadTypes.react","MWChatTextTransform","ReStoreVaulting","ThreadStatus","cr:4217","getMWLSThreadEventTimeSnippetForDisplay","react","useStringWithSubstitutions"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||d("react"),k=j.memo(function(a){a=a.thread;var e=d("MWCMThreadTypes.react").isUnjoinedCMThread(a.threadType),f=b("cr:4217")==null?void 0:b("cr:4217")(a),g=a.snippet,h=d("LSMessagingThreadTypeUtil").isArmadilloSecure(a.threadType);f=g==null?null:(f=f)!=null?f:((f=d("ReStoreVaulting").maybeUnvault(g))!=null?f:g).replace(/\uDB80\uDC00/,"(Y)");h=(g=d("useStringWithSubstitutions").useStringWithSubstitutions(h?f:null,a.threadKey))!=null?g:f;if(h==null)return null;g=a.threadStatus!=null&&(i||(i=d("I64"))).equal(a.threadStatus,(i||(i=d("I64"))).of_int32(c("ThreadStatus").PAUSED));return e&&!g&&a.eventStartTimestampMs!=null?c("getMWLSThreadEventTimeSnippetForDisplay")(a.eventStartTimestampMs,a.eventEndTimestampMs):j.jsx(c("CometTextWithEntities.react"),{text:h,transforms:d("MWChatTextTransform").textTransforms})});function a(a){a=a.thread;return j.jsx(k,{thread:d("Int64Hooks").usePickInt64(a,["threadKey","threadType","snippet","threadStatus","eventStartTimestampMs","eventEndTimestampMs"])})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometGamingVideoControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/video/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XFacebookHelpCenterContentControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/help/{cms_id}/{?cms_title}/",Object.freeze({region_hint:[],expand_folders:[]}),void 0);b=a;g["default"]=b}),98);
__d("useCometMessengerhasDefaultThreadOneToOneCapability",["FBLogger","hasDefaultThreadOneToOneCapabilityDeferred","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useState;function a(a,b){var d=j(!1),e=d[0],f=d[1];i(function(){c("hasDefaultThreadOneToOneCapabilityDeferred").load().then(function(c){b==null?f(!1):c(b,a).then(function(a){f(a)})["catch"](function(){})})["catch"](function(a){c("FBLogger")("messenger_web_product").warn("Error loading hasDefaultThreadOneToOneCapability. %s",a)})},[a,e,b]);return e}g["default"]=a}),98);
__d("useMWShouldShowThreadListTypingIndicator",["MWPTypingIndicators.react"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=d("MWPTypingIndicators.react").useTypingParticipants(a);return d("MWPTypingIndicators.react").useShouldShowTypingIndicator(a)}g["default"]=a}),98);
__d("useMWV2PreloadThreadV2",["Int64Hooks","JSResourceForInteraction","JSScheduler","LSFactory","LSIntEnum","LSIssueMessagesRangeQueryStoredProcedure","LSMailboxMessagesRangeQueryDirection","MWLSThreadDisplayContext","MWPFeatureLimitedData","MWPreloadableQueries","Promise","ReQL","cr:358","gkx","justknobx","promiseDone","useAsyncReStore","useCometPreloader"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k;e=function(a,c){return function(){return(k||(k=b("Promise"))).resolve()}};var l=c("JSResourceForInteraction")("MAWPreloadSecureMessages").__setRef("useMWV2PreloadThreadV2"),m=(h=b("cr:358"))!=null?h:e,n=c("JSResourceForInteraction")("MWV2ChatTab.react").__setRef("useMWV2PreloadThreadV2");function a(a,e){var f=c("useAsyncReStore")(),g=d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(),h=m(f,a),j=g!=="Inbox"&&c("justknobx")._("761"),q=a.threadKey;g=d("Int64Hooks").useCallbackInt64(function(){j&&n.preload(),e&&c("gkx")("1902")&&c("promiseDone")((k||(k=b("Promise"))).all([f,l.load()]).then(function(b){var c=b[0];b=b[1].preloadSecureMessages;return b(c,q,a.threadType,a.clientThreadKey)}))},[f,e,j,a.clientThreadKey,a.threadType,q]);var r=d("Int64Hooks").useMemoInt64(function(){var a=!1;return function(){if(a===!0)return;a=!0;j&&(i||(i=d("JSScheduler"))).scheduleSpeculativeCallback(function(){n.preload()});e?c("promiseDone")(h()):c("promiseDone")(f.then(function(a){return o(a,q)}));c("gkx")("23432")&&c("promiseDone")(f.then(function(a){return p(a,q)}))}},[j,e,h,f,q]);return c("useCometPreloader")("button",r,g)}function o(a,b){return a.runInTransaction(function(a){return d("ReQL").firstAsync(d("ReQL").fromTableDescending(a.messages_ranges_v2__generated).getKeyRange(b)).then(function(e){if(e!=null&&e.minMessageId===e.maxMessageId)return c("LSIssueMessagesRangeQueryStoredProcedure")(c("LSFactory")(a),{direction:(j||(j=d("LSIntEnum"))).ofNumber(c("LSMailboxMessagesRangeQueryDirection").BEFORE),referenceTimestampMs:e.minTimestampMs,threadKey:b})})},"readwrite",void 0,void 0,f.id+":150")}function p(a,b){var e,f,g;(g=c("promiseDone"))((e=d("ReQL")).firstAsync((f=d("MWPreloadableQueries")).threadNullStateQuery(a,b)));g(e.firstAsync(d("MWPFeatureLimitedData").readonlyFeatureLimitQuery(a)));g(e.firstAsync(f.getCutoverThreadByThreadKey(a,b)));g(e.firstAsync(f.getProactiveWarningsForThreadQuery(a,b)));g(e.firstAsync(f.getThreadBannerQuery(a,b)));g(e.toArrayAsync(f.threadNullStateCtaQuery(a,b)));g(e.toArrayAsync(f.getMostRecentMessagesInThread(a,b)).then(function(c){return d("MWPreloadableQueries").getReactionsForMessages(a,b,c)}));g(e.toArrayAsync(f.getMediaStagingQuery(a,b)));g(f.getCommunityFolderForThreadParentQuery(a,b))}g["default"]=a}),98);
__d("usePrefetchCutoverDependencies",["Int64Hooks","MWEnsureCutoverOpenThreadExists","MWV2EnsureThatChatTabExists","Promise"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,c){var e=c.clientThreadKey,f=c.threadKey,g=c.threadType;return d("Int64Hooks").useCallbackInt64(function(){return a.then(function(a){return(h||(h=b("Promise"))).all([d("MWEnsureCutoverOpenThreadExists").ensureCutoverOpenThreadExists(a,f),d("MWV2EnsureThatChatTabExists").ensureThatChatTabExists(a,f,g,e)]).then(function(){})})},[a,f,g,e])}g["default"]=a}),98);