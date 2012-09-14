<?php
/*
Plugin Name: SKin Switch
Description: Custom plugin to switch skins
Version: 1.0
Author: Bearded Avenger
Author URI: http://bearded-avenger.com
License: GPL2
*/

function skin_switch_init() {

	wp_register_style('skin-switch-css',plugins_url().'/skin-switch/style.css');
	wp_register_style('colorpicker-css',plugins_url().'/skin-switch/colorpicker/css/colorpicker.css');
	wp_register_style('colorpicker-layout',plugins_url().'/skin-switch/colorpicker/css/layout.css');

	wp_register_script('skin-switch-js',plugins_url().'/skin-switch/switch.js');
	wp_register_script('cookie-js',plugins_url().'/skin-switch/jquery.cookie.js');
	wp_register_script('colorpicker-js',plugins_url().'/skin-switch/colorpicker/js/colorpicker.js');
	wp_register_script('eye-js',plugins_url().'/skin-switch/colorpicker/js/eye.js');
	wp_register_script('utils-js',plugins_url().'/skin-switch/colorpicker/js/layout.js');
	wp_register_script('layout-js',plugins_url().'/skin-switch/colorpicker/js/utils.js');

	if (!is_admin()) { 

		wp_enqueue_style('skin-switch-css');
		wp_enqueue_style('colorpicker-css');
		wp_enqueue_style('colorpicker-layout');

		wp_enqueue_script('jquery');
		wp_enqueue_script('skin-switch-js');
		wp_enqueue_script('colorpicker-js');
		wp_enqueue_script('eye-js');
		wp_enqueue_script('utils-js');
		wp_enqueue_script('layout-js');
		wp_enqueue_script('cookie-js');
	}

}
add_action('init', 'skin_switch_init');