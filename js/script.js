import ScrollSuave from './modules/scroll-suave';
import initAnimacaoScroll from './modules/scroll-animacao';
import Accordion from './modules/accordion';
import initTabNav from './modules/tabnav';
import initModal from './modules/modal';
import initTooltip from './modules/tooltip';
import initDropdownMenu from './modules/dropdown-menu';
import initMenuMobile from './modules/menu-mobile';
import initFuncionamento from './modules/funcionamento';
import initFetchAnimais from './modules/fetch-animais';
import initFetchBitcoin from './modules/fetch-bitcoin';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
