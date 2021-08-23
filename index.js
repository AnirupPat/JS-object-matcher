let obj1 = {
  name: "Anirup",
  city: "Bangalore",
  lastName: "Patnaik",
};
let obj2 = {
  name: "Anirup",
  lastName: "Patnaik2",
  altCity: "Bangalore",
};
const objMatcher = (baseObj, incomingObj) => {
  baseKeys = Object.keys(baseObj);
  console.log(baseKeys);
  console.log(baseObj, incomingObj);

  baseKeys.map((prop) => {
    if (
      incomingObj[prop] !== undefined &&
      baseObj[prop] !== incomingObj[prop]
    ) {
      console.log("Unmatching base values " + baseObj[prop]);
    }
    if (incomingObj[prop] === undefined) {
      console.log("Missing prop " + prop);
    }
  });
};

objMatcher(obj1, obj2);
