export  default {
  ModalScroll:function(bodyCls) {
    let scrollTop, doc, reg;
    let bodyClassName = "";
    let bodyEle = document.body;
    return {
      afterOpen: function() {
        doc = document.documentElement.scrollTop ? document.documentElement : bodyEle;
        scrollTop = doc.scrollTop;
        if(bodyEle.classList){
          bodyEle.classList.add(bodyCls)
        }else{
          bodyEle.className += " " + bodyCls;
        }
        bodyEle.style.top = -scrollTop + 'px';
        bodyClassName = bodyEle.className;
      },
      beforeClose: function() {
        if(bodyEle.classList){
          bodyEle.classList.remove(bodyCls)
        }else{
          reg = new RegExp("\\b" + bodyCls + "\\b", "g", "gi");
          if(reg.test(bodyClassName)){
            bodyClassName = bodyClassName.replace(reg, "");
            bodyEle.className = bodyClassName;
          }
        }
        bodyEle.style.top = "";
        doc.scrollTop = scrollTop;
      }
    }
  }
}
