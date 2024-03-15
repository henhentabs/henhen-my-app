document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let ul = document.getElementById('searchList');
    let li = ul.getElementsByTagName('li');
  
    for (let i = 0; i < li.length; i++) {
      let item = li[i].textContent || li[i].innerText;
      if (item.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  });
  
  document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('searchInput').value = '';
    let ul = document.getElementById('searchList');
    let li = ul.getElementsByTagName('li');
  
    for (let i = 0; i < li.length; i++) {
      li[i].style.display = '';
    }
  });
  