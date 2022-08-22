$(function () {
    if (location.pathname == '/snavi/sellings'){
        addbutton = '<button id="cusBtnListSellings" type="button" class="sc-VigVT zMuoF" style="margin-top:10px">詳細表示</button>'
        $('.TableController').append(addbutton);    
    }else{
        addbutton = '<button id="cusBtnList" type="button" class="sc-VigVT zMuoF">詳細表示</button>'
        $('.sc-kGXeez').eq(2).append(addbutton);    
    }
    console.log(location.pathname);
    
    $('#cusBtnList').click(function () {
        $('ul').filter('.sc-cJSrbW').each(async function (i, elUl) {
            let scode = $(elUl).find('li').eq(1).find('.sc-iELTvK').text().replace('管理番号', '').trim();
            //let aucId = $(elUl).find('li').eq(1).find('.sc-feJyhm').text().replace('オークションID', '').trim();
            $(elUl).find('li').eq(7).remove();
            if (i != 0){
                $(elUl).append(
                    `<li><img src='${conf.imageUrl}/${scode}.jpg' width=120>
                        <p style="font-size:13px;margin:5px">
                            <a href="${conf.codeInfoUrl}?scode=${scode}" target="_blank">ポータルへ</a>
                        </p>
                    </li>`
                );
                const response = await fetch(`${conf.codeInfoApiUrl}?scode=${scode}`);
                const data = await response.json();   
                //console.log(data,addWatch,addPv); 
                $(elUl).find('li').eq(3).find('div').html(`${data.watch}`);
                $(elUl).find('li').eq(4).find('div').html(`${data.lastPv}<br/>(T:${data.totalPv})`);     
            }else{
                $(elUl).append("<li></li>");
                $(elUl).find('li').eq(3).find('div').text("ウォッチ"); 
            }         
        });
    });

    $('#cusBtnListSellings').click(function () {
        $('ul').filter('.Table__line').each(async function (i, elUl) {
            let scode = $(elUl).find('li').eq(1).find('.Table__manageId').text().replace('管理番号', '').trim();
            $(elUl).find('li').eq(10).remove();
            if (i != 0){
                $(elUl).append(
                    `<li><img src='${conf.imageUrl}/${scode}.jpg' width=120 style="margin:20px">
                        <p style="font-size:13px;margin:5px">
                            <a href="${conf.codeInfoUrl}?scode=${scode}" target="_blank">ポータルへ</a>
                        </p>
                    </li>`
                );
            }else{
                $(elUl).append("<li></li>");
            }         
        });
    });

});
