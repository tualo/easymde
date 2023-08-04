<?php
namespace Tualo\Office\EasyMDE\Routes;
use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\Route As R;
use Tualo\Office\Basic\IRoute;


class Route implements IRoute{
    public static function register(){

        
        R::add('/easymdelib/(?P<file>[\/.\w\d\-]+)',function($matches){


            if (file_exists(dirname(__DIR__,2).'/lib/'.$matches['file'].'')){
                $path_parts = pathinfo(dirname(__DIR__,2).'/lib/'.$matches['file'].'');
                if ($path_parts['extension']=='js')   TualoApplication::contenttype('application/javascript');
                if ($path_parts['extension']=='css')   TualoApplication::contenttype('text/css');
                TualoApplication::etagFile((dirname(__DIR__,2).'/lib/'.$matches['file'].''));
            }else{
                TualoApplication::body("// hm, something is wrong ".$matches['file']);
            }
        },array('get','post'),false);

        R::add('/easymdejs/(?P<file>[\/.\w\d\-]+)',function($matches){
            if (file_exists(dirname(__DIR__,2).'/src/js/'.$matches['file'].'')){
                $path_parts = pathinfo(dirname(__DIR__,2).'/src/js/'.$matches['file'].'');
                if ($path_parts['extension']=='js')   TualoApplication::contenttype('application/javascript');
                if ($path_parts['extension']=='css')   TualoApplication::contenttype('text/css');
                TualoApplication::etagFile((dirname(__DIR__,2).'/src/js/'.$matches['file'].''));
            }else{
                TualoApplication::body("// hm, something is wrong ".$matches['file']);
            }
        },array('get','post'),false);


    }
}