  function bmicalc() {
	  
		  let weight_parametr = document.getElementById("weight").value;
		  let height_parametr = document.getElementById("height").value;  
		  height_parametr /= 100;
		  let bmi_text = document.getElementById("bmi-text");
		  let bmi = weight_parametr / (height_parametr * height_parametr) ;
		  
		 if(!isNaN(weight_parametr) && !isNaN(height_parametr) ){
		 if(bmi < 18.5 ){
			 bmi_text.innerHTML="Underweight";
		 }
		 else if(18.5 <= bmi && bmi < 25 ){
			  
			 bmi_text.innerHTML="Normal weight";
				 
		 }
		 
		 else if(25 <= bmi && bmi < 30 ){
			  
			 bmi_text.innerHTML="Overweight";
				 
		 }
     else if( bmi >= 30){
		  bmi_text.innerHTML="Obese";
				 
		 }
		 }
		 else {
			 alert("please , insert numbers in text boxs");
		 }
    
	  
    }
	
	function Reset(){
	
			 document.getElementById("weight").value= "";
			 document.getElementById("height").innerHTML= "";
			  document.getElementById("bmi-text").innerHTML= "";
			 
	}
