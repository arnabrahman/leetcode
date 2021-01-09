/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    // for(let i=0;i<arr.length;i++){
    //     let has_elem=false;
    //     for(let j=0;j<pieces.length;j++){
    //         if(arr[i]!==pieces[j][0]) continue;
    //         has_elem=true;
    //         for(let k=1;k<pieces[j].length;k++){
    //             i+=1
    //             if(arr[i]!==pieces[j][k])return false;
    //         }
    //     }
    //     if(!has_elem) return false;
    // }
    // return true;
    let flatten_peices={};
    for(let i=0;i<pieces.length;i++){
        let previous=null;
        for(j=0;j<pieces[i].length;j++){
            flatten_peices[pieces[i][j]]=previous;
            previous=pieces[i][j];
        }
    }
    let previous=0;
    for(let i=0;i<arr.length;i++){
        if(flatten_peices[arr[i]]===undefined || (flatten_peices[arr[i]]!==null && flatten_peices[arr[i]]!==arr[i-1])) return false;
    }
    return true;
};

console.log(canFormArray(arr = [85], pieces = [[85]]));