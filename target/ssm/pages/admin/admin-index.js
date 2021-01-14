var script = document.createElement('script');
script.src = 'http://libs.baidu.com/jquery/2.1.4/jquery.min.js';
document.head.appendChild(script);


$(function() {
    // document.write("<script src='http://libs.baidu.com/jquery/2.1.4/jquery.min.js'></script>");
    $.ajax({
        method: 'get',
        url: '/test/testSkip',
        headers: {'token': localStorage.getItem('token')}
    }).then(function(resp) {
        let ret = resp.data
        if (ret.code == 'SUCCESS') {
            saveAdmin(ret.data)
        } else {
            console.log(ret)
            window.location.href = cookurl("/pages/admin/index.html")
        }
    }).catch(function(error) {
        console.log(error)
    })
})
