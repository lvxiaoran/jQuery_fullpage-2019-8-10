window.onload = function () {
    var cid = location.search;
    console.log(cid);
    let url = `http://127.0.0.1:3000/list${cid}`;
    console.log(url)
    fetch(url).then(data => data.json()).then(data => {
        console.log(data)
        var arr = data.data;
        console.log(arr);
        contentTags(arr);
    })

    function contentTags(conArr) {
        for (let i in conArr) {
            // console.log(conArr[i]);//书籍信息
            let p_li = document.createElement('li'); //创建li,并且制定内容

            let crr = conArr[i].online.split(" "); //把书籍对应的网址超链接字符串转换成数组crr
            let online; //定义最终超链接
            crr.forEach(function (item) { //遍历数组crr查找属于当当网的超链接
                if (item.includes('当当')) { //如果此数组项里的字符串含有“当当”，则进行截取
                    online = item.substring(item.indexOf(":") +
                        1); //将截取后的数据进行赋值
                }
            });

            p_li.innerHTML = `
                    <div class="p_img">
                        <a href="${online}" target="_blank">
                            <img src="${conArr[i].img}" alt="${conArr[i].sub1}">
                        </a>
                    </div>
                    <div class="p_con">
                        <p class="p_title"><a href="${online}">${conArr[i].title}</a></p>
                        <p class="p_catalog"><span>分类：</span>${conArr[i].catalog}</p>
                        <p class="p_tags"><span>标签：</span>${conArr[i].tags}</p>
                        <p class="p_sub2"><span>简介：</span>${conArr[i].sub2}</p>
                        <div class="p_reading">${conArr[i].reading}</div>
                        <div class="p_bytime"><span>出版时间：</span> ${conArr[i].bytime}</div>
                        <div class="p_cart"><a href="javascript:;">加入购物车</a></div>
                        <div class="p_collect"><a href="javascript:;">收藏</a></div>
                    </div> `;
            document.querySelector("#p_ul").appendChild(p_li);

        }
    }
}