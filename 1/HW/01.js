function solution(s){
    var result = true;
    var num = 0;

    s = s.toUpperCase();
    for(let i=0; i<s.length; i++) {
        if(s[i] === 'P') num++;
        if(s[i] === 'Y') num--;
    }

    result = (num === 0);

    return result;
}

let result = solution("pPY");
console.log(result);