import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesController.js';

const quakesController = new QuakesController("#quakeList");
quakesController.init();
