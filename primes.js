function primes(start, end){
	let notprime=[];
    let prim=[];
    for(let i=start+1;i<=end;i++)
    {
        for (let x=2;x<i;x++)
        {
            if(i%x==0){
                notprime.push(i);
            }
        }
        if(!notprime.includes(i))
        {
            prim.push(i);
        }
    }
    if(prim.length==0){
        return null;
    }else{
        return prim;
    }
    
  }