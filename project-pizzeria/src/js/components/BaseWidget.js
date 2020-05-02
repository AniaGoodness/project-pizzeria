/* eslint-disable indent */
export class BaseWidget{
  constructor(wrapperElement, initialValue){     
    const thisWidget = this;

    thisWidget.dom = {};
    thisWidget.dom.wrapper = wrapperElement;

    thisWidget.correctValue = initialValue;
  }
  get value(){
    const thisWidget = this;

    return thisWidget.correctValue;

  }
  set value(value) {
    const thisWidget = this;

    const newValue = thisWidget.parseValue(value);
    /* TODO: Add validation */
    if (newValue != thisWidget.correctValue && thisWidget.isValid(newValue)) {
      thisWidget.correctValue = newValue;
      thisWidget.announce();
    }
    thisWidget.renederValue();
  }
  setValue(value){
      const thisWidget = this;

      thisWidget.value = value;
  }
  parsevalue(value) {
    return parseInt(value);
  }
  isValid(value) {
    return !isNaN(value);

  }
  renederValue() {
    const thisWidget = this;
    thisWidget.dom.wrapper.innerHTM = thisWidget.value;
  }
  announce() {
    const thisWidget = this;

    const event = new CustomEvent('updated', {
      bubbles: true
    });
    thisWidget.dom.wrapper.dispatchEvent(event);
  }
}
