export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  export function getLast() {
    let x = ' is okay'
    return x;
  }
  
  export function taskNext() {
    var combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
