// fibona chicken 1 1 2 3 3 4 
people = 10
peoplearr = []
fiboarr = 0
chicken = 0
a = 0;
peoplearr.push(1)
peoplearr.push(1)
for(a = 0; a<30; a++){
	peoplearr.push(peoplearr[a]+peoplearr[a+1])

}
a = 0;
while((people != 0)&&a<10){
while(a<10){
	console.log("in")
	if(peoplearr[a]<people){
		a++
	}
	else{
		console.log("sub")
		people-=peoplearr[a-1]
		chicken+=(a-1)
		break;
	}
}
}
console.log(chicken)
