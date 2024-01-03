let user1;
console.log(document.querySelector('.container').firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild)

function type(event){
    let  user=prompt('enter user name to comment..')
    user1=user;
    if(event.target.id=='firstcom' && user!=''){
        let reply_bar=document.querySelector('.container').firstElementChild.lastElementChild;
    reply_bar.style.display='flex'
    }
   else if(event.target.id=='seccom' && user!=''){
    let reply_bar=document.querySelector('.container').lastElementChild.lastElementChild;
    reply_bar.style.display='flex'

   }
}
function get(event){
    console.log(event.target)
    if(event.target.getAttribute('custom')=='firstcom'){
        if(event.target.id=='reply-reply'){
            if(event.target.tagName=="P"){
             if(event.target.parentNode.previousElementSibling.lastElementChild.firstElementChild.value==''){
                 alert('You must write something in text box')
             }
             else{
                 let value=event.target.parentNode.previousElementSibling.lastElementChild.firstElementChild.value;
                 appending(value)
                 show();

              console.log(value)
     
     
             }
            }
            else if(event.target.tagName=="DIV"){
             if(event.target.previousElementSibling.lastElementChild.firstElementChild.value==''){
                 alert('You must write something in text box')
             }
             else{
                 let value=event.target.previousElementSibling.lastElementChild.firstElementChild.value;
                 appending(value)
                 show()

            }
           
         }
         }

    
    }
    else if(event.target.getAttribute('custom')=='seccom'){
        console.log('seelan')
        if(event.target.tagName=="P"){
            if(event.target.parentNode.previousElementSibling.lastElementChild.firstElementChild.value==''){
                alert('You must write something in text box')
            }
            else{
                let value=event.target.parentNode.previousElementSibling.lastElementChild.firstElementChild.value;
                appending1(value)
                show1()
             console.log(value)

    
    
            }
           }
           else if(event.target.tagName=="DIV"){
            if(event.target.previousElementSibling.lastElementChild.firstElementChild.value==''){
                alert('You must write something in text box')
            }
            else{
                let value=event.target.previousElementSibling.lastElementChild.firstElementChild.value;
                appending1(value)
                show1()
           }
          
        }
     }

   
}


function appending(value){
    console.log('seelan')
    let comment1=document.querySelector('.container1').lastElementChild.previousElementSibling;
    let comment_reply_bar=document.querySelector('.container1').lastElementChild.previousElementSibling.lastElementChild;
    let newcome=document.querySelector('.amyrobson');
    let newcom=newcome.cloneNode(true);
    newcom.lastElementChild.lastElementChild.innerHTML=value;
    newcom.lastElementChild.firstElementChild.firstElementChild.firstElementChild.src='images/avatars/image-juliusomo.png';
    newcom.lastElementChild.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.innerHTML=user1;
    comment1.insertBefore(newcom,comment_reply_bar);
    console.log(newcome)
    savedata()
    
}
function show(){
    let comment=document.querySelector('.container').firstElementChild.lastElementChild.previousElementSibling;
    comment.style.display='flex';
    document.querySelector('.container').firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.value='';
}
function appending1(value){
     console.log(value);
     let comment1=document.querySelector('.container').lastElementChild.lastElementChild.previousElementSibling;
     let comment_reply_bar=comment1.lastElementChild;
     let newcome=document.querySelector('.amyrobson');
     let newcom=newcome.cloneNode(true);
     newcom.lastElementChild.lastElementChild.innerHTML=value;
     newcom.lastElementChild.firstElementChild.firstElementChild.firstElementChild.src='images/avatars/image-juliusomo.png';
     newcom.lastElementChild.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.innerHTML=user1;
     comment1.insertBefore(newcom,comment_reply_bar);
     console.log(newcom)
     savedata()
}
function show1(){
    let comment=document.querySelector('.container').firstElementChild.lastElementChild.previousElementSibling;
    comment.style.display='flex';
    document.querySelector('.container').lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.value='';
}
function savedata(){
    let comment=document.querySelector('.container').firstElementChild.lastElementChild.previousElementSibling;
    localStorage.setItem('data',comment.innerHTML);
}
function showtask(){
    let comment=document.querySelector('.container').firstElementChild.lastElementChild.previousElementSibling;
    comment.innerHTML=localStorage.getItem('data')
 }
 showtask()