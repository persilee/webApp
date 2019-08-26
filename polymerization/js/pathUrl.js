// 请求接口地址

// var urlPath = 'http://192.168.0.5:8080/'
// var urlPath = 'http://192.168.0.172:9288/app/'; // 测试环境 1
// var payPath = 'http://192.168.0.172:9488/pay/'; //测试环境 1
/*****************************************************************/
// var urlPath = 'http://192.168.0.173:9288/app/'; // 测试环境 2
// var payPath = 'http://192.168.0.173:9488/pay/'; //测试环境 2
/*****************************************************************/
var urlPath = 'http://api.worepay.com/app/';   //生产环境
var payPath = 'http://api_pay.worepay.com/pay/';  //生产环境
/******************************************************************/
// var merchId = '17727581813';//getQueryVariable('merchId');  //18603047640  17727581813  // 生产号  15811813135
// var payMerchId = '17727581813'; //getQueryVariable('merchId');
//验证码
var yzmUrl = 'http://192.168.100.156:45607/';
var version = '1.2';


/**
 * 获取参数
 **/
// var merchId = getQueryVariable('merchId');
// var payMerchId = getQueryVariable('merchId');
function getQueryVariable(variable) {
        var query = decodeURI(window.location.search.substring(1));
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return ('');
    }