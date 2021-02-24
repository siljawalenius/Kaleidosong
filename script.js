const canvas = document.querySelector("div.canvas-holder canvas")
const sandbox = new GlslCanvas(canvas)

const complexTag = document.querySelector("span.complex")

const calcSize = () =>{
  let ww = window.innerWidth;
  let wh = window.innerHeight;
  let dpi = window.devicePixelRatio
  
  let s = Math.max(ww + 200, wh)
  canvas.width = s * dpi
  canvas.height = s * dpi
  
  canvas.style.width = s + "px";
  canvas.style.height = s + "px"
}
calcSize()

const resize = () =>{
  calcSize()
}

//didnt feel like coding a bunch of img tags on my own oops
const albums = [ "phoebe.png", "altj.jpg","dominic.jpg", "zaba.jpg", "woozy.jpg" ]
let curImg = 0; 

//How do I get the # of segments of keep updating in the fragmenttttt
//initial # of segments is 6
let segments = 20.0;
//set the initial uniform
let countUp = true;
canvas.addEventListener("click", function (){
  if (segments >= 34){
    countUp = false
  }else if (segments <= 12){
    countUp= true
  }
  if (countUp){
    segments +=2; 
  }else {
    segments -=2
  }
  complexTag.innerHTML = segments
  console.log(segments)
  sandbox.setUniform("u_segments", segments)
})

//create a canvas button for each album 
//
const nav = document.querySelector("nav")

//add albums to page
//
//I CODED THIS AT 2AM IM SORRY ITS MESSY 
//
albums.forEach((album) =>{
  let albumTag = document.createElement('img')
  albumTag.src = `${album}`
  albumTag.class = `album`
  nav.appendChild(albumTag)
  albumTag.addEventListener("click", () =>{
    sandbox.setUniform("image", album)
  })
})





sandbox.load(frag)
sandbox.setUniform("image", albums[curImg])
sandbox.setUniform("u_segments", 12.0)