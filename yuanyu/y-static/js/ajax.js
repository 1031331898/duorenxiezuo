/*
 * AJAX请求
 * @param  {string}  url            请求的URL地址
 * @param  {function}  callback     回调函数
 * @param  {string}  type           请求方式（GET或POST）
 * @param  {string}  data           POST方式发送的数据
 */
function ajax(url, callback, type = "GET", data = "") {
    //1.初始化XMLHttp对象写死
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { //IE5,6兼容
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2声明请求方式 请求地址
    if (type == "GET") {
        xhr.open("GET", url, true)
        xhr.send();
    } else {
        xhr.open("POST", url, true)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //3发送请求

        xhr.send(data);
    }


    //4.监听ajax状态，获取服务器端的响应数据
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //console.log(xhr.responseText);
            //将返回的JSON字符串转换为JSON对象
            var data = JSON.parse(xhr.responseText);
            //接收到数据后操作dom，将结果显示在页面上
            callback(data)
        }
    }
}