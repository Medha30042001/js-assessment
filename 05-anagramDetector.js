//my approach

function solve(str1, str2) {
  
  let st1 = '';
  let st2 = '';
  
  for(let i = 0; i<str1.length; i++){
    if(str1[i]!==' '){
      st1 += str1[i];
    }
  }
  
  for(let i = 0; i<str2.length; i++){
    if(str2[i]!==' '){
      st2 += str2[i];
    }
  }
  
  if(st1.length != st2.length){
    console.log('False');
    return;
  }
  let arr = st2.split('');
  
  for(let ch of st1){
    let found = false;
    for(let j=0; j<arr.length; j++){
      if(ch === arr[j]){
        arr[j] = '';
        found = true;
        break;
      }
    }
    if(!found){
    console.log('False');
    return;
    }
  }
  
  console.log('True');
}





