function calculatePlanes(arr) {
    var plane = 0;
    var i = 0;
    while (i != arr.length - 1) {
        console.log("element", arr[i])
        if (arr[i] == 0) {
            return -1;
        }
        if (arr[i] > 0) {
            var j = i + arr[i];
            if (arr[j] == 0 && i != arr.length - 1) {
                plane++;
                while (arr[j] == 0) {
                    console.log("j is decrementing")
                    j = j - 1;
                }
                if (j == i) {
                    return -1;
                } else {
                    console.log("im in else part")
                    console.log("j", j);
                    console.log("i", i);
                    i = j;
                }
                console.log("myi", i)
            } else {
                if ((i + arr[i]) > arr.length - 1) {
                    plane++;
                    return plane
                } else {
                    console.log("im below")
                    plane++;
                    i = (i + arr[i]);
                }
            }
        }
    }
    return plane;
}
var arr = [1,1,2,3,4]
var plane = calculatePlanes(arr);
console.log("plane", plane);



// Algorithm

// step1: Iterate throught the array arr
// step2: if 0th element is 0 then return -1 else go to element position (index+element)
// step3: equate index number to j variable
// step4: if element equal to zero then decerement j while the element does not equal to zero else go to step 5
// step5: if index becomes equal to j then return -1 else equate index to j
// step6: if we reach upto last element then return plane number else increment index by adding element value into it




