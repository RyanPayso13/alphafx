import Vue from "vue";

export function currencyFilter (value) {
    if (value) {
        return new Intl.NumberFormat('en-EN', { 
            style: 'currency', 
            'currency': 'GBP'
        }).format(value);   
    } else {
        return '';
    }
}

Vue.filter('currency', currencyFilter);