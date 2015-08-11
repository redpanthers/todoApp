module.exports = function(grunt){
    //JS/CoffeeScript
    var jquery_js_path ='bower_components/jquery/dist/jquery.min.js';
    var bootstrap_js_path ='bower_components/bootstrap/dist/js/bootstrap.min.js';
    var angular_js_path = 'bower_components/angular/angular.min.js';
    var angular_ui_router_js_path = 'bower_components/angular-ui-router/release/angular-ui-router.min.js';
    var angular_devise_js_path = 'bower_components/angular-devise/lib/devise-min.js';
    var angular_file_upload_js_path = 'bower_components/ng-file-upload/ng-file-upload-all.min.js';
    var angular_to_array_js_path   = 'bower_components/angular-toArrayFilter/toArrayFilter.js';
    //CSS/SASS


    grunt.initConfig({
        concat:{
            options:{
                seperator: ';'
            },
            js:{
                src:[jquery_js_path,bootstrap_js_path,angular_js_path,angular_ui_router_js_path,angular_devise_js_path, angular_file_upload_js_path,
                  angular_to_array_js_path],
                dest:'lib/dependencies.js'
            }
        },
        uglify:{
            my_target:{
                files:{
                    'main.min.js':['lib/dependencies.js']
                }
            }
        },
        copy:{
            main:{
                files:[
                    {
                        src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
                        dest: '../stylesheets/',
                        filter: 'isFile'
                    }
                ]
            }
        }
    })


    //Load Javascript related file
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Load sass/css related files
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //Load watch and clean
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-clean');
    //Copy files
    grunt.loadNpmTasks('grunt-contrib-copy');



};
