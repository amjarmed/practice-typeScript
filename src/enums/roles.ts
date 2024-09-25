enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}

function getAccessLevel(role: Role): string {
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

const currentUserRole: Role = Role.User;
console.log(getAccessLevel(currentUserRole)); // Output: Limited Access
