
const btn = document.getElementById("btnTest");
btn.onclick = bubbleSort([9, 4, 5, 7, 8, 2 ,1])

function matrix() {
    let teste = JSON.stringify({});
    console.log(teste.length);
    let rowsCount = 5;
    let colsCount = 4;
    let d1 = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
    let z = 0;
    let d2 = [];
    for (j=0; j<rowsCount; j++){
        d2[j] = [colsCount]
    }

    for (i=0; i<colsCount;i++){
      if (i%2==0)  {
        for (j=0; j<rowsCount;j++){
            d2[j][i] = d1[z];
            z++;
        }
      } else {
        for (j=rowsCount-1; j>=0;j--){
            d2[j][i] = d1[z];
            z++;
          }
      }
    }
    console.log(d2);
  }

function bars () {
    let heights = [1,8,6,2,5,4,8,3,7];
    let max = 0;
    let height, width, volume, v1, v2;
    for (let i=0;i<heights.length;i++){
        for (let j=i+1;j<heights.length;j++){
            v1 = heights[i];
            v2 = heights[j];
            width = j-i;
            height = v1<v2 ? v1 : v2;
            volume = height * width;
            max = volume > max ? volume : max;   
        }
    }
    console.log(max);
}

function bubbleSort(array){
  
  for (let x=0; x<array.length; x++){
    for (let y=0; y<array.length; y++){
      if (array[y]  > array[y+1]){
        let max = array[y];
        let min = array[y+1];
        array[y] = min;
        array[y+1] = max;
      }      
    }
  }
  console.log(array)
}