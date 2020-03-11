//1. a. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] find 8
//      11 <- middle arr[5]
//      is 8 less than 11? yes binarySearch(arr, 8, start, 5-1)
//      arr[4] = 8
//      is 8 = 8? yep
//      return 4 

//1. b. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] find 16
//        11 <- middle arr[5]
//        is 16 more than 11? YEP binarySearch(arr, 16, 5+1, end)
//        arr[6] = 12
//        is 16 more than 12? YEP binarySearch(arr, 16, 6+1, end)  
//        arr[7] = 14
//        is 16 more than 14? YEP binarySearch(arr, 16, 7+1, end)
//        arr[8] = 15
//        is 16 more than 15? YEP binarySearch(arr, 16, 8+1, end)
//        arr[9] = 17
//        is 16 more than 17? NOPE binarySearch(arr, 16, 9, 8)  
//        uh oh start is more than end
//        return -1
//        16 is not a value in the array :(