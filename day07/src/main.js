import $ from 'jquery'

import './css/index.css'

import 'bootstrap/dist/css/bootstrap.css'

$(function(){
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor','lightblue')
})