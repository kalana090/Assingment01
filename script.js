function bold() {
    
    document.execCommand('bold', false, null);
  }

  function underline() {
   
    document.execCommand('underline', false, null);
  }  

  function italic() {
  
    document.execCommand('italic', false, null);
  }  

  function changeTextColor() {
    var colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.addEventListener('input', function() {
      var selectedColor = colorPicker.value;
      document.execCommand('foreColor', false, selectedColor);
    });

    // Trigger the color picker dialog
     colorPicker.click();
  }

  function Left() {
    var editor = document.getElementById('editor');
    editor.style.textAlign = 'left';
  }
  function Center() {
      var editor = document.getElementById('editor');
      editor.style.textAlign = 'center';
    }
    function Right() {
      var editor = document.getElementById('editor');
      editor.style.textAlign = 'right';
    }

    function Justify() {
      var editor = document.getElementById('editor');
      editor.style.textAlign = 'justify';
    }


    var contenthistory = [];
var currentstep = 0;

contenthistory.push(document.getElementById('editor').innerHTML);

function undo() {
    if (currentstep >=0) {
        currentstep--;
        if (contenthistory[currentstep] !== undefined) {
            document.getElementById('editor').innerHTML = contenthistory[currentstep];
        }
    }
}

function redo() {
    if (currentstep < contenthistory.length - 1) {
        currentstep++;
        if (contenthistory[currentstep] !== undefined) {
            document.getElementById('editor').innerHTML = contenthistory[currentstep];
        }
    }
}

document.querySelectorAll('#editor').forEach(function (element) {
    element.addEventListener('input', function () {
        console.log('typing');
        currentstep++;
        if (currentstep < contenthistory.length) {
            contenthistory = contenthistory.slice(0, currentstep);
        }

        contenthistory.push(document.getElementById('editor').innerHTML);
    });
});
