import {Developer} from "./another";
import $ from 'jquery'
const svyat = new Developer('Святослав', 'devName');
svyat.showName();
$('#showTime').on('click', () => {
    $('#time').text(new Date());
} );