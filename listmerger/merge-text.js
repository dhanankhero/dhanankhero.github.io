jQuery.extend(jQuery.expr[':'], {
    focus: function(element) { 
        return element == document.activeElement; 
    }
});


function merge_text()
{
	var str1_array = $("textarea[id='source1']").val().split("\n"),
	str2_array = $("textarea[id='source2']").val().split("\n"),
	result_array = [],
	prefix_template = $("input[id='prefix']").val(),
	delimiter_template = $("input[id='delimiter']").val(),
	suffix_template = $("input[id='suffix']").val(),
	prefix='',
	delimiter='',
	suffix='';

	if (prefix_template.match(/%count%/gi) || delimiter_template.match(/%count%/gi) || suffix_template.match(/%count%/gi))
		var count = 1;
	
	if (prefix_template.match(/%length%/gi) || delimiter_template.match(/%length%/gi) || suffix_template.match(/%length%/gi))
		var length = 1;
	
	var max_length = Math.max(str1_array.length, str2_array.length);
	
	for (var i=0; i<max_length; i++)
	{
		prefix = prefix_template;
		delimiter = delimiter_template;
		suffix = suffix_template;
				
		if (typeof(str1_array[i]) === 'undefined')
			str1_array[i] = '';
		
		if (typeof(str2_array[i]) === 'undefined')
			str2_array[i] = '';
		
		if (typeof(count) !== 'undefined')
		{
			prefix = prefix.replace(/%count%/gi, count);
			delimiter = delimiter.replace(/%count%/gi, count);
			suffix = suffix.replace(/%count%/gi, count);
			count++;
		}
		
		if (typeof(length) !== 'undefined')
		{
			prefix = prefix.replace(/%length%/gi, str1_array[i].length+str2_array[i].length+prefix.length);
			delimiter = delimiter.replace(/%length%/gi, str1_array[i].length+str2_array[i].length);
			suffix = suffix.replace(/%length%/gi, str1_array[i].length+str2_array[i].length);
		}

		
		result_array[result_array.length] = prefix+str1_array[i]+delimiter+str2_array[i]+suffix;
	}
	
	$("textarea[id='result']").val(result_array.join("\n"));
}

function paste_text(text)
{
	if (typeof(last_focused_id) === 'undefined')
		last_focused_id = 'prefix';
	
	$("input[id='"+last_focused_id+"']").val($("input[id='"+last_focused_id+"']").val()+text);

	merge_text();
	
	$('#'+last_focused_id).focus();
		
}

$().ready(function() {

		$("textarea[id='result']").focus(function(){this.select();});
		$("input[id='merge_button']").click(function(){merge_text()});
		$("#link_add_count").click(function(){paste_text("%count%");});
		$("#link_add_length").click(function(){paste_text("%length%");});		
		
		$("input[id='prefix']").focus(function(){last_focused_id = 'prefix'});
		$("input[id='delimiter']").focus(function(){last_focused_id = 'delimiter'});
		$("input[id='suffix']").focus(function(){last_focused_id = 'suffix'});
		
		  $("#source1, #source2, #prefix, #delimiter, #suffix").keyup(function(){merge_text()});
		  
		$("#source1").focus();
});