/**
 * Created by anton on 31-Oct-16.
 */
function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

module.exports = {nuke}