<?php
/**
 * Plugin Name: visual editor
 * Plugin URI:  Plugin URL Link
 * Author:      Plugin Author Name
 * Author URI:  Plugin Author Link
 * Description: This plugin make for pratice wich is "visual editor".
 * Version:     0.1.0
 * License:     GPL-2.0+
 * License URL: http://www.gnu.org/licenses/gpl-2.0.txt
 * text-domain:vedt
 */
function plugin_file_function(){
    load_plugin_textdomain('vedt', false, dirname(__FILE__) . "/lng");
}
add_action('plugins_loaded', 'plugin_file_function');
function tmcd_mce_external_plugins($plugins){
    $plugins['tmcd_plugin'] = plugin_dir_url(__FILE__)."/asset/js/main.js";
    return $plugins;
}
function tmcd_mce_buttons($buttons){
    $buttons[] = 'tmcd_button_one';
    $buttons[] = 'tmcd_button_two';
    $buttons[] = 'dp_manue';
    $buttons[] = 'Form_btn';
    return $buttons;
}

function tmcd_admin_assets(){
    add_filter('mce_external_plugins','tmcd_mce_external_plugins');
    add_filter('mce_buttons','tmcd_mce_buttons');
}
add_action('admin_init','tmcd_admin_assets');






?>