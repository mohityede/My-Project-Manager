export const getFallback = (name) => {
  let arr= name.split(" ");
  if(arr.length === 1) return arr[0][0];
  return name.split(" ")[0][0] + name.split(" ")[1][0];
};
