 
 const addBtn = document.querySelector("#addBtn")
 const main = document.querySelector("#main")

 
 addBtn.addEventListener('click',() =>{
      addNote()
 })  
 const saveNotes = () =>{
     const notes = document.querySelectorAll('.note textarea')
     console.log(notes);
     const data = []; // initialy empty data 
     notes.forEach(
        (not) => data.push(not.value)) 
        if(data.length ===0)
        {
           localStorage.removeItem("not")
        }else {
            localStorage.setItem('not', JSON.stringify(data));
        }
    //  console.log(data); ab is deta ko local storage me dalana hai 
    // localStorage.setItem('not', JSON.stringify(data));
 } 


 // self invok function jo ye Notes me entred data ko display karta hai 
//  (function(){
//       const LstoreNote =JSON.parse(localStorage.getItem('not'));
//       LstoreNote.forEach((LS)=> addNote())  
//     })();

//  <div class="note">
//             <div class="tool">
//                 <div class="icon-flex">
//                    <i title="Save The Note" class=" fa-solid fa-floppy-disk icon"></i>
//                    <i title="Delete The Note" class=" fa-solid fa-delete-left icon icon1"></i>
//                 </div>
//             </div> 
//             <textarea></textarea>
//         </div>

        // addNotes
     const addNote = (text = '') => {
    // Creating the Dom for Note 
     const note = document.createElement('div')
     note.classList.add('note')
     note.innerHTML = `
     <div class="tool">
     <div class="icon-flex">
        <i title=" Save The Note" class=" fa-solid fa-floppy-disk icon Save"></i>
        <i title=" Delete The Note" class=" fa-solid fa-delete-left icon icon1 Delete"></i>
     </div>
    </div> 
    <textarea>${text}</textarea>
     `; 
     // Delete Note
     note.querySelector('.Delete').addEventListener('click',
     function(){
       note.remove();
       saveNotes();
     })  
    //  Save note  iske liye hume local Storege me save karna hoga 
    note.querySelector(".Save").addEventListener("click", () =>{
        saveNotes();
    }
    )
    // auto save text 
    note.querySelector('textarea').addEventListener("focusout",() =>{
         saveNotes();
    })
     main.appendChild(note);
     saveNotes(); // ye empty  notes ko bhi save karega referesh karn eper
 } 

//  referesh karne me nhi hateg 
 (function(){
          const LstoreNote =JSON.parse(localStorage.getItem('not'));
         if(LstoreNote === null)
         {
             addNote();
         }else{
            LstoreNote.forEach((LS)=> addNote(LS))  
         }

        //  LstoreNote.forEach((LS)=> addNote(LS))  
          
        //   if(LS.length ==0)
        //   {
        //    localStorage.removeItem("not")
        //   }else{
        //     addNote();
        //   }

        })();
    