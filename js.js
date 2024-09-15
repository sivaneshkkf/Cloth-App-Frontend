const ulEl = document.querySelector(".section .product ul");
console.log(ulEl);
var allLiEl;

document.addEventListener("DOMContentLoaded", (e) => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {

            for(let i=0;i<data.length;i++){
                const d=data[i];
                createLi(d.image,d.name,d.desc);
            }

            allLiEl=ulEl.querySelectorAll("li");
            //console.log(allLiEl);
        })
})




function createLi(image,name,desc) {
    const li = document.createElement("li");
    const cardCon=document.createElement("div");
    const cardFront=document.createElement("div");
    const cardBack=document.createElement("div");
    const cardContent=document.createElement("div");
    const img = document.createElement("img")
    const div = document.createElement("div");
    const p = document.createElement("p");
    const h6 = document.createElement("h6");
    const small = document.createElement("small");
    const div2 = document.createElement("div");

    li.className = "cloth";
    cardCon.className="cardCon";
    cardFront.className="cardFront";
    cardBack.className="cardBack";
    cardContent.className="cardContent";
    cardBack.style.backgroundImage = `url(${image})`;
    img.src = image;

    img.alt = "pic";
    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FB4C"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"/></svg>`;
    p.innerText = "33%";
    h6.innerText = name;
    small.innerText = desc;
    small.style.cssText = "font-size: x-small; opacity: 0.5;"
    div2.innerHTML = `<span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M263.79-408Q234-408 213-429.21t-21-51Q192-510 213.21-531t51-21Q294-552 315-530.79t21 51Q336-450 314.79-429t-51 21Zm216 0Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm216 0Q666-408 645-429.21t-21-51Q624-510 645.21-531t51-21Q726-552 747-530.79t21 51Q768-450 746.79-429t-51 21Z"/></svg></span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M648-96q-50 0-85-35t-35-85q0-9 4-29L295-390q-16 14-36.05 22-20.04 8-42.95 8-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 43 8t36 22l237-145q-2-7-3-13.81-1-6.81-1-15.19 0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-43-8t-36-22L332-509q2 7 3 13.81 1 6.81 1 15.19 0 8.38-1 15.19-1 6.81-3 13.81l237 145q16-14 36.05-22 20.04-8 42.95-8 50 0 85 35t35 85q0 50-35 85t-85 35Zm0-72q20.4 0 34.2-13.8Q696-195.6 696-216q0-20.4-13.8-34.2Q668.4-264 648-264q-20.4 0-34.2 13.8Q600-236.4 600-216q0 20.4 13.8 34.2Q627.6-168 648-168ZM216-432q20.4 0 34.2-13.8Q264-459.6 264-480q0-20.4-13.8-34.2Q236.4-528 216-528q-20.4 0-34.2 13.8Q168-500.4 168-480q0 20.4 13.8 34.2Q195.6-432 216-432Zm432-264q20.4 0 34.2-13.8Q696-723.6 696-744q0-20.4-13.8-34.2Q668.4-792 648-792q-20.4 0-34.2 13.8Q600-764.4 600-744q0 20.4 13.8 34.2Q627.6-696 648-696Zm0 480ZM216-480Zm432-264Z"/></svg></span>`;

    div.append(p);
    cardContent.append(img);
    cardContent.append(div);
    cardContent.append(h6);
    cardContent.append(small);
    cardContent.append(div2);

    cardFront.append(cardContent)
    cardCon.append(cardFront);
    cardCon.append(cardBack);
    li.append(cardCon)
    ulEl.append(li);
}


// filter toggle
const filterCon=document.querySelector(".filter");
const filterBtn=document.querySelector(".filterBtn");
const closeIcon=document.querySelector(".closeIcon");

filterBtn.addEventListener("click", (e) => {
    filterCon.classList.replace("hidden","visible");
});
closeIcon.addEventListener("click", (e) => {
    filterCon.classList.replace("visible","hidden");
});

// filter button active

const clothTypeBtn = document.querySelector(".ClothType");
const formEl=document.forms.filterForm;
//console.log(formEl);
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
});

const btn=formEl.btn;
//console.log([...btn]);

clothTypeBtn.addEventListener("click",(e) => {
    btn.forEach((b) => {
        b.className= "";
    });

    console.log(e.target);

    e.target.className="active";
    console.log("click");
})
//console.log(clothTypeBtn);

// clothTypeBtn.forEach(button => {
//     button.addEventListener("click", (e) => {
//         btn.forEach(b => {
//             b.className="";
//         })

//         console.log(e.target);
//         e.target.className="active";
//     })
// })


// card flip animation

// function flip(event){
//     console.log(allLiEl.length);
//     allLiEl.forEach(li => {
//         li.classList.remove("active");
//         li.querySelector(".cardCon").classList.remove("active");
//     })
//     const targetEl=event.target.parentNode.parentNode.parentNode;
//     console.log(targetEl.parentNode);
//     targetEl.classList.add("active");
//     targetEl.parentNode.classList.add("active");
// }

ulEl.addEventListener("click", (e) => {
    
    console.log(allLiEl.length);
    allLiEl.forEach(li => {
        li.classList.remove("active");
        li.querySelector(".cardCon").classList.remove("active");
    })
    const targetEl=e.target;
    targetEl.closest(".cardCon").classList.add("active");
    targetEl.closest(".cloth").classList.add("active");

    
})


formEl.count.nextElementSibling.innerHTML=formEl.count.value;
formEl.minRatio.nextElementSibling.innerHTML=formEl.minRatio.value;
formEl.maxRatio.nextElementSibling.innerHTML=formEl.maxRatio.value;

// formEl.count.addEventListener("input", (e) => {
//     //console.log(e.target.nextElementSibling);
//     e.target.nextElementSibling.innerHTML=e.target.value.toString();
// })

const ranges=formEl.elements.range;
console.log(ranges);

formEl.addEventListener("input", (e) => {
    e.target.nextElementSibling.innerHTML=e.target.value.toString();
})