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