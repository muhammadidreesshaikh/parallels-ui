function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// alert('hello idrees');

function clickFun(){
    alert('hello idrees');
}

function changeColor(){
    document.getElementById('changecolor').style.color = 'red';
}

function add(a, b){
    var x = a+b ;
    console.log(x);
}   

function changeRed(){
    document.getElementById('redClass').classList.add('sampleIdreesClass');
}

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(containerPercentage, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2300,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#ff0000', width: 1 },
    to: { color: '#00c700', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value+'%');
      }
  
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';
  
  bar.animate(1.0);  // Number from 0.0 to 1.0


  var bar1 = new ProgressBar.Circle(containerPercentage1, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2300,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#ff0000', width: 1 },
    to: { color: '#00c700', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value+'%');
      }
  
    }
  });
  bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar1.text.style.fontSize = '2rem';
  
  bar1.animate(1.0);  // Number from 0.0 to 1.0

  var bar2 = new ProgressBar.Circle(containerPercentage2, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2300,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#ff0000', width: 1 },
    to: { color: '#00c700', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value+'%');
      }
  
    }
  });
  bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar2.text.style.fontSize = '2rem';
  
  bar2.animate(1.0);  // Number from 0.0 to 1.0


  var bar3 = new ProgressBar.Circle(containerPercentage3, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2300,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#ff0000', width: 1 },
    to: { color: '#00c700', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value+'%');
      }
  
    }
  });
  bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar3.text.style.fontSize = '2rem';
  
  bar3.animate(1.0);  // Number from 0.0 to 1.0