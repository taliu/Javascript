function crossDomainPost(url, data, callback) {
    var formId = new Date().getTime();
    var html = '<iframe id="tl_iframe{formId}"  name="tl_iframe{formId}"  width="0" height="0" style=" display:none"></iframe> <form target="tl_iframe{formId}" id="tl_form{formId}" action="{url}" method="post" style="display:none"> </form>';
    html = stringFormat(html, { formId: formId, url: url });
    $("body").append(html);
    var $form = $("#tl_form" + formId);
    var $iframe = $("#tl_iframe" + formId);
    if (typeof callback === 'function') {
        $iframe.on('load', function () {
            callback();
            $form.remove();
            $iframe.remove();
        });
    }
    for (var name in data) {
        var $c = $('<input type="hidden" name="' + name + '"/>');
        $c.val(data[name]);
        $form.append($c);
    }
    $form.submit();
}
function stringFormat(a, c) { var b, d = arguments, e = [], f = 0; b = 2 == d.length && d[1] && "object" == typeof d[1] ? d[1] : Array.prototype.slice.call(d, 1); for (e[f++] in b); return e.length ? d[0].replace(RegExp("\\{" + e.join("\\}|\\{") + "\\}", "img"), function (a) { return b[a.slice(1, -1)] }) : d[0] }
