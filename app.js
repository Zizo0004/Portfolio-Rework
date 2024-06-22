const callback = (entries,observer)=>{
    console.log("HHELLLLOOOO")
    for(entry of entries){
        if(entry.isIntersecting){
            console.log(`${entry} is intersecting`)
        }
        else{
            console.log(`${entry} is NOT intersecting`)
        }
    }
}
const observer = new IntersectionObserver(callback)
target = document.getElementById("projects")
observer.observe(target)