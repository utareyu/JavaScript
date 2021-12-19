function radixConv(fRdx, fNum, tRdx){
	return intToN(mToInt(fRdx, fNum),tRdx);
}

const code = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function mToInt(rdx, num){
	let idx;
	let val=0;

	for(idx=0;idx<=num.toString().length;idx++){
		val = val*rdx+toInt(num.toString().slice(idx,idx+1));
	}
	return val;
}

function intToN(val,idx){
	let quo=val;
	let rem;
	let tmp;
	while(quo>=rdx){
		rem=quo%rdx;
		tmp=toStr(rem)+tmp;
		quo=quo/idx;
	}
	tmp = toStr(quo)+tmp;
	return tmp;
}

function toInt(p){
	let idx=0;
	while(p>code[idx]){
		idx++;
	}
	return idx;
}

function toStr(q){
	return code[q];
}