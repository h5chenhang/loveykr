window.onload = function () {
    var password = "ykr0518"
    var alis = document.getElementsByTagName('li');
    var shadow = document.getElementById('shadow');
    var loveBtn = document.getElementsByClassName('love_btn')[0];
    var input = document.getElementsByClassName('loveInput')[0];
    var error = document.getElementsByClassName('error')[0];
    var completeLove = window.localStorage.getItem('completeLove');
    if (completeLove) {
        var arr = JSON.parse(completeLove);
    }else {
        var arr = [];
    }
    

    for (var i = 0; i < alis.length; i++) {
        alis[i].index = i;
        alis[i].onclick = function () {
            var password = window.localStorage.getItem('password');
            if (!password) {
                shadow.style.display = 'block';
            }else {
                if (this.className == 'done') {
                    this.className = ''
                    var num = arr.indexOf(this.index);
                    arr.splice(num, 1);
                    window.localStorage.setItem('completeLove', JSON.stringify(arr))
                }else {
                    this.className = "done";
                    arr.push(this.index);
                    window.localStorage.setItem('completeLove', JSON.stringify(arr))
                }
            }
        }
    }
    loveBtn.onclick = function () {
        if (input.value != password) {
            error.style.display = 'block';
        }else {
            shadow.style.display = 'none';
            window.localStorage.setItem('password', 'ykr0518');
        }
    }

    

    if (completeLove) {
        for (var j = 0; j < JSON.parse(completeLove).length; j++) {
            alis[JSON.parse(completeLove)[j]].className = 'done';
        }
    }
}