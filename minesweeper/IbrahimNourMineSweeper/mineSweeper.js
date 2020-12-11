let arr=[
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ];
  let cpt=0;
  for(let i=0;i<arr.length;i++){
    for (let j=0;j<arr[i].length;j++){
        if(arr[i][j]==1){arr[i][j]=9;}
    }
  }

  for (let i=0;i<arr.length;i++){
    for (let j=0;j<arr[i].length;j++){

      if (arr[i][j]!=9){
          
          if(arr[i]!==undefined && arr[i][j+1]!==undefined && arr[i][j+1]==9){cpt+=1;}
          if(arr[i]!==undefined && arr[i][j-1]!==undefined && arr[i][j-1]==9){cpt+=1;}
          if(arr[i+1]!==undefined && arr[i+1][j]!==undefined && arr[i+1][j]==9){cpt+=1;}
          if(arr[i-1]!==undefined && arr[i-1][j]!==undefined && arr[i-1][j]==9){cpt+=1;}
          if(arr[i-1]!==undefined && arr[i-1][j+1]!==undefined && arr[i-1][j+1]==9){cpt+=1;}
          if(arr[i-1]!==undefined && arr[i-1][j-1]!==undefined && arr[i-1][j-1]==9){cpt+=1;}
          if(arr[i+1]!==undefined && arr[i+1][j-1]!==undefined && arr[i+1][j-1]==9){cpt+=1;}
          if(arr[i+1]!==undefined && arr[i+1][j+1]!==undefined && arr[i+1][j+1]==9){cpt+=1;}

          arr[i][j]=cpt;
          cpt=0;
      }
    }
  }
  console.log(arr);