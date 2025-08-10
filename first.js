document.getElementById('menuToggle').addEventListener('click', function(){
  const nav = document.getElementById('mainNav');
  if(nav.style.display === 'flex'){ nav.style.display = ''; }
  else{ nav.style.display = 'flex'; nav.style.flexDirection = 'column'; nav.style.gap = '12px'; }
});

document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Заявка отправлена (демо). Подключите обработчик на сервере или API.');
  this.reset();
});