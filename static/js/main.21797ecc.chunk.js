(this["webpackJsonpcovid-19-frontend"]=this["webpackJsonpcovid-19-frontend"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),s=(a(12),a(13),a(14),a(2)),c=a.n(s),i=a(5),u=a(1),m=(a(16),a(6)),d=(a(17),function(e){var t=e.customClassName,a=e.handleBlur,n=e.handleChange,l=e.value,o=e.name,s=e.type,c=e.placeHolder,i=Object(m.a)(e,["customClassName","handleBlur","handleChange","value","name","type","placeHolder"]);return r.a.createElement("input",Object.assign({},i,{onChange:n,type:s,onBlur:a,placeholder:c,className:t,name:o,value:l}))}),p=function(e){var t,a=e.region,n=e.reportedCases,r=e.periodType,l=e.timeToElapse,o=e.totalHospitalBeds,s=a.avgDailyIncomeInUSD,c=a.avgDailyIncomePopulation,i={},u={};"days"===r&&(t=l),"weeks"===r&&(t=7*l),"months"===r&&(t=30*l);var m=Math.trunc(t/3),d=Math.trunc(Math.pow(2,m)),p=.35*o;i.currentlyInfected=10*n,i.infectionsByRequestedTime=i.currentlyInfected*d,u.currentlyInfected=50*n,u.infectionsByRequestedTime=u.currentlyInfected*d;var E=i.currentlyInfected*d,h=u.currentlyInfected*d;return i.severeCasesByRequestedTime=Math.trunc(.15*E),i.hospitalBedsByRequestedTime=Math.trunc(p-.15*E),u.severeCasesByRequestedTime=Math.trunc(.15*h),u.hospitalBedsByRequestedTime=Math.trunc(p-.15*h),i.casesForICUByRequestedTime=Math.trunc(.05*i.infectionsByRequestedTime),i.casesForVentilatorsByRequestedTime=Math.trunc(.02*i.infectionsByRequestedTime),i.dollarsInFlight=Math.trunc(i.infectionsByRequestedTime*s*c/t),u.casesForICUByRequestedTime=Math.trunc(.05*u.infectionsByRequestedTime),u.casesForVentilatorsByRequestedTime=Math.trunc(.02*u.infectionsByRequestedTime),u.dollarsInFlight=Math.trunc(u.infectionsByRequestedTime*s*c/t),{data:e,impact:i,severeImpact:u}},E=function(e){var t=r.a.createElement("p",null,"Hold on while your result are being calculated.");if(e.result){var a=e.result,l=a.impact,o=a.severeImpact;t=r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("h5",null,"Estimation for non critical case"),r.a.createElement("div",null,r.a.createElement("p",null,Number(l.currentlyInfected).toLocaleString()),r.a.createElement("p",null,Number(l.infectionsByRequestedTime).toLocaleString()),r.a.createElement("p",null,Number(l.severeCasesByRequestedTime).toLocaleString()),r.a.createElement("p",null,Number(l.hospitalBedsByRequestedTime).toLocaleString()),r.a.createElement("p",null,Number(l.casesForICUByRequestedTime).toLocaleString()),r.a.createElement("p",null,Number(l.casesForVentilatorsByRequestedTime).toLocaleString()),r.a.createElement("p",null,"$",Number(l.dollarsInFlight).toLocaleString()))),r.a.createElement("div",null,r.a.createElement("h5",null,"Estimation for critical cases"),r.a.createElement("div",null,r.a.createElement("p",null,Number(o.currentlyInfected).toLocaleString()),r.a.createElement("p",null,Number(o.infectionsByRequestedTime).toLocaleString()),r.a.createElement("p",null,Number(o.severeCasesByRequestedTime).toLocaleString()),r.a.createElement("p",null,Number(o.hospitalBedsByRequestedTime).toLocaleString()),r.a.createElement("p",null,Number(o.casesForICUByRequestedTime).toLocaleString()),r.a.createElement("p",null,Number(o.casesForVentilatorsByRequestedTime).toLocaleString()),r.a.createElement("p",null,"$",Number(o.dollarsInFlight).toLocaleString()))))}return r.a.createElement("section",null,t)},h=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(),m=Object(u.a)(s,2),h=m[0],f=m[1],v=Object(n.useState)(),y=Object(u.a)(v,2),b=y[0],g=y[1],B=Object(n.useState)(),T=Object(u.a)(B,2),N=T[0],q=T[1],C=Object(n.useState)("days"),I=Object(u.a)(C,2),R=I[0],S=I[1],F=Object(n.useState)(),j=Object(u.a)(F,2),w=j[0],H=j[1],M=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={region:{name:"Africa",avgAge:19.7,avgDailyIncomeInUSD:4,avgDailyIncomePopulation:.73},periodType:R,timeToElapse:parseInt(h),reportedCases:parseInt(b),population:parseInt(l),totalHospitalBeds:parseInt(N)},n=p(a),e.next=5,H(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"banner row"},r.a.createElement("div",{className:"col-md-4 perfect-center"},r.a.createElement("div",{className:"auth-container"},r.a.createElement("div",null,r.a.createElement("h4",{className:"font-bold"},"covid-19 Estimator"),r.a.createElement("div",null,r.a.createElement("p",{className:"text-green small-info-text"},"All Input are compulsory"))),r.a.createElement("form",{onSubmit:M,className:"auth-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"population"},"Population"),r.a.createElement(d,{name:"population",type:"number",customClassName:"form-control auth-input",id:"population",placeHolder:"Population","aria-describedby":"population","data-population":!0,required:!0,value:l,handleChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"timeToElapse"},"Time to Elapse"),r.a.createElement(d,{name:"timeToElapse",type:"number",customClassName:"form-control auth-input",id:"timeToElapse",placeHolder:"Time to Elapse","aria-describedby":"timeToElapse","data-time-to-elapse":!0,required:!0,value:h,handleChange:function(e){return f(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"reportedCases"},"Reported Cases"),r.a.createElement(d,{name:"reportedCases",type:"number",customClassName:"form-control auth-input",id:"reportedCases",placeHolder:"Reported Cases","aria-describedby":"reportedCases","data-reported-cases":!0,required:!0,value:b,handleChange:function(e){return g(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"totalHospitalBeds"},"Total Hospital Beds"),r.a.createElement(d,{name:"totalHospitalBeds",type:"number",customClassName:"form-control auth-input",id:"totalHospitalBeds",placeHolder:"Total Hospital Beds","aria-describedby":"totalHospitalBeds","data-total-hospital-beds":!0,required:!0,value:N,handleChange:function(e){return q(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"periodType"},"Period Type"),r.a.createElement("div",{className:"select-container"},r.a.createElement("select",{"data-period-type":!0,id:"periodType",className:"form-control filter-select",required:!0,onChange:function(e){return S(e.target.value)}},r.a.createElement("option",{"data-period-type":!0,value:"days"},"Days"),r.a.createElement("option",{"data-period-type":!0,value:"weeks"},"Weeks"),r.a.createElement("option",{"data-period-type":!0,value:"months"},"Months")))),r.a.createElement("div",{className:"auth-button-container"},r.a.createElement("button",{className:"btn data-go-estimate auth-button bold-600"},"Estimate"))))),r.a.createElement("div",{className:"col-md-6 perfect-center"},r.a.createElement("div",{className:"auth-container"},r.a.createElement("div",null,r.a.createElement("h4",{className:"font-bold"},"covid-19 Estimator Results"),r.a.createElement("div",null,r.a.createElement("p",{className:"text-green small-info-text"},"These are the best estimated results"))),r.a.createElement(E,{result:w}))))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.21797ecc.chunk.js.map