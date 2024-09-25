enum Status {
  Success = 200,
  NotFound = 404,
  InternalError = 500,
}

function getStatusMessage(status: Status): string {
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

const responseStatus: Status = Status.Success;
console.log(getStatusMessage(responseStatus)); // Output: Success! The request was successful.
