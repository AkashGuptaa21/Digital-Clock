const div= document.querySelector('div')

setInterval(()=>{
    
      let time= new Date()

      //console.log(time) //utc format  //date & time 

      div.textContent=time.toLocaleTimeString()  //only time

},1000)






