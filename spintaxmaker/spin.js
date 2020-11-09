function spin() {
var lines = document.getElementById('spintax').value.split('\n');
;
var $ergebnis = "{";
for(var i = 0;i < lines.length;i++){
				if (lines[i]) {
					var trimmed_word = lines[i].trim();
					if (trimmed_word.length > 0){
				$ergebnis += trimmed_word + '|'
					}
				}
}

$ergebnis=$ergebnis.slice(0,-1);
$ergebnis =$ergebnis + '}';
	if($ergebnis.length > 1){
	document.getElementById("spintax").value = $ergebnis;
	} else
	{ alert('No Input');}
}

// 

function spinDua() {
	var lines = document.getElementById('spintaxDua').value.split('\n');
	;
	var $dhununkDua = "{";
	for(var i = 0;i < lines.length;i++){
					if (lines[i]) {
						var trimmed_word = lines[i].trim();
						if (trimmed_word.length > 0){
					$dhununkDua += trimmed_word + '|'
						}
					}
	}
	
	$dhununkDua=$dhununkDua.slice(0,-1);
	$dhununkDua =$dhununkDua + '}';
		if($dhununkDua.length > 1){
		document.getElementById("spintaxDua").value = $dhununkDua;
		} else
		{ alert('No Input');}
	}
	
// 

function spinTiga() {
	var lines = document.getElementById('spintaxTiga').value.split('\n');
	;
	var $dhununkTiga = "{";
	for(var i = 0;i < lines.length;i++){
					if (lines[i]) {
						var trimmed_word = lines[i].trim();
						if (trimmed_word.length > 0){
					$dhununkTiga += trimmed_word + '|'
						}
					}
	}
	
	$dhununkTiga=$dhununkTiga.slice(0,-1);
	$dhununkTiga =$dhununkTiga + '}';
		if($dhununkTiga.length > 1){
		document.getElementById("spintaxTiga").value = $dhununkTiga;
		} else
		{ alert('No Input');}
	}

// 

function spinEmpat() {
	var lines = document.getElementById('spintaxEmpat').value.split('\n');
	;
	var $dhununkEmpat = "{";
	for(var i = 0;i < lines.length;i++){
					if (lines[i]) {
						var trimmed_word = lines[i].trim();
						if (trimmed_word.length > 0){
					$dhununkEmpat += trimmed_word + '|'
						}
					}
	}
	
	$dhununkEmpat=$dhununkEmpat.slice(0,-1);
	$dhununkEmpat =$dhununkEmpat + '}';
		if($dhununkEmpat.length > 1){
		document.getElementById("spintaxEmpat").value = $dhununkEmpat;
		} else
		{ alert('No Input');}
	}
	