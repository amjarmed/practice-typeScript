
interface FormData {
  username: string;
  email: string;
  password: string;
}

function validateForm(data: FormData): boolean {
  if (!data.username || !data.email || !data.password) {
    return false;
  }
  return true;
}

const userInput: FormData = {
  username: 'john_doe',
  email: 'john.doe@example.com',
  password: '123456',
};

console.log(validateForm(userInput)); // Output: true
