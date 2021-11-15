function highestRank(arr){
    let x = 1;
    let y = 0;
    let item;
    for (var i=0; i<arr.length; i++)
    {
            for (var j=i; j<arr.length; j++)
            {
                    if (arr[i] == arr[j])
                     y++;
                    if (x<y)
                    {
                      x=y; 
                      item = arr[i];
                    }
            }
            y=0;
    }
    return item;
}