$(function () {
  // サイドメニュー開閉
  var sidemenuStatus = true;
  $('#toggle').click(function(){
    if(sidemenuStatus){
      $('#maincontent').css('margin-left','-160px');
      sidemenuStatus = false;
    }else{
      $('#maincontent').css('margin-left','0px');
      sidemenuStatus = true;
    }
  });

  // 製品メニュー開閉
  $('#mst_prd').click(function () {
    $('#prd-toggle').toggleClass("prd-open")
  })

})