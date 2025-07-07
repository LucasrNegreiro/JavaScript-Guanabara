let num = [5,8,4]
console.log(num)

num.push(7)
num.sort()
console.log(num)

// enquanto i for menor q os elementos do meu vetor ele continuara contando quais os valores dele
for( i =0; i <= num.length; i++){
    console.log(num[i])
}

for(i in num){
    console.log(num[i])
}


