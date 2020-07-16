import LOGO from '@salesforce/resourceUrl/finally';
import {LightningElement, track, api} from 'lwc';
import login from '@salesforce/apex/mockHeaderController.login';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class mockHeaderLWCComponent extends LightningElement {

    finallyLogo = LOGO;
    @api
    open = false;
    @track
    password = "";
    @track
    userName = "";
    @track
    errorMessage;
    @track
    showError = false;

    closeModal() {
        const selectedEvent = new CustomEvent("valuechange", {
            detail: this.open
        });
        this.dispatchEvent(selectedEvent);
    }
    handleFormInputChange(event) {
        if (event.target.name == 'user') {
            this.userName = event.target.value;
        } else if (event.target.name == 'pass') {
            this.password = event.target.value;
        }
    }
    loginToCommunity() {
        login({
            username: this.userName,
            password: this.password,
            startUrl: null
        }).then(data => {
            window.location.href = data
        }).catch(err => {
            console.log(err);
            this.showError = true;
            this.errorMessage = err.body.message;
        })
    }
    handleError(){
        this.showError = false;
    }
}