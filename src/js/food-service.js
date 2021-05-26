import foods from '../menu.json'
import foodCardTpl from '../templetes/food-card.hbs'


const ulMenu = document.querySelector('.js-menu');
const cardMakeup = createCardMakeup(foods);

ulMenu.insertAdjacentHTML('beforeend' , cardMakeup)


function createCardMakeup(foods) {
    return foodCardTpl(foods);
}

