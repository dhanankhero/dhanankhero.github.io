function change_case(operation)
{
	if ($("#source").getSelection().text !== '')
		var str = $("#source").getSelection().text;
	else
		var str = $("#source").val();
	
	switch (operation)
	{
		case 'uppercase':
			str = str.toUpperCase();
		break;
		case 'lowercase':
			str = str.toLowerCase();
		break;
		case 'random':
			var str_array = str.split('');
			
			for (var key in str_array)
				str_array[key] = Math.random() > 0.5 ? str_array[key].toUpperCase() : str_array[key].toLowerCase();
			
			str = str_array.join('');
		break;
		case 'palisade':
			var str_array = str.split('');
			
			for (var i = 0; i < str_array.length; i++)
				str_array[i] = i % 2 ? str_array[i].toLowerCase() : str_array[i].toUpperCase();
			
			str = str_array.join('');
		break;
		case 'flew':
			str = str.toLowerCase().replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } )
		break;
		case 'fles':
			str = str.toLowerCase().replace( /(^|\.|!|\?|\.\.\.|\n)(\s*)([a-z])/g , function(m,p1,p2,p3){ return p1+p2+p3.toUpperCase(); } )
		break;
	}

	
	if ($("#source").getSelection().text !== '')
		$("#source").replaceSelection(str);
	else
		$("#source").val(str);
	
}

$().ready(function() {
		$("#uppercase, #lowercase, #random, #palisade, #flew, #fles").click(function(){change_case($(this).attr('id'))});

		$("#source").focus();
});