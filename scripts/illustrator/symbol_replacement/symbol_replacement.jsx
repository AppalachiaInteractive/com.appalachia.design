var docRef=app.activeDocument;

if(docRef.selection.length>0)
	{
	var replacementSymbol;
	var found=false;

	while(true){
		var symbolName = prompt('Enter the symbol name to use as a replacement: ', ' ');

		try{
			replacementSymbol=docRef.symbols.getByName(symbolName);
			found=true;
			break;
		}
		catch(e)
		{
			var answer = confirm("The symbol could not be found.  Do you want to try again?");
			
			if (answer){
				continue;
			}
			else{
				break;
			}
		}
	}

	if (found){
		var useOriginalSize = confirm("Use the original shapes size?");

		for(i=docRef.selection.length-1;i>=0;i--)
		{
			var existingShape = docRef.selection[i];			
			
			var symbolInstance=docRef.symbolItems.add(replacementSymbol);
			
			if (useOriginalSize)
			{
				symbolInstance.height = existingShape.height;
				symbolInstance.width = existingShape.width;
			}
			
			symbolInstance.position=[existingShape.left,existingShape.top];
			
			existingShape.remove();
		}	
	}

	
	
}
else{
	alert("You must make a selection!");
}