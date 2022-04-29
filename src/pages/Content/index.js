import { printLine } from './modules/print';


console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');
printLine("Using the 'printLine' function from the Print Module");

window.addEventListener('load',(e) => {


const container = document.createElement("div");
    container.style.background = "#e4e4e4"
    container.style.position = "absolute"
    container.style.height = "768px"
    container.style.padding = "15px"
    container.style.width = "200px"
    container.style.top = "40px"
    container.style.right = "0"
    

function createButton (title, text) {
    const button = document.createElement("button");
    button.style.background = "#ffffff" 
    button.style.padding = "8px 20px" 
    button.style.margin = "5px" 
    button.style.display = "block" 
    button.style.border = "2px solid gray" 
    button.innerHTML = title

    button.addEventListener("mouseenter", () => {
            var el = document.querySelector('textarea');
            el.value = text
            el.style.height = "160px";
    });
    
    return button
}

const val = [
      {
        title: 'Prosba',
        text: 'У меня просьба!\n\nНапишите, пожалуйста, отзыв. Расскажите, что вы внесли предоплату, а я моментально отправил вам код и инструкцию по погашению.\n\nЧтобы люди понимали, как я работаю и тоже могли мне доверять🤝',
      },
      {

        title: 'U menya bivaet',
        text: 'У меня бывают разные аксессуары на консоль, часто выгодней оф цен, подпишитесь на меня, чтобы не потеряться)',
      },
      {
        title: 'link to google',
        text: 'https://google.com',
      },
      {
        title: 'link to google',
        text: 'https://google.com',
      },
      {
        title: 'link to google',
        text: 'https://google.com',
      },
      {
        title: 'link to google',
        text: 'https://google.com',
      },
      {
        title: 'link to google',
        text: 'https://google.com',
      },
      {
        title: 'link to google',
        text: 'https://google.com',
      },
      {
        title: 'link to google',
        text: 'https://google.com',
      },
    ]

val.map( val => { container.appendChild(createButton(val.title, val.text)) })

document.body.appendChild(container);


});



