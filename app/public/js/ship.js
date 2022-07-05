$(function () {
    // 製品名のIDでAjaxでGET通信でphpファイル読み込んで情報取得
    $.ajax({
        'url': 'products.php',
        'type': 'GET',
        'dataType': 'json'
      }).then(function(products) {
        // 製品名を配列で取得

      }).done(function(){
        // 配列からselectを作成
      }).fail(function(j,t,e) {
        console.error(e);
      });
    // その後自動で取得したデータで値入力 下記参考
    // https://teratail.com/questions/340150
    $("#select_search").change(function(){
        var prdName = $(this).val();
        var prdInfo = Object.entries(prdName).filter( item => item['name'] === "100点");
        // 製品情報自動入力
      });
    
    // テーブルの追加
    var shipTable = $('#ship-table');

    $('#addRow').click(function () {
        var html = '<tr><td>' + $('#prdId').val() +
            '</td><td>' + $('#select_search').val() +
            '</td><td>' + $('#inCount').val() +
            '</td><td>' + $('#box').val() +
            '</td><td>' + $('#fraction').val() +
            '</td><td>' + $('#app').val() +
            '</td><td>' + $('#volume').val() +
            '</td><td><button class="btn btn-primary delRow">削除</button></td></tr>'
        shipTable.append(html);
        // 入力行からにする
        $('#prdId').val("");
        $('#inCount').val("");
        $('#box').val("");  
        $('#fraction').val("");
        $('#app').val("");
        $('#volume').val("");
    });

    // テーブル削除
    $(document).on('click', '.delRow', function() {
        $(this).parents('tr').remove();
    });

    // テーブルデータをJSON化してPHPにPOST(ID送りたい)
    $('#print').click(function () {
        console.log(shipTable.tableToJSON());
        alert(JSON.stringify(table));
    });

    // 商品検索機能
    $('#select_search').select2();

})
