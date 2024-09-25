"use strict";
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
function getAccessLevel(role) {
    switch (role) {
        case Role.Admin:
            return 'Full Access';
        case Role.User:
            return 'Limited Access';
        case Role.Guest:
            return 'Read-Only Access';
        default:
            return 'No Access';
    }
}
const currentUserRole = Role.User;
console.log(getAccessLevel(currentUserRole)); // Output: Limited Access
