/* eslint-disable linebreak-style */
import { select, templates } from '../settings.js';
import { AmountWidget } from './AmountWidget.js';
import { utils } from '../utils.js';
import { DatePicker } from './DatePicker.js';
export class Booking {
  constructor(element){
    const thisBooking = this;
    thisBooking.render(element);
    thisBooking.initWidget();
  }
  render(element) {
    const thisBooking = this;
    const generatedHTML = templates.bookingWidget();
    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper = utils.createDOMFromHTML(generatedHTML);
    thisBooking.dom.datePicker = thisBooking.dom.datePicker.querySelector(select.widgets.datePicker.wrapper);

    element.appendChild(thisBooking.dom.wrapper);

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
  }
  initWidget() {
    const thisBooking = this;
    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking. datePicker = new DatePicker(thisBooking.datePicker);
  }
}