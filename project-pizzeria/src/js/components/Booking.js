import { AmountWidget } from "./AmountWidget";
import { select } from "../settings";

export class Booking {
  constructor(){
    const thisBooking = this;
    thisBooking.render(bookingContainer);
    thisBooking.initWidget();
  }
  render(bookingContainer) {
    thisBooking = this;
    const generatedHTML = templates.bookingWidget();
    const thisBooking.dom = {};
    thisBooking.dom.wrapper = bookingContainer;
    thisBooking.dom.wrapper = generatedHTML;
    const thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    const thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.thisBooking.hoursAmount);
  }
  initWidget() {
    thisBooking = this;
    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
  }
}