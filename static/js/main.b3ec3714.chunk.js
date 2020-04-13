(this["webpackJsonpcovid-19-frontend"]=this["webpackJsonpcovid-19-frontend"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),o=a.n(r),s=(a(12),a(13),a(14),a(2)),c=a.n(s),i=a(5),u=a(1),m=(a(16),a(6)),d=(a(17),function(e){var t=e.customClassName,a=e.handleBlur,n=e.handleChange,r=e.value,o=e.name,s=e.type,c=e.placeHolder,i=Object(m.a)(e,["customClassName","handleBlur","handleChange","value","name","type","placeHolder"]);return l.a.createElement("input",Object.assign({},i,{onChange:n,type:s,onBlur:a,placeholder:c,className:t,name:o,value:r}))}),p=(a(18),function(e){var t,a=e.region,n=e.reportedCases,l=e.periodType,r=e.timeToElapse,o=e.totalHospitalBeds,s=a.avgDailyIncomeInUSD,c=a.avgDailyIncomePopulation,i={},u={};"days"===l&&(t=r),"weeks"===l&&(t=7*r),"months"===l&&(t=30*r);var m=Math.trunc(t/3),d=Math.trunc(Math.pow(2,m)),p=.35*o;i.currentlyInfected=10*n,i.infectionsByRequestedTime=i.currentlyInfected*d,u.currentlyInfected=50*n,u.infectionsByRequestedTime=u.currentlyInfected*d;var E=i.currentlyInfected*d,h=u.currentlyInfected*d;return i.severeCasesByRequestedTime=Math.trunc(.15*E),i.hospitalBedsByRequestedTime=Math.trunc(p-.15*E),u.severeCasesByRequestedTime=Math.trunc(.15*h),u.hospitalBedsByRequestedTime=Math.trunc(p-.15*h),i.casesForICUByRequestedTime=Math.trunc(.05*i.infectionsByRequestedTime),i.casesForVentilatorsByRequestedTime=Math.trunc(.02*i.infectionsByRequestedTime),i.dollarsInFlight=Math.trunc(i.infectionsByRequestedTime*s*c/t),u.casesForICUByRequestedTime=Math.trunc(.05*u.infectionsByRequestedTime),u.casesForVentilatorsByRequestedTime=Math.trunc(.02*u.infectionsByRequestedTime),u.dollarsInFlight=Math.trunc(u.infectionsByRequestedTime*s*c/t),{data:e,impact:i,severeImpact:u}}),E=function(e){console.log(66,e);var t=l.a.createElement("p",null,"Hold on while your result are being calculated.");if(e.result){var a=e.result,r=(a.data,a.impact),o=a.severeImpact;t=l.a.createElement(n.Fragment,null,l.a.createElement("div",null,l.a.createElement("h5",null,"Estimation for non critical case"),l.a.createElement("div",null,l.a.createElement("p",null,Number(r.currentlyInfected).toLocaleString()),l.a.createElement("p",null,Number(r.infectionsByRequestedTime).toLocaleString()),l.a.createElement("p",null,Number(r.severeCasesByRequestedTime).toLocaleString()),l.a.createElement("p",null,Number(r.hospitalBedsByRequestedTime).toLocaleString()),l.a.createElement("p",null,Number(r.casesForICUByRequestedTime).toLocaleString()),l.a.createElement("p",null,Number(r.casesForVentilatorsByRequestedTime).toLocaleString()),l.a.createElement("p",null,"$",Number(r.dollarsInFlight).toLocaleString()))),l.a.createElement("div",null,l.a.createElement("h5",null,"Estimation for critical cases"),l.a.createElement("div",null,l.a.createElement("p",null,Number(o.currentlyInfected).toLocaleString()),l.a.createElement("p",null,Number(o.infectionsByRequestedTime).toLocaleString()),l.a.createElement("p",null,Number(o.severeCasesByRequestedTime).toLocaleString()),l.a.createElement("p",null,Number(o.hospitalBedsByRequestedTime).toLocaleString()),l.a.createElement("p",null,Number(o.casesForICUByRequestedTime).toLocaleString()),l.a.createElement("p",null,Number(o.casesForVentilatorsByRequestedTime).toLocaleString()),l.a.createElement("p",null,"$",Number(o.dollarsInFlight).toLocaleString()))))}return l.a.createElement("section",null,t)},h=function(e){var t=Object(n.useState)(554445),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(55),m=Object(u.a)(s,2),h=m[0],f=m[1],v=Object(n.useState)(555),y=Object(u.a)(v,2),b=y[0],g=y[1],B=Object(n.useState)(555),T=Object(u.a)(B,2),N=T[0],q=T[1],C=Object(n.useState)("days"),I=Object(u.a)(C,2),R=I[0],S=I[1],F=Object(n.useState)(),j=Object(u.a)(F,2),w=j[0],H=j[1],M=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={region:{name:"Africa",avgAge:19.7,avgDailyIncomeInUSD:4,avgDailyIncomePopulation:.73},periodType:R,timeToElapse:parseInt(h),reportedCases:parseInt(b),population:parseInt(r),totalHospitalBeds:parseInt(N)},console.log(777,a),n=p(a),console.log(n),e.next=7,H(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("section",{className:"banner row"},l.a.createElement("div",{className:"col-md-4 perfect-center"},l.a.createElement("div",{className:"auth-container"},l.a.createElement("div",null,l.a.createElement("h4",{className:"font-bold"},"covid-19 Estimator"),l.a.createElement("div",null,l.a.createElement("p",{className:"text-muted small-info-text"},"All Input are compulsory"))),l.a.createElement("form",{onSubmit:M,className:"auth-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"population"},"Population"),l.a.createElement(d,{name:"population",type:"number",customClassName:"form-control auth-input",id:"population",placeHolder:"Population","aria-describedby":"population","data-population":!0,required:!0,value:r,handleChange:function(e){return o(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"timeToElapse"},"Time to Elapse"),l.a.createElement(d,{name:"timeToElapse",type:"number",customClassName:"form-control auth-input",id:"timeToElapse",placeHolder:"Time to Elapse","aria-describedby":"timeToElapse","data-time-to-elapse":!0,required:!0,value:h,handleChange:function(e){return f(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"reportedCases"},"Reported Cases"),l.a.createElement(d,{name:"reportedCases",type:"number",customClassName:"form-control auth-input",id:"reportedCases",placeHolder:"Reported Cases","aria-describedby":"reportedCases","data-reported-cases":!0,required:!0,value:b,handleChange:function(e){return g(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"totalHospitalBeds"},"Total Hospital Beds"),l.a.createElement(d,{name:"totalHospitalBeds",type:"number",customClassName:"form-control auth-input",id:"totalHospitalBeds",placeHolder:"Total Hospital Beds","aria-describedby":"totalHospitalBeds","data-total-hospital-beds":!0,required:!0,value:N,handleChange:function(e){return q(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"periodType"},"Period Type"),l.a.createElement("div",{className:"select-container"},l.a.createElement("select",{"data-period-type":!0,id:"periodType",className:"form-control filter-select",required:!0,onChange:function(e){return S(e.target.value)}},l.a.createElement("option",{"data-period-type":!0,value:"days"},"Days"),l.a.createElement("option",{"data-period-type":!0,value:"weeks"},"Weeks"),l.a.createElement("option",{"data-period-type":!0,value:"months"},"Months")))),l.a.createElement("div",{className:"auth-button-container"},l.a.createElement("button",{className:"btn auth-button bold-600"},"Estimate"))))),l.a.createElement("div",{className:"col-md-6 perfect-center"},l.a.createElement("div",{className:"auth-container"},l.a.createElement("div",null,l.a.createElement("h4",{className:"font-bold"},"covid-19 Estimator Results"),l.a.createElement("div",null,l.a.createElement("p",{className:"text-muted small-info-text"},"These are the best estimated results"))),l.a.createElement(E,{result:w}))))};var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b3ec3714.chunk.js.map