<?php 

function removeAPI($target, $url){
    // The target element was not found in the array
    if(array_search($target, $url) == false)
        return $url;
    while (array_shift($url) !== $target) {
        while ($url[0] !== $target) {
            array_shift($url);
            if (empty($url)) {
                break;
            }
        }
    }
    
    // Now, $myArray will contain the remaining elements, starting from the target element
    return $url;
}

?>