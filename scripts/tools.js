export const strictEquals = (a, b) => {
  if (Object.is(a,NaN) || Object.is(b,NaN)){
    console.log("Los valores son diferentes")
  } else if ((Object.is(a,-0) && Object.is(b,0)) || (Object.is(a,0) && Object.is(b,-0))){
    console.log("Los valores son iguales");
  } else if (Object.is(a,b)) {
    console.log("Los valores son iguales")
  } else {
    console.log("Los valores son diferentes")
  }
};
