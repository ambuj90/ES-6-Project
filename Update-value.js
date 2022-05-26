<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<style type="text/css">
		p , h2{
           font-family: 'helvetica neue', helvetica, sans-serif;
           letter-spacing: 1px;
           text-transform: uppercase;
           text-align: center;
           border: 2px solid rgba(0,0,200,0.6);
           background: rgba(0,0,200,0.3);
           color: rgba(0,0,200,0.6);
           box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
           border-radius: 10px;
           padding: 3px 10px;
           display: inline-block;
           cursor: pointer;
         }
	</style>
</head>

<body>



<p>Player 1: Chris</p><br>
<h2>Enter your Name: Ambuj</h2>

 <button>Click me</button>

 <button class = "submit" onclick="createParagraph1()">Click me!</button>

<script type="text/javascript">
	
	const para = document.querySelector('p');

    para.addEventListener('click', updateName);

      function updateName() {
        const name = prompt('Enter a new name');
        para.textContent = `Player 1: ${name}`;
      }
    
    const head = document.querySelector('h2');

    head.addEventListener('click', reName);

      function reName(){
      	const last = prompt('Enter a new name');
      	head.textContent = `Enter your Name: ${last}`
      }



document.addEventListener('DOMContentLoaded', () => {
  function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }

  // const buttons = document.querySelectorAll('button');

  // for (const button of buttons) {
  //   button.addEventListener('click', createParagraph);
  // }

  const buttons = document.querySelector('button');
  buttons.addEventListener('click', createParagraph);
});


//inline script

function createParagraph1() {
  const para1 = document.createElement('p');
  para1.textContent = 'You clicked the button now!';
  document.body.appendChild(para1);
}

</script>
</body>
</html>
