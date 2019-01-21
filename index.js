/*! MIT (c) Luca Poldelmengo | https://github.com/pldg/xth */

/**
 * Xml-To-Html
 * Transform XML/XSLT to HTML
 * Compatible with IE 10+
 * @param {String} xmlPath Path to XML file
 * @param {String} xslPath Path to XSL file
 * @param {Function} callback Handle transformed HTML
 */
function xth(xmlPath, xslPath, callback) {
  var isIE = detectIE();

  loadDocument(xmlPath, function(xml) {
    loadDocument(xslPath, function(xsl) {
      var html = '<!DOCTYPE html>' + transformXml(xml, xsl);
      callback(html);
    });
  });

  /**
   * Parse XML/XSL files and transform to HTML
   * @param {Object} xml XML document
   * @param {Object} xsl XSL document
   * @returns {String} Transformed HTML
   */
  function transformXml(xml, xsl) {
    var html;

    if (isIE) {
      html = xml.transformNode(xsl);
    } else {
      var xsltProcessor = new XSLTProcessor();
      xsltProcessor.importStylesheet(xsl);
      var xmlDom = xsltProcessor.transformToDocument(xml);

      var serializer = new XMLSerializer();
      html = serializer.serializeToString(xmlDom.documentElement);
    }

    return html;
  }

  /**
   * Use XHR to load "document" type files (HTML/XML/XSL)
   * @param {String} filepath Path to document
   * @param {Function} callback Handle loaded document
   */
  function loadDocument(filepath, callback) {
    var xhr;

    if (isIE) xhr = new ActiveXObject('Microsoft.XMLHTTP');
    else xhr = new XMLHttpRequest();

    if (!xhr) {
      throw 'ERROR: No AJAX support';
    } else {
      xhr.open('GET', filepath);
      if (!isIE) xhr.responseType = 'document';
      xhr.send();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (isIE) callback(xhr.responseXML);
            else callback(xhr.response);
          } else {
            throw 'ERROR: Could not load: ' + filepath;
          }
        }
      }
    }
  }

  /**
   * Detect Internet Explorer
   * @returns {True|False} If it's IE return `true` otherwise return `false`
   * {@link https://stackoverflow.com/a/21712356/}
   */
  function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    if (msie > 0 || trident > 0) {
      return true;
    }
    return false;
  }
}

module.exports = xth;
