function RateARecipe(props) {
  const stars = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]; // Define your stars array
  function GiveRating() {
    return <h3>{stars[props.rating - 1]}</h3>;
  }

  return props.rating <= 5 && props.rating >= 0 ? GiveRating() : null;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 