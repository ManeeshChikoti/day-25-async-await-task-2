async function getdata(){

    try{
       let response=await fetch("https://www.breakingbadapi.com/api/characters");
         let res= await response.json();
         console.log(res)
  
    // using for eachloop to get the data
    res.forEach(element => {
           //    pushing the data into output div by using class selector as suggested
          //  sending the data as a card
        document.getElementsByClassName("output")[0].innerHTML +=
    `<div class="card " style="width: 16rem;">
    <img src="${element.img}" class="card-img-top" alt="..."><br>
    <div class="card-body">
    
     <p><b>NAME:</b>${element.name}</p>
     <p><b>PORTRAYED BY:</b>${element.portrayed}</p>
     <p><b>SEASONS ACTED:</b>${element.appearance}</p>
    </div>
    
  </div>`
});  

    }
    catch(error){
      // if any  error occurs this message will be printed
        document.getElementsByClassName("output")[0].innerHTML=`<p>"data not foud"</p>`
    }
}
getdata();