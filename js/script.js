const mainContent = document.getElementById("content")
const mainImage = document.getElementById("img")
const gallery = document.getElementById("gallery")

console.log(gallery)

// console.log(mainContent)


const imageUrls = [
    "../images/bilde1.avif",
     "../images/bilde2.avif", 
     "../images/bilde3.avif", 
     "../images/bilde4.avif", 
     "../images/bilde5.avif"
    ]

    console.log(imageUrls.length)
    console.log(imageUrls[2])
    
    
    const randomNum = Math.floor(Math.random() * imageUrls.length)
console.log(imageUrls)
mainImage.src = imageUrls[randomNum]

imageUrls.forEach(url => {
    const newImage = document.createElement("img")
    newImage.src = url


    gallery.appendChild(newImage)
})
    
    
    // console.log(images[randomNum])
    
    
 
    
 