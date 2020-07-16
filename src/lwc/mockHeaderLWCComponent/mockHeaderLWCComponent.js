import { LightningElement, api,track } from 'lwc';

export default class mockHeaderLWCComponent extends LightningElement {
    @api buttonText;
    @track open


    openModal() {
      this.open = true;
    }
    closeModal(event){
        this.open = event.detail;
    }
}