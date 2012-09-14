<?php
/*
Plugin Name: SKin Switch
Description: Custom plugin to switch skins
Version: 1.0
Author: Bearded Avenger
Author URI: http://bearded-avenger.com
License: GPL2
*/

class SkinSwitch {

	function __construct() {
	
		add_action('wp_print_scripts', array( &$this, 'skin_switch' ) );
	}

	function skin_switch() {

		// get folder name
		$folder = sprintf( '%s/%s/', plugins_url(), basename( dirname(__FILE__) ) );

		// register css
		wp_register_style('skin-switch-css', $folder . 'style.css');
		wp_register_style('colorpicker-css', $folder . 'colorpicker/css/colorpicker.css');
		wp_register_style('colorpicker-layout', $folder . 'colorpicker/css/layout.css');

		// register js
		wp_register_script('skin-switch-js', $folder . 'switch.js');
		wp_register_script('cookie-js', $folder . 'jquery.cookie.js');
		wp_register_script('colorpicker-js', $folder . 'colorpicker/js/colorpicker.js');
		wp_register_script('eye-js', $folder . 'colorpicker/js/eye.js');
		wp_register_script('utils-js', $folder . 'colorpicker/js/layout.js');
		wp_register_script('layout-js', $folder . 'colorpicker/js/utils.js');

		// enqueue css
		wp_enqueue_style('skin-switch-css');
		wp_enqueue_style('colorpicker-css');
		wp_enqueue_style('colorpicker-layout');

		// enqueue js
		wp_enqueue_script('jquery');
		wp_enqueue_script('skin-switch-js');
		wp_enqueue_script('colorpicker-js');
		wp_enqueue_script('eye-js');
		wp_enqueue_script('utils-js');
		wp_enqueue_script('layout-js');
		wp_enqueue_script('cookie-js');
		
		// send theme folder to js script.
		$array = array( 'path' => sprintf( '/wp-content/themes/%s', basename( get_stylesheet_directory() ) ) );
		wp_localize_script( 'skin-switch-js', 'skin', $array );
	}
}

new SkinSwitch;