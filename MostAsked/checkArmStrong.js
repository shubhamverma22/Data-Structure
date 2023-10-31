// abcd... = an + bn + cn + dn + ...
// 153 = 1*1*1 + 5*5*5 + 3*3*3                  True
// 1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4            True

function checkArmStrongNumber({ num = 0 }) {
  if (num === 0) {
    return "Please Enter a number!!";
  }
  const numLength = num.toString().length;
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    
    const remainder = temp % 10;
    sum += remainder ** numLength;
    temp = parseInt(temp / 10);
  }
  if (sum == num) {
    console.log(`${num} is an ArmStrong`);
  } else {
    console.log(`${num} is not an ArmStrong`);
  }
}

const num = 92727;

const isArmStrong = checkArmStrongNumber({ num });
