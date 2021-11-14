let toDoParent = document.getElementById("the-input"); // hämtar to do list diven
let toDoList = document.getElementById("the-list"); //hämtar to do listan / ul
let input = document.getElementById("to-do-input"); //hämtar inputen (textfältet)
let addButton = document.getElementById("to-do-btn"); //hämtar inputknappen
let errorMsg = document.createElement("p"); //skapar p tagg
let doneList = document.getElementById("the-done-list"); // hämtar (gjorda sysslor) listan
let editedInput = document.createElement("input"); //skapar en input element
let resetAll = document.getElementById("reset-button");
let arrList = []; // skapar en tom array

addButton.addEventListener("click", () => {
  //skapar en click-funktion till to-do-btn

  if (input.value === "") {
    //om vi clickar och textraden/inputen är Tom...
    errorMsg.innerHTML = "Vänligen ange en syssla!"; //skriver ut errortexten
    errorMsg.style.color = "red"; // färglägger errortexten till rött
    toDoParent.appendChild(errorMsg);
  } /*else if (arrList.includes(input.value.toLowerCase())) {
    //tolowercase för att inte kunna skriva exakt samma syssla mer än en gång
    errorMsg.innerHTML = "sysslan finns redan i Listan!"; //skriver ut errortexten om samma syssla redan finns
    errorMsg.style.color = "red"; // färglägger errortexten till rött
    toDoParent.appendChild(errorMsg);
  }*/ else {
    arrList.push(input.value); //lägger till ett index i slutet av arrayen.
    errorMsg.innerHTML = ""; // tar bort error meddelande ifall det finns en
    let liItem = document.createElement("li"); //skapar en Li tagg, list item
    let liInput = document.createElement("input"); // skapar en input tagg
    let doneButton = document.createElement("button"); //skapar en intern färdigknapp
    let editButton = document.createElement("button"); //skapar en intern ändraknapp
    let deleteButton = document.createElement("button"); //skapar en intern raderaknapp

    doneButton.innerText = "Färdig"; // lägger till text till knappen
    editButton.innerText = "Ändra"; // lägger till text till knappen
    deleteButton.innerText = "Radera"; // lägger till text till knappen
    liInput.value = input.value; //attgöralistans-inputen(LiInput) value får sin value av inputens value. (list item input)
    liInput.disabled = true;            // disablar inputen direkt när den läggs till

      
    editButton.addEventListener("click", () => {
      
      if (liInput.value === "") {
        //om inputens value är en tom string. så tillkommer ett errormeddelande
        errorMsg.innerHTML = "Du måste ange en syssla!"; // här skapar vi och lägger till en text hos en p tag som finns globalt.
        errorMsg.style.color = "red"; // färglägger errortexten till rött
        toDoList.append(errorMsg); // nu blir errorMsg Synlig på sidan, om stringen är tom.
      } else {
        
        errorMsg.innerHTML = ""; // tar bort error meddelande ifall det finns en
      }
    });
  
    editButton.onclick = function() {  //skapar onclick funktion så att när man klickar så händer det olika saker för varje click
      let disabled = liInput.disabled; //tilldelar inputen till variabel
      if (disabled || liInput.value === "") {    //       om den är disabled eller input value är tom 
        liInput.disabled = false;         //om inputen är disable eller är tom så blir den enabled
      } else {                          // om inputen är enabled blir den disabled
        liInput.disabled = true;
        
      }
    }
    
    deleteButton.onclick = function() {
      liItem.remove();
    }
    toDoList.appendChild(liItem); // gör li-taggar synlig på sidan
    liItem.appendChild(liInput); //gör attgöra-inputen synlig på sidan, i listan
    liItem.appendChild(doneButton); //gör färdig-knapp synlig i listan på sidan
    liItem.appendChild(editButton); //gör Ändra-knapp synlig i listan på sidan
    liItem.appendChild(deleteButton); //gör Radera-knapp synlig i listan på sidan

    
    doneButton.addEventListener("click", () => {
      // när vi clickar på färdigknappen

      let doneLi = document.createElement("li"); //skapar li taggar
      let doneInput = document.createElement("input"); //skapar input
      let doneDeleteButton = document.createElement("button"); //skapar knapp
      let doneEditButton = document.createElement("button"); //skapar knapp
      doneInput.value = liInput.value; // färdig input valuen läggs till i gjorda sysslor
      doneDeleteButton.innerText = "Radera"; //skapar text till knappen
      doneEditButton.innerText = "Ändra"; //skapar text till knappen
      doneLi.value = doneInput.value; //li=input + inputens value
      

      if (liInput.value === "") {
        //om inputens value är en tom string. så tillkommer ett errormeddelande
        errorMsg.innerHTML = "Hittar ingen syssla att färdigställa!"; // här skapar vi och lägger till en text hos en p tag som finns globalt.
        errorMsg.style.color = "red"; // färglägger errortexten till rött
        toDoList.appendChild(errorMsg); // nu blir errorMsg Synlig på sidan, om stringen är tom.
      } else {
        errorMsg.innerHTML = ""; // tar bort error meddelande ifall det finns en
        doneInput.value = liInput.value; // lägger till listans input i done input ( gjorda sysslor)
        doneInput.disabled = true;      // disablar inputen direkt när den läggs till
        doneEditButton.addEventListener("click", function() {  //skapar onclick funktion så att när man klickar så händer det olika saker för varje click
      
          let disabled = doneInput.disabled; //tilldelar inputen till variabel
          if (disabled) {    //       om den är disabled eller input value är tom 
            doneInput.disabled = false;         //om inputen är disable eller är tom så blir den enabled
            
          }else if (doneInput.value === ""){
            errorMsg.innerHTML = "Du måste ange en syssla!"; // här skapar vi och lägger till en text hos en p tag som finns globalt.
            errorMsg.style.color = "red"; // färglägger errortexten till rött
            doneLi.append(errorMsg); // nu blir errorMsg Synlig på sidan, om stringen är tom.

          }else {                          // om inputen är enabled blir den disabled
            doneInput.disabled = true;
            errorMsg.innerHTML = ""; // tar bort error meddelande ifall det finns en
            
          }
        });
        doneDeleteButton.onclick = function() { //skapar en onclick function på raderaknappen i gjorda sysslor listan
          doneLi.remove();         // knappen tar bort list item i gjorda sysslor listan
        }
        doneList.appendChild(doneLi); // gör doneLi synlig på sidan
        doneLi.appendChild(doneInput); // gör doneinput synlig på sidan
        liItem.remove(); // tar bort hela inputen från att-göra listan
        doneLi.appendChild(doneEditButton); // gör färdigknapp synlig på sidan vid inputen
        doneLi.appendChild(doneDeleteButton); //gör raderaknapp synlig på sidan vid inputen
      }
     
    });
    
    input.value = ""; // Rensar input efter att man lagt till en syssla
    resetAll.addEventListener("click",() => { //en knapp som refreshar sidan.
      location.reload(); //när vi clickar så laddas sidan om och återställer allt
  });
}
  console.log(arrList);
});

