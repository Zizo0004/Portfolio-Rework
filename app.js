const callback = (entries,observer)=>{
    for(entry of entries){
        if(entry.isIntersecting && entry.target.id == "projects"){
            entry.target.classList.add("projectsanimation")
            observer.unobserve(entry.target)
        }
        
        else if(entry.isIntersecting && entry.target.nodeName == "IMG"){
            entry.target.src = entry.target.alt
            entry.target.classList.add("blurclass")
            observer.unobserve(entry.target)
        }
        else{
            console.log(`img not found src: ${entry.target.src}`)

        }
    }
}
const observer = new IntersectionObserver(callback)
target = document.getElementById("projects")
imgs = document.querySelectorAll("img")
for(img of imgs){
    observer.observe(img)
}
observer.observe(target)

photos = document.getElementsByClassName("photo")

for(photo of photos){
    photo.addEventListener('mouseover',function(photo){
        this.siblingNode.innerText = 'hello';
    });
}

