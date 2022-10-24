export function CardHeader(element) {
  element.innerHTML = `
      <div class='bg-circle'>
        <i class="ph-moon-stars-thin"></i>
        <div class='hour-pointer'></div>
        <div class='min-pointer'></div>
        <div class='sec-pointer'></div>
      </div>
    `;

    function sleep(ms){
      return new Promise(resolve =>  setTimeout(resolve, ms));
    }
    async function hourTime(){
      const hourPointer = document.querySelector('.hour-pointer')
      const minPointer = document.querySelector('.min-pointer')
      let hour = 0;
      while(hour <= 360){
        // hourPointer.style.transform = `rotate(${hour= hour+ 10}deg)`
        // minPointer.style.transform = `rotate(${hour= hour+ 10}deg)`
        await sleep(200)
        if(hour > 359){
          hour = 0;
        }
        console.log(hour)
      }
    }

    hourTime()
}
