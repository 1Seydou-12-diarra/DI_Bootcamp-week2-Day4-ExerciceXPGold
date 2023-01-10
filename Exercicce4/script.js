//Omnipresent Value

function isOmnipresent(array, val) {
    for (const subarray of array) {
      if (!subarray.includes(val)) {
        return false;
      }
    }
    return true;
}
  