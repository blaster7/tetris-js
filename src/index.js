import './index.html';
import './index.scss';
import Game from './modules/game';
import View from './modules/view';
import Controller from './modules/controller';

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 480, 640, 20, 10);
const controller = new Controller(game, view);

window.game = game;
window.view = view;
window.controller = controller;
