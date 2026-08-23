export const instruments = [
  {ticker:'T10Y',name:'US Treasury 10Y',bid:98.72,ask:98.76,ytm:4.18,currentYield:4.05,face:'$1,000',days:1240,duration:7.6,coupon:4.00,maturity:'15 Aug 2030',type:'Sovereign',rating:'AAA',move:'up'},
  {ticker:'AAPL30',name:'Apple Inc. 2030',bid:99.15,ask:99.32,ytm:4.32,currentYield:4.10,face:'$1,000',days:1350,duration:4.1,coupon:4.10,maturity:'18 Sep 2030',type:'Corporate',rating:'AA+',move:'up'},
  {ticker:'MSFT32',name:'Microsoft Corp. 2032',bid:98.40,ask:98.65,ytm:4.45,currentYield:4.22,face:'$1,000',days:2050,duration:5.8,coupon:4.20,maturity:'15 Mar 2032',type:'Corporate',rating:'AAA',move:'down'},
  {ticker:'JPM31',name:'JPMorgan Chase 2031',bid:97.85,ask:98.10,ytm:4.72,currentYield:4.50,face:'$1,000',days:1700,duration:5.0,coupon:4.40,maturity:'20 May 2031',type:'Financial',rating:'A+',move:'down'},
  {ticker:'KO33',name:'Coca-Cola 2033',bid:96.90,ask:97.20,ytm:4.60,currentYield:4.35,face:'$1,000',days:2400,duration:6.4,coupon:4.25,maturity:'10 Jun 2033',type:'Corporate',rating:'A+',move:'up'}
];

export const initialOrders = [
  {id:'ORD-260818-1042',time:'10:42:16',ticker:'AAPL30',side:'Buy',qty:500,price:99.15,type:'Limit',status:'Pending',filled:0,trigger:''},
  {id:'ORD-260818-1037',time:'10:37:04',ticker:'MSFT32',side:'Sell',qty:300,price:98.55,type:'Market',status:'Partially Filled',filled:120,trigger:''},
  {id:'ORD-260818-1021',time:'10:21:33',ticker:'JPM31',side:'Buy',qty:200,price:97.95,type:'Limit',status:'Filled',filled:200,trigger:''},
  {id:'ORD-260818-0955',time:'09:55:41',ticker:'KO33',side:'Sell',qty:150,price:96.80,type:'Stop Loss',status:'Cancelled',filled:0,trigger:'96.60'}
];

export const positions = [
  {ticker:'T10Y',buy:1000,sell:0,avg:98.40,current:98.76,mtm:360,pnl:0.37,duration:7.6},
  {ticker:'AAPL30',buy:500,sell:100,avg:98.90,current:99.32,mtm:1680,pnl:0.42,duration:4.1},
  {ticker:'MSFT32',buy:300,sell:0,avg:98.92,current:98.65,mtm:-810,pnl:-0.27,duration:5.8},
  {ticker:'JPM31',buy:200,sell:50,avg:97.60,current:98.10,mtm:750,pnl:0.51,duration:5.0},
  {ticker:'KO33',buy:400,sell:0,avg:97.55,current:97.20,mtm:-1400,pnl:-0.36,duration:6.4}
];
