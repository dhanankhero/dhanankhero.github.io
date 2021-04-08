function pick_lines()
{
	var str_array = $("#source").val().split("\n"),
	total_lines = str_array.length,
	picked = [],
	lines_number = $("#lines_number_field").val();
	
	if (total_lines < lines_number)
		total_lines = lines_number;

	while (picked.length < lines_number)
	{
		var random_line = Math.floor(Math.random()*total_lines);
		if (typeof(str_array[random_line]) !== 'undefined')
		{
			picked[picked.length] = str_array[random_line];
			delete str_array[random_line];
		}
	}
	
	$("#result").val(picked.join("\n"));
}

$().ready(function() {
		$("#result").click(function(){this.select();});
		
		$("#pick_button")
		  .click(function()
				 {
				 var quant = $('#lines_number_field').val();
				 if (quant > $("#source").val().split("\n").length)
				 quant = $("#source").val().split("\n").length;
				 
				 $('#lines_number_field').val(quant);
				 pick_lines();
				 });
        
        $("#source").focus();
});