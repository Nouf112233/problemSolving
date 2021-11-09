const whosOnline = (friends) => {
      let line=[];
      let off=[];
      let way=[];
  
     
      friends.map(ele=>{
      if(ele.status==="online"&&ele.lastActivity<=10)
      {
          line.push(ele.username);
      }
      else if(ele.status==="offline")
      {
          off.push(ele.username);
      }
      else{
          way.push(ele.username);
      }
  });
     const obj={
       online:line,
       offline:off,
       away:way
      };

      return obj;
  
  }