//my approach

function numberPattern(N){
  
  for(let i=1; i<=N; i++){
    let str = '';
    for(let j=1; j<=i; j++){
      str+=j;
    }
    console.log(str);
  }
  
  for(let i=N-1; i>0; i--){
    let st = '';
    for(let k = 1; k<=i; k++){
      st+=k;
    }
    console.log(st);
  }
  
}
