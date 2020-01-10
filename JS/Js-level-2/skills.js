// skills.js


// fetch API
var emps=document.querySelector("#emps"); // seelect tag id 

fetch('countries.json') // fetch api returns a strems from the back end
.then(response=>response.json())
.then(countriesData=>{
    
   for(var country of countriesData.countries){
      
     let en=document.createElement('option');
     en.setAttribute("value",country.code);
     console.log(en);
     
     en.textContent=country.name;
     emps.appendChild(en);  
   }
});


// 
function addSkill(){
    
    var sc=document.querySelector('#sc');
    var dDiv=document.querySelector('#dynamicSkill');
    var skillsDiv=document.querySelector('#skills');

    var count=++sc.value;

    var textFieldDiv=document.createElement('div');
    var newTextFieldLable=document.createTextNode("Skill Set"+count);
    var newTextFiled=document.createElement('input');
    var rmvBtn=document.createElement('button');
    rmvBtn.textContent='Remove'
    rmvBtn.setAttribute("id","skill"+count);
    
    textFieldDiv.setAttribute("id","skill"+count);
    textFieldDiv.setAttribute("id","skill"+count);

    textFieldDiv.appendChild(newTextFieldLable)
    textFieldDiv.appendChild(newTextFiled)
    textFieldDiv.appendChild(rmvBtn)

    // append newly created div with parent div skillls
    skillsDiv.appendChild(textFieldDiv);

   

    //dDiv.appendChild(textFiledDiv);
   
    
    rmvBtn.addEventListener('click',e=>{
        console.log('Removing Skill'+count);
        skills.removeChild(textFieldDiv);  
    })
    



    
}