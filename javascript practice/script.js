const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("para");
para.style.color = "red";
para.textContent = "Hey, I'm red!"

container.appendChild(para);

const subText = document.createElement("h3");
subText.classList.add("subText");
subText.style.color = "blue";
subText.textContent = "I'm a blue h3!";

container.appendChild(subText);

const article = document.createElement("div")
article.classList.add("article");
article.style.borderColor = "black";
article.style.backgroundColor = "pink";

container.appendChild(article);

const mainText = document.createElement("h1");
mainText.classList.add("mainText");
mainText.textContent = "I'm in a div"

article.appendChild(mainText);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });