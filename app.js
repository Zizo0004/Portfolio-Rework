const callback = (entries,observer)=>{
    console.log("HHELLLLOOOO")
    for(entry of entries){
        if(entry.isIntersecting){
            entry.target.classList.add("projectsanimation")
            observer.unobserve(entry.target)
        }
        else{
            console.log(`${entry} is NOT intersecting`)
        }
    }
}
const observer = new IntersectionObserver(callback)
target = document.getElementById("projects")
observer.observe(target)