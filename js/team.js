function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // 隱藏所有區塊
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // 移除所有標籤的活動狀態
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // 顯示所選區塊並設置標籤為活動狀態
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // 預設顯示第一個區塊
  document.getElementById("tab1").style.display = "block";
  