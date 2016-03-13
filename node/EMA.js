

var N = parseInt(process.argv[2]),
    data = JSON.parse(process.argv[3]);
if(N <= 0 || isNaN(N)){
	console.error('N must bu a integer');
	return;
}
if(!data){
	console.error('data must be a array');
}
if(data.length < N){
	console.error('N must be short than data');
}

var alpha = 2 / ( N + 1 ),
    K = Math.round(3.45 * ( N + 1 ));
console.log(data,data.length);
var EMA = 0;
for(var i=0; i<K; i++){
	EMA += alpha * Math.pow((1 - alpha), i) * data[i];
}
console.log(EMA);
