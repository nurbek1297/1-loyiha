const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')
console.log(img);



let idx = 0

const changeImgae = () => {
    if (idx > img.length - 1) {
        idx = 0
    }
    imgs.style.transform = `translateX(-${idx * 500}px )`;

}

rightBtn.addEventListener('click', function change() {
    idx++
    
    resetInterval() 

    changeImgae()
})



leftBtn.addEventListener('click', function change() {
    idx--

    resetInterval() 

    changeImgae()
})


let interval = setInterval(run, 2000)

function run() {
    idx++;

    changeImgae();
}

function resetInterval() {

    clearInterval(interval);

    interval = setInterval(run, 2000);

}

