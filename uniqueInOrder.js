function uniqueInOrder(iterable){
    let arr=[];
    for(let i=0;i<iterable.length;i++)
    {
        if(iterable[i]!=iterable[i+1]||i==iterable.length-1)
        {
            arr.push(iterable[i]);
        }
    }
    return arr;
  
}
