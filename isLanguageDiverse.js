function isLanguageDiverse(list) {
    let R=0;
  let P=0;
  let js=0;
  let max;
  list.forEach(item=>{
    if(item.language==="Ruby")
      {
        R++;
  
      }else if(item.language==="Python")
    {
      P++;
    }else if(item.language==="JavaScript")
    {
      js++;
    }
  })
  max=Math.max(R,P,js);
  if((max>R+R)||(max>P+P)||(max>js+js))
    {
      return false;
    }else{
      return true;
    }
}