<?php

namespace Tualo\Office\EasyMDE\Middlewares;
use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\IMiddleware;

class Middleware implements IMiddleware{
    public static function register(){
        TualoApplication::use('easymde',function(){
            try{
                TualoApplication::javascript('easymde_loader', './easymdelib/easymde.min.js',[],-10000);
                TualoApplication::stylesheet( './easymdelib/easymde.min.css',10000);
            }catch(\Exception $e){
                TualoApplication::set('maintanceMode','on');
                TualoApplication::addError($e->getMessage());
            }
        },-100); // should be one of the last
    }
}