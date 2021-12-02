function findSenior(list) {
    let max=0;
    list.forEach(item=>{
      if(item.age>max)
        {
          max=item.age;
        }
    })
    const old=list.filter(item=>{
      return item.age===max;
      }
    )
    return old;
  }