let ol = document.querySelector('ol');


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
    url5: "week5/index.html"
}

];

links.forEach(
    link =>{
        ol.innerHTML +=
        `<li><a href = "${link.url}">${link.label}</li>
        <li><a href = "${link.url2}">${link.label2}</li>
        <li><a href = "${link.url3}">${link.label3}</li>
        <li><a href = "${link.url4}">${link.label4}</li>
        <li><a href = "${link.url5}">${link.label5}</li>
        `
        
    }
);