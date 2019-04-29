

(function($){
    function init(){
        bindEvent();
    }
    init();
    
    // 行为处理
    function bindEvent(){
        $('.inp').on('keydown',function(e){
            if(e.keyCode === 13){
                $('.btn').trigger('click');
            }
        });
        $(".btn").on('click',function(e){
            var val = $('.inp').val();
            if(val){
                renderDom(val,'mine');
                getData(val);
            }
        });
    }
    // 获取数据
    function getData(val){
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:4800/api/chat',
            data: {
                text: val
            }, 
            success: function(data){
                var dataList = JSON.parse(data);
                console.log(dataList);
                renderDom(dataList.text,'rabit');
            }  
        })
    }
    // 数据渲染
    function renderDom(text,str){
        if(str == 'mine'){
            var dom = $('<div class="mine talk">\
                            <div class="avitor-mine"></div>\
                            <div class="text">'+text+'</div>\
                        </div>')
        }else{
            var dom = $('<div class="rabit talk">\
                            <div class="avitor avitor-rabit"></div>\
                            <div class="text">'+text+'</div>\
                    </div>')
        }
        $('.content-wrapper').append(dom);
        $('.inp').val('');
    }

})(jQuery)