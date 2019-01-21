var xml = './index.xml';
var xsl = './style.xsl';

xth(xml, xsl, function(html) {
  console.log(html);
  var iframe = document.querySelector('iframe');
  iframe.src = 'data:text/html;charset=UTF-8,' + encodeURIComponent(html);
});
