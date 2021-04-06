let first = document.querySelector('.first');
let second = document.querySelector('.second');



const links = [
{
    label: "Week 1",
    url: "week1/index.html",

    label2: "Week 2",
    url2: "week2/index.html",

    label3: "Week 3",
    url3: "week3/index.html",

    label4: "Week 4",
    url4: "week4/index.html",

    label5: "Week 5",
    url5: "week5/index.html",

    label11: "ToDo List",
    url11: "todoList/index.html",

    label7: "Week 7",
    url7: "week7/index.html",

    label8: "Week 8",
    url8: "week8/index.html",

    label9: "Week 9",
    url9: "week9/index.html",

    label10: "Week 10",
    url10: "week10/index.html",
}

];

const links2 = [
    {
        label7: "Week 7",
        url7: "week7/index.html",
    
        label8: "Week 8",
        url8: "week8/index.html",
    
        label9: "Week 9",
        url9: "week9/index.html",
    
        label10: "Week 10",
        url10: "week10/index.html",

        label12: "Final Project",
        url12: "http://114.33.118.79/",

        label13: "API work(Temple website)",
        url13: "https://jimtang1.github.io/lesson13/temples.html",
    }
    
    ];

links.forEach(
    link =>{
        first.innerHTML +=
        `<li><a href = "${link.url}">${link.label}</li>
        <li><a href = "${link.url2}">${link.label2}</li>
        <li><a href = "${link.url3}">${link.label3}</li>
        <li><a href = "${link.url4}">${link.label4}</li>
        <li><a href = "${link.url5}">${link.label5}</li>
        <li><a href = "${link.url11}">${link.label11}</li>
        
        `
    }
)

    links2.forEach(
        link =>{
            second.innerHTML +=
            `
            <li><a href = "${link.url7}">${link.label7}</li>
            <li><a href = "${link.url8}">${link.label8}</li>
            <li><a href = "${link.url9}">${link.label9}</li>
            <li><a href = "${link.url10}">${link.label10}</li>
            <li><a href = "${link.url12}">${link.label12}</li>
            <li><a href = "${link.url13}">${link.label13}</li>

            `
        }
);

let getDateNow =() =>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const weekday = week[dateObj.getDay()];
    const output = weekday + ', '+ day  + '\n'+ month  + ' ' + year;

    const lu = document.querySelector('#lastupdated');
    lu.textContent = output;
}
   
window.addEventListener("load", (event)=>{
    getDateNow();
    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();


    const hamBtn = document.querySelector(".ham");
    const mainnav = document.querySelector(".navigation");

    hamBtn.addEventListener('click', ()=>{mainnav.classList.toggle('responsive')}, false);
    window.onresize = () =>{if(window.innerWidth>760) mainnav.classList.remove('responsive');};

});