import Vue from "vue";

export function dateFilter (value) {
    if (value) {
        const d = new Date(value);
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'UTC'
        }).format(d);
    } else {
        return '';
    }  
}

Vue.filter('date', dateFilter);