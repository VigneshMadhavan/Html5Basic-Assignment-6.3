//function to initialize objects

function Student(name, Language, Maths, Science) {
    this.name = name;   
    this.Language = Language;
    this.Maths = Maths;
	this.Science = Science;
	
	this.Average=function(){
		return Math.round((Language+Maths+Science)/3);
	}
	this.LanguageGrade=function(){
		return (this.Language<35)?"Fail":"Pass"; 
	}
	this.MathsGrade=function(){
		return (this.Maths<35)?"Fail":"Pass"; 
	}
	this.ScienceGrade=function(){
		return (this.Science<35)?"Fail":"Pass"; 
	}
	
}

function initialize(){
	var studentRecords=new Array();
	
	studentRecords.push(new Student("Vignesh",60,90,70));
	studentRecords.push(new Student("Prasad",90,100,100));
	studentRecords.push(new Student("Senthil",35,34,0));
	
	var str=new String("<table>");
	
	for(var i=0;i<studentRecords.length;i++){
		var student=studentRecords[i];
		str+='<tr><th class="studentName" colspan="3">Student Name: '+student.name+'</th></tr><tr><th class="heading">Subject</th><th class="heading">Marks</th><th class="heading">Grade</th></tr>'
		str+='<tr><td>Language</td><td>'+student.Language+'</td><td>'+student.LanguageGrade()+'</td></tr>'
		str+='<tr><td>Maths</td><td>'+student.Maths+'</td><td>'+student.MathsGrade()+'</td></tr>'
		str+='<tr><td>Science</td><td>'+student.Science+'</td><td>'+student.ScienceGrade()+'</td></tr>'
		str+='<tr><th class="overAll" colspan="3">Average: '+student.Average()+'</th></tr>'
		
	}
	str+="</table>"
	document.write(str);
}



initialize();

