const lists = document.querySelectorAll('.books') //вывод списков
const books = document.querySelectorAll('.book') //вывод книг одним списком элементов
const img = document.querySelector('body') // переменная для замены картинки заднего фона
const titleBooks = document.querySelectorAll('h2') //переменная для вывода заголовков книг в список элементов
const advRemove = document.querySelector('.adv') // переменная для выделения класса о рекламе

const uls = document.querySelectorAll('ul'); //переменная для хранения списка содержаний
const lis = document.querySelectorAll('li'); //переменная для списка пунктов всех содержаний
const newElement = document.createElement('li')



// п.1 Восстанавливаю порядок книг
lists[0].prepend(books[1]);
books[3].replaceWith(books[4]);
lists[0].append(books[3]);
lists[0].append(books[5]);
lists[0].append(books[2]);

// п.2 меняю картинку заднего фона

img.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"

// п. 3 исправляю заголовок 3-й книги
titleBooks[4].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>'

// п. 4 удаление рекламы
advRemove.classList.remove("adv");

//п. 5 редактирование содержания 2-й книги
uls[0].prepend(lis[8])
uls[0].prepend(lis[6])
uls[0].prepend(lis[3])
uls[0].prepend(lis[1])
uls[0].prepend(lis[0])

uls[0].append(lis[7])
uls[0].append(lis[9])
uls[0].append(lis[2])
uls[0].append(lis[10])

//п. 5 редактирование содержания 5-й книги
uls[5].prepend(lis[50])
uls[5].prepend(lis[49])
uls[5].prepend(lis[55])
uls[5].prepend(lis[47])
uls[5].prepend(lis[46])

uls[5].append(lis[51])
uls[5].append(lis[54])
uls[5].append(lis[56])

//п. 6 вставка новой главы в книгу 6 

newElement.textContent = 'Глава 8: За пределами ES6'
uls[2].append(newElement)
uls[2].append(lis[26])

//мусор
console.log(lists)
console.log(books)
console.log(img)
console.log(titleBooks)
console.log(advRemove)
console.log(uls)
console.log(lis)
console.log(newElement)