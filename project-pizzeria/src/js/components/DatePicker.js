import { utils } from '../utils.js';
export class DatePicker extends BaseWidget{
  constructor(wrapper){
    super(wrapper, utils.dateToStr(new Date()));
    const thisWidget = this;
       
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);
    thisWidget.initPlugin();
  }

  initPlugin(){

    const thisWidget = this;
    thisWidget.minDate = new Date(thisWidget.value);
    thisWidget.maxDate = utils.addDays(thisWidget.minDate, ); 
    
    flatpickr(thisWidget.dom.input, {
        defaultDate: thisWidget.minDate,
        minDate = thisWidget.minDate,
        maxDate = thisWidget.maxDate,
        disable: [
        function (date) {
            // return true to disable
            return (date.getDay() === 0 || date.getDay() === 6);
        },
            
          ],
          locale: {
            firstDayOfWeek: 2 // start week on Thursday
          },
          onChange: function (selectedDates, dateStr, instance) {
        
          },
          onOpen: [
            function (dateStr) {
                //...
            },
            function (dateStr) {
                //...
            }
          ],
          onClose: function (dateStr) {
            // ...
          }

      });
  }

  parseValue(value) {
    return value;
  }

  isValid(value) {
    return true;
  }
  renderValue(){
    const thisWidget = this;
    thisWidget.dom.input.value = thisWidget.value;
  }
}