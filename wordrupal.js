(function ($) {
  Drupal.behaviors.interact = {
    attach: function (context, settings) {
$('#section-footer').html('<ul class="wordrupal-top-menu"><li id="icon1"><li><a href="node">My Sites</a></li><li><a href="node">Wordpress</a></li><li id="icon2"><a href="node">\t 12</a></li><li  id="icon3"><a href="admin/content/comment"></a></li><li id="icon4"><a href="node/add">\t New </a></li><li style="float:right; margin-right:45px; "><a href="user">Howdy, Admin <img style="margin-bottom:5px;" alt="" src="gravatar.png" ></a></li></ul><img id="homeicon" src="homeicon.png" style="position:absolute; top:28px; left:0px; float:left;"><ul class="wordrupal-first-menu"><li><a href="node">Home</a></li><li><a href="admin/content">My Sites</a></li><li><a href="#">Akismet Stats</a></li></ul><ul class="wordrupal-second-menu"><li><div id="icon5"></div>Posts</a></li><li><div id="icon6"></div><a href="admin/config/media">Media</a></li><li><div id="icon7"></div><a href="admin/config/search/path">Links</a></li><li><div id="icon8"></div><a href="all-sessions">Pages</a></li><li><div id="icon9"></div><a href="admin/content/comment">Comments</a></li><li><div id="icon10"></div><a href="admin/appearance">Appearance</a></li><li><div id="icon11"></div><a href="admin/modules">Plugins</a></li><li><div id="icon12"></div><a href="admin/people">Users</a></li><li><div id="icon13"></div><a href="admin/structure">Tools</a></li><li><div id="icon14"></div><a href="admin/config">Settings</a></li><li style="height:200px;"></li></ul>');
$('#section-content').css('margin-left', '140px');
$('.site-name').css('margin-left', '140px');
$("a:contains('Drupal Camp')").html('WORDPRESS CAMP ANTARTICA');
 }
  }
 })(jQuery);