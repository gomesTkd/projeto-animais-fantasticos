import ScrollSuave from './modules/scroll-suave';
import ScrollAnima from './modules/scroll-anima';
import Accordion from './modules/accordion';
import TabNav from './modules/tabnav';
import Modal from './modules/modal';
import Tooltip from './modules/tooltip';
import DropdownMenu from './modules/dropdown-menu';
import MenuMobile from './modules/menu-mobile';
import initFuncionamento from './modules/funcionamento';
import fetchAnimais from './modules/fetch-animais';
import fetchBitcoin from './modules/fetch-bitcoin';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initFuncionamento();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
