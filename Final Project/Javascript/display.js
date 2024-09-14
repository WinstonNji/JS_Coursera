export function displayActivities(selectedActivities){    
    let display = '';

    selectedActivities.forEach(selectedActivity => {
        display += `
                        
                        <div class="container">
                            <img src="${selectedActivity.pictures}" alt="Image of ${selectedActivity.name}">
                            <div class="containerText">
                                <h2>${selectedActivity.name}</h2>
                                <p>${selectedActivity.shortDescription}</p>
                                <button>Visit</button>
                            </div>
                        </div>
        `

        document.getElementById("displayArea").innerHTML = display
    })
}
// Updates the time
export function displayTime(lat,lon){
     let meridiem = ''
        fetch(`https://timeapi.io/api/time/current/coordinate?latitude=${lat}&longitude=${lon}`).then(
            response => {
                if(!response.ok){
                    throw new Error("Couldn't get time for this location")
                }else{
                    return response.json()
                }
            }
        ).then(data =>{
            if(data.hour>12){
                meridiem = `AM`
            }else{
                meridiem = `PM`
            }
    
            setTimeout(() => {
                document.querySelector('#tz').innerHTML = `Current Local Time(${data.timeZone}): ${data.time} ${meridiem}`
            },2500)
             
        })
    
  
}