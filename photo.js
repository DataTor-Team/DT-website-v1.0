const imgsrc = [
    "assets/img/step1.svg",
    "assets/img/step2.svg",
    "assets/img/step3.svg"
]

let currentIndex = 0

function handleOnClickDot(index) {
    const prevDot = document.getElementById(`dot${currentIndex}`)
    if(prevDot) classList.remove('activedot')
    document.getElementById('howitworksimg').src = imgsrc[index]
    currentIndex = index;
    const dot = document.getElementById(`dot${index}`);
    if (dot) dot.classList.add("activedot");
}
