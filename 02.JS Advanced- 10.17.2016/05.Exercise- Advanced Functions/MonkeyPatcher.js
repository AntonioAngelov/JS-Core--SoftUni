function solved(a, command) {

    let procesor = (function () {
 let post = a;
        return {
            upvote: function () {
                post.upvotes += 1;
            },
            downvote: function () {
            post.downvotes += 1;
        },
            score: function () {
            let upvotes = post.upvotes;
            let downvotes = post.downvotes;
            let upvotesToPrint = post.upvotes;
            let downVotesToPrint = post.downvotes;
            let totslvotes = upvotesToPrint - downVotesToPrint;
            if (totslvotes > 50) {
                let toadd = Math.round(0.25 * Math.max(upvotesToPrint, downVotesToPrint));
                upvotesToPrint += toadd;
                downVotesToPrint += toadd;
            }
            let totalToPrint = upvotesToPrint - downVotesToPrint;
            let result = '';
            if ((upvotes / (upvotes + downvotes)) * 100 > 66 && upvotes - downvotes > 10) result = "hot";
            else if (upvotes >= downvotes && upvotes > 100 && downvotes > 100)result = "controversial";
            else if (upvotes - downvotes < 0) result = "unpopular";
            else result = "new";
            return [upvotesToPrint, downVotesToPrint, totalToPrint, result];
        }
        }
    }());

    return procesor[command]();
}

let a = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
}

solved.call(a, 'upvote');
solved.call(a, 'downvote');
console.log(solved.call(a, 'score'));