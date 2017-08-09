/**
 * Created by anton on 27-Oct-16.
 */
function orderRects(rectangles) {
    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function(other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }


    let rects = [];

    for(let [width, height] of rectangles){
        let curr = createRect(width, height);
        rects.push(curr);
    }

    rects.sort((a, b) => a.compareTo(b));
   return rects ;
}

orderRects([[10,5],[3,20],[5,12]]);