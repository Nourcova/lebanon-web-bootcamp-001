function addNumber(x){
  let sum=0;
  let i=1;
  while(i<=x){
    sum=sum+i;
    i++;
  }
  return sum;
}


function repeatCharacter(name){
  let j="";
  for (k=0;k<name.length;k++)
  {
    j=j+name[k]+name[k];
  }
  return j;
}
console.log(repeatCharacter('hello'));
