let view, keys;

keys = document.getElementsByClassName('button');
view = document.getElementById('display');

key = (num) => {
     view.value += num;
     
}

cancel = () => {
    view.value = '';
}

del = () => {
    view.value = view.value.slice(0,-1);
}

cal = () => {
   try {
    view.value = eval(view.value); 
   } catch {
       
    view.value = null;
   }
}

