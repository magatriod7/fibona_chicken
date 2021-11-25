// fibona chicken 1 1 2 3 3 4 
people = 0
peoplearr = []
fiboarr = 0
chicken = 0
a = 0;
peoplearr.push(1)
peoplearr.push(1)
for(a = 0; a<30; a++){
	peoplearr.push(peoplearr[a]+peoplearr[a+1])
	console.log("str" + a + ":" + peoplearr[a+2])

}
