import { browser, by, element } from 'protractor';

export class CounterCompPage {
    navigateTo() {
      return browser.get('/');
    }
    
      getNumber() {
        return element(by.css('app-counter h1')).getText();
      }
    
      getIncrementButton() {
        return element(by.cssContainingText('button', 'Increase'));
      }
    
      getDecrementButton() {
        return element(by.cssContainingText('button', 'Decrease'));
      }
    }