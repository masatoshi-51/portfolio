$(function(){
    // ボタンアニメーション
    $('.button-more').on('mouseover',function(){
        $(this).animate({
            opacity:0.5,
            marginLeft:20,
        },100);
    });
    $('.button-more').on('mouseout',function(){
        $(this).animate({
            opacity:1.0,
            marginLeft:0,
        },100);
    });
    

    // カルーセル
    $('.carousel').slick({
        autoplay:true,
        dots:true,
        infinite:true,
        autoplaySeed:5000,
        arrows:false,
    });

    // 送信ボタンクリック時の処理
    $('#submit').on('click',function(event){
        event.preventDefault();

        let result = inputCheck();

        // エラー判定とMessageを取得
        let error = result.error;
        let message = result.message;

        // エラーがなかったらフォーム送信
        if(error == false){
            alert('お問い合わせを送信しました。')
        } else{
            alert(message);
        }
    });

    // フォーカスが外れた時に入力チェック
    $('#name').blur(function(){
        inputCheck();
    });
    $('#furigana').blur(function(){
        inputCheck();
    });
    $('#email').blur(function(){
        inputCheck();
    });
    $('#tel').blur(function(){
        inputCheck();
    });
    $('#message').blur(function(){
        inputCheck();
    });
    $('#agree').click(function(){
        inputCheck();
    });

    // お問い合わせフォームのチェック
    function inputCheck(){
        let result;

        // エラーメッセージのテキスト
        let message = '';

        // エラーがなければfalse、エラーがあればtrue
        let error = false;

        // お名前のチェック
        if($('#name').val() ==''){
            // エラー
            $('#name').css('background-color','#f79999');
            error = true;
            message += 'お名前を入力してください。\n';
        } else{
            // エラーなし
            $('#name').css('background-color','#fafafa');
        }

        // フリガナのチェック
        if($('#furigana').val() ==''){
            // エラー
            $('#furigana').css('background-color','#f79999');
            error = true;
            message += 'フリガナを入力してください。\n';
        } else{
            // エラーなし
            $('#furigana').css('background-color','#fafafa');
        }

        // お問い合わせのチェック
        if($('#message').val() ==''){
            // エラー
            $('#message').css('background-color','#f79999');
            error = true;
            message += 'お問い合わせ内容を入力してください。\n';
        } else{
            // エラーなし
            $('#message').css('background-color','#fafafa');
        }

        // メールアドレスのチェック
        if($('#email').val() =='' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1){
            // エラー
            $('#email').css('background-color','#f79999');
            error = true;
            message += 'メールアドレスが未記入、または「＠」「.」が含まれておりません。\n';
        } else{
            // エラーなし
            $('#email').css('background-color','#fafafa');
        }

        // 電話番号チェック（未入力でもOK、入力している場合はー必要）
        if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1 ) {
            // エラー
            $('#tel').css('background-color','#f79999');
            error = true;
            message += '電話番号に「-」が含まれておりません。\n';
        } else{
            // エラーなし
            $('#tel').css('background-color','#fafafa');
        }

        // 個人情報のチェックボックスのチェック
        if($('#agree').prop('checked') == false) {
            error = true;
            message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
        }

        // エラーの有無で送信ボタン切り替え
        if(error == true) {
           $('#submit').attr('src','images/button-submit.png');
        } else {
            $('#submit').attr('src','images/button-submit-blue.png');
        }

        // オブジェクトでエラー判定とメッセージを返す
        result = {
            error: error,
            message:message
        }

        // 戻り値としてエラーがあるかどうかを返す
        return result;
    }
});
