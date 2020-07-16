import LOGO from '@salesforce/resourceUrl/finally';
import {LightningElement, track, api} from 'lwc';
import login from '@salesforce/apex/mockHeaderController.login';

export default class mockHeaderLWCComponent extends LightningElement {

    finallyLogo = LOGO;
    @api
    open = false;
    @track
    password = "";
    @track
    userName = "";

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
            startUrl: '/s/login'

        }).then(data =>{
            window.location.href = data
        }).catch(err=>{
            console.log(err);
        })


    }
}