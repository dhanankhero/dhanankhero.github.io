function update_text()
{
	var str_array = $("textarea[id='source']").val().split("\n");
	
	undo_str = $("textarea[id='source']").val();
	
	switch ($("select[id='sort_type']").val())
	{
		case 'alphabet':
			$("#sort_direction").removeAttr('disabled');
			str_array.sort(function (a, b){
					var length = Math.min(a.length, b.length);
					
					for (var i=0; i < length; i++)
						if (a.charCodeAt(i) !== b.charCodeAt(i))
							return $("#sort_direction").val() === 'asc' ? a.charCodeAt(i)-b.charCodeAt(i) : b.charCodeAt(i)-a.charCodeAt(i);
					return $("#sort_direction").val() === 'asc' ? a.length-b.length : b.length-a.length;
			});
		break;
		case 'length':
			$("#sort_direction").removeAttr('disabled');
			str_array.sort(function (a, b){ return $("#sort_direction").val() === 'asc' ? a.length-b.length : b.length-a.length;});
		break;
		case 'syllables':
			$("#sort_direction").removeAttr('disabled');
			str_array.sort(function (a, b){
					try {var syllables_a = a.match(/[aeuoi]/g).length;	}
					catch (er) {	var syllables_a = 0;	};
					try {var syllables_b = b.match(/[aeuoi]/g).length;	}
					catch (er) {	var syllables_b = 0;	};
					return $("#sort_direction").val() === 'asc' ? syllables_a-syllables_b : syllables_b-syllables_a;
			});
		break;
		case 'random':
			str_array.sort(function (a, b){ return Math.floor(Math.random()*10) - 5;});
			$("#sort_direction").attr('disabled', 'disabled');
		break;
		case 'reverse':
			str_array.reverse();
			$("#sort_direction").attr('disabled', 'disabled');
		break;
	}
	
	$('#undo_button').css('display', 'inline');
	$("textarea[id='source']").val(str_array.join("\n"));
}

$().ready(function() {
		$("#sort_button").click(function(){update_text()});
		
		$("#undo_button").click(function(){
			$('#source').val(undo_str);
			$(this).css('display', 'none');
		
		});
		$("#source").focus();
});