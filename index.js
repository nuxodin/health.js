var tests = [{
    name:'image without alt',
    elementError(el){
      if (el.tagName !== 'IMG') return;
      if (!el.getAttribute('alt')) return true;
    }
  },{
    name:'input without label',
    elementError(el){
      if (!el.form) return;
      if (!el.labels.length) return true;
    }
},];

onElement('*',el=>{
  for (let test of tests) {
    if (test.elementError(el)) {
      console.log(test.name, el);
    }
  }
})
