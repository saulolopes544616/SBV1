/*
query é pesquise o seletor dentro do header nav e retorna a informação que lá esta
 
 */
const nav = document.querySelector('#header nav')
/*pesquise e pegue todos "ALL" seletores que contenham nav . toggle */

const icons = document.querySelectorAll('nav .toggle')

/*função para inserir a mensagem do show 
container show 
ou 
container
*/
for (const element of icons) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/*vou pegar todos os links "a"*
e para cada link vou adicionar um evento  de voltar para o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
