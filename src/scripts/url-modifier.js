// File: src/scripts/url-modifier.js
import $ from "jquery";

$(document).ready(function ($) {
  URLModifier("tid"); // replace VTID to any key
});

function URLModifier(customKey) {
  var searchKeyWord = "utm_campaign"; // replace utm_campaign to any key you want to search for
  var searchKeyWordUrl = getParamFromURL(searchKeyWord);
  if (searchKeyWordUrl) {
    $("a").each(function () {
      var currentLinkUrl = $(this).attr("href");
      if (typeof currentLinkUrl !== "undefined") {
        // Anchor Links
        var modifiedUrl =
          currentLinkUrl +
          (currentLinkUrl.match(/\?/) ? "&" : "?") +
          customKey +
          "=" +
          searchKeyWordUrl;
        $(this).attr("href", modifiedUrl);
      } else {
        // Image Links
        var currentImgLinkUrl = $(this).attr("data-imagelink");
        var modifiedImgUrl =
          currentImgLinkUrl +
          (currentImgLinkUrl.match(/\?/) ? "&" : "?") +
          customKey +
          "=" +
          searchKeyWordUrl;
        $(this).attr("data-imagelink", modifiedImgUrl);
      }
    });
  }
}

function getParamFromURL(t) {
  var a = new RegExp("[?&]" + t + "=([^&#]*)").exec(window.location.href);
  return null === a ? null : a[1];
}
