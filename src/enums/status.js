"use strict";
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["InternalError"] = 500] = "InternalError";
})(Status || (Status = {}));
function getStatusMessage(status) {
    switch (status) {
        case Status.Success:
            return 'Success! The request was successful.';
        case Status.NotFound:
            return 'Error! Resource not found.';
        case Status.InternalError:
            return 'Error! Internal server error.';
        default:
            return 'Unknown status.';
    }
}
const responseStatus = Status.Success;
console.log(getStatusMessage(responseStatus)); // Output: Success! The request was successful.
