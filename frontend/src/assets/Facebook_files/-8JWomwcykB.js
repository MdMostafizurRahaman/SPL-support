;/*FB_PKG_DELIM*/

__d("CometLinkTrackingUtils.workplace",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){return a}f.decorateHrefWithTrackingInfo=a}),66);
__d("LSUpdateThreadActivityStatus",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(f){return c.sequence([function(e){return c.db.table(9).fetch([[[a[0]]]]).next().then(function(e,f){var g=e.done;e=e.value;return g?c.sequence([function(e){return d[2]=new c.Map(),d[2].set("thread_fbid",a[0]),d[2].set("force_upsert",!1),d[2].set("use_open_messenger_transport",!1),d[2].set("sync_group",c.i64.cast([0,104])),d[2].set("metadata_only",!1),d[2].set("preview_only",!1),d[3]=d[2].get("thread_fbid"),d[2],d[4]=c.toJSON(d[2]),c.storedProcedure(b("LSIssueNewTask"),c.i64.to_string(d[3]),c.i64.cast([0,209]),d[4],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]))},function(e){return d[5]=c.createArray(),d[8]=(d[5].push(a[0]),d[5]),d[6]=new c.Map(),d[6].set("number_of_threads",c.i64.cast([0,1])),d[6].set("event_type","issue_tpq_for_verify_threads_activity_status"),d[6].set("thread_ids",d[5]),d[7]=c.toJSON(d[6]),c.storedProcedure(b("LSIssueNewTask"),"log_community_resnapshot_event",c.i64.cast([0,576]),d[7],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]))},function(a){return d[0]=c.i64.cast([0,2])}]):(f=e.item,c.sequence([function(b){return c.i64.lt(f.lastActivityTimestampMs,a[1])?c.sequence([function(b){return c.forEach(c.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({lastActivityTimestampMs:a[1],snippet:a[2]})})},function(a){return d[2]=c.i64.cast([0,1])}]):c.resolve(d[2]=c.i64.cast([0,0]))},function(a){return d[0]=d[2]}]))})},function(a){return e[0]=d[0]}])},function(a){return c.resolve(e)}])}e.exports=a}),null);