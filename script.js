const lettersArray = "A,B,D,E,F,H,I,K,L,M,N,O,Q,R,T,V,Z".split(",")
const numbersArray = "0,1,2,3,4,5,6,7,8,9".split(",")
const arrayForGenerate =
	"A,B,D,E,F,H,I,K,L,M,N,O,Q,R,T,V,Z,0,1,2,3,4,5,6,7,8,9,+,-,_,$,~".split(",")
const terminalArgs = process.argv.slice(2)
;[countForRand, symbolForReplaceLetters, symbolForReplaceNumbers] = terminalArgs
let randString = ""
let lettersReplaceCount = 0
let numbersReplaceCount = 0
let notReplaceCount = 0
for (let i = 0; i < countForRand; i++) {
	randString +=
		arrayForGenerate[Math.floor(Math.random() * arrayForGenerate.length)]
}
console.log(randString)
randString = randString.split("")
randString.forEach((item) => {
	if (lettersArray.includes(item)) {
		lettersReplaceCount++
	} else if (numbersArray.includes(item)) {
		numbersReplaceCount++
	} else {
		notReplaceCount++
	}
})

console.log(lettersReplaceCount, numbersReplaceCount, notReplaceCount)
