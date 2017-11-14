import $ from 'jquery';
export default class Ellipsis {
  
    init(container = document.body) {
      let components = $('div[data-ellipsis]');
      this.process(components);
    }
    
    process(components) {
      components.map( (index, component) => {
        this.collapse(component);
      });
    }
    
    collapse(component, trimText = null, completeText = null) {
      let maxChar  = parseInt($(component).attr('data-max-char'));
      let fullText = completeText? completeText : component.innerText;
      if (!trimText) {
        trimText = fullText.slice(0, maxChar);
      }
      let trimDownInnerHtml = trimText; 
      const readMoreHTML = ` <button class="expand" 
      style="border: none;background: none;color: blue;padding: 0;cursor: pointer;">...Read More</button>`;
      trimDownInnerHtml += readMoreHTML; 
      component.innerHTML = trimDownInnerHtml;
      this.bindReadMoreEvent(component, trimText, fullText);
    }

    expand(component, trimText, fullText) {
      const readLessHTML = ` <button class="collapse" 
      style="border: none;background: none;color: blue;padding: 0;cursor: pointer;">Read Less</button>`;
      component.innerHTML = fullText + readLessHTML;
      this.bindReadLessEvent(component, trimText, fullText);
    }

    bindReadMoreEvent(component, trimText, fullText) {
      $(component).find('.expand').off('click').on('click', (event) => {
        event.stopPropagation();
        this.expand(component, trimText, fullText);
      });
    }

    bindReadLessEvent(component, trimText, completeText) {
      $(component).find('.collapse').off('click').on('click', (event) => {
        event.stopPropagation();
        this.collapse(component, trimText, completeText);
      });
    }
  
  }
  
  let elp = new Ellipsis();