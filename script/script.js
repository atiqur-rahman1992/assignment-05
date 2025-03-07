document.getElementById('button-01').addEventListener('click',function(){
    alert('board upated successfully');
    ////code for box1
   const h1Value =  document.getElementById('first-h1').innerText;
   const ch1Value = parseInt(h1Value)
  const upValue = ch1Value + 1;
  console.log(upValue);
  document.getElementById('first-h1').innerText = upValue
  const subValue =document.getElementById('sub-value').innerText;
  console.log(subValue);
  const csubValue = parseInt(subValue);
  const upValue1 = csubValue -1;
  document.getElementById('sub-value').innerText = upValue1;
  let button = document.getElementById('button-01');
  button.disabled = true;
  let now = new Date();
  
  const container = document.getElementById('add-text')
  const div = document.createElement('div');
  div.classList.add('bg-orange-200')
  div.innerHTML= `
  <p>You have Complete The Task Add Dark Mode at ${now} PMco</p>
  
  `
  container.appendChild(div);

  


})